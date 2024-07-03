<?php
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = htmlspecialchars($_POST['mail']) ? trim($_POST['mail']) : '';
    $phone = htmlspecialchars($_POST['nohp']);
    $address = htmlspecialchars($_POST['addr']) ? strip_tags(trim($_POST['addr'])) : '';
    $message = htmlspecialchars($_POST['mssg']) ? strip_tags(trim($_POST['mssg'])) : '';

    if (empty($name)) {
        $errors[] = "Name is required";
    } 

    if (empty($email)) {
        $errors[] = "Email is required";
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }

    if (empty($phone)) {
        $errors[] = "Phone number is required";
    } else if (!preg_match("/^[0-9]*$/", $phone)) {
        $errors[] = "Invalid phone number format";
    }

    if (empty($address)) {
        $errors[] = "Address is required";
    }

    if (empty($message)) {
        $errors[] = "Message is required";
    }

    if (empty($errors)) {
        // Recipient email address (replace with your own)
        $recipient = "alif.satoe@gmail.com";

        // Additional headers
        $headers = "From: $name <$email>";

        // Send email
        if (mail($recipient, $message, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    } else {
        // Display errors
        echo "The form contains the following errors:<br>";
        foreach ($errors as $error) {
            echo "- $error<br>";
        }
    }
} else {
    header("HTTP/1.1 403 Forbidden");
    echo "Invalid request.";
}
?>
