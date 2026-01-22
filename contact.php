<?php
if($_POST) {
    $to = "makben03@gmail.com";
    $subject = "New Website Inquiry - Makumbi Benedicto";
    $message = "Name: " . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\n\n" . $_POST['message'];
    $headers = "From: webmaster@yourdomain.com";
    
    if(mail($to, $subject, $message, $headers)) {
        echo "Message Sent Successfully!";
    } else {
        echo "Error: Message failed.";
    }
}
?>