<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "partners@limeswood.ae"; // Change to your email if needed
    $subject = "New Contact Form Submission";
    $name = htmlspecialchars($_POST["name"] ?? '');
    $email = htmlspecialchars($_POST["email"] ?? '');
    $phone = htmlspecialchars($_POST["phone"] ?? '');
    $role = htmlspecialchars($_POST["role"] ?? '');
    $message = htmlspecialchars($_POST["message"] ?? '');

    $body = "Name: $name\nEmail: $email\nPhone: $phone\nRole: $role\nMessage: $message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "error" => "Failed to send email"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "error" => "Method not allowed"]);
} 