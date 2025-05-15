import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  role: z.enum(['agent', 'individual', 'agency', 'other'], { required_error: 'Please select your role' }),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// API response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: 'success' | 'error';
}

// API service class
export class ApiService {
  private static readonly API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.limeswood.com';
  private static readonly API_TIMEOUT = 10000; // 10 seconds

  private static async fetchWithTimeout(
    url: string,
    options: RequestInit,
    timeout: number = ApiService.API_TIMEOUT
  ): Promise<Response> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(id);
      return response;
    } catch (error) {
      clearTimeout(id);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timed out');
      }
      throw error;
    }
  }

  static async submitContactForm(data: ContactFormData): Promise<ApiResponse<{ id: string }>> {
    try {
      // Validate data before sending
      contactFormSchema.parse(data);

      // Always send to support@limeswood.ae
      const payload = { ...data, email: 'support@limeswood.ae' };

      const response = await this.fetchWithTimeout(
        `${this.API_BASE_URL}/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add CSRF token if needed
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to submit form');
      }

      const responseData = await response.json();
      return {
        status: 'success',
        data: responseData,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          status: 'error',
          error: error.errors[0].message,
        };
      }
      
      return {
        status: 'error',
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      };
    }
  }
} 