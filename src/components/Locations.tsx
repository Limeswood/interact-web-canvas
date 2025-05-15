
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const locations = [
  {
    id: "uae",
    name: "The UAE",
    image: "/placeholder.svg",
    cities: ["Dubai", "Abu Dhabi", "Sharjah"],
    description: "Luxury properties in the heart of the Middle East's most prestigious cities."
  },
  {
    id: "oman",
    name: "Oman",
    image: "/placeholder.svg",
    cities: ["Muscat", "Salalah", "Nizwa"],
    description: "Exclusive developments in Oman's most scenic and sought-after locations."
  },
  {
    id: "qatar",
    name: "Qatar",
    image: "/placeholder.svg",
    cities: ["Doha", "Lusail", "The Pearl"],
    description: "Modern luxury apartments and villas in Qatar's rapidly growing real estate market."
  }
];

const Locations = () => {
  return (
    <section id="locations" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">WhiteVill locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We operate in the most prestigious locations across the globe, providing exclusive access to luxury properties in world-class destinations.
          </p>
        </div>
        
        <Tabs defaultValue="uae" className="w-full">
          <TabsList className="w-full flex mb-8 bg-transparent justify-center">
            {locations.map(location => (
              <TabsTrigger 
                key={location.id} 
                value={location.id}
                className="data-[state=active]:border-b-2 data-[state=active]:border-whitevill-red data-[state=active]:shadow-none data-[state=active]:rounded-none data-[state=active]:bg-transparent text-lg px-8 py-3"
              >
                {location.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {locations.map(location => (
            <TabsContent key={location.id} value={location.id} className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-3xl font-playfair font-bold mb-4">{location.name}</h3>
                  <p className="mb-6 text-gray-700">{location.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">Featured Cities:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {location.cities.map((city, index) => (
                        <div key={index} className="bg-whitevill-beige p-4 rounded text-center">
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="btn-primary">Browse Properties</Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Locations;
