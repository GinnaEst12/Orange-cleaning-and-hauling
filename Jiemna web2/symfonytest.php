<?php
require_once 'vendor/autoload.php';

use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mime\Email;

// Create transport
$transport = Transport::fromDsn('smtp://mailhog:1025');
$mailer = new Mailer($transport);

// Create email
$email = (new Email())
    ->from('test@example.com')
    ->to('recipient@example.com')
    ->subject('Test email')
    ->text('This is a test message');

// Send
$mailer->send($email);

echo "Email sent! Check MailHog interface at localhost:8025";
?>
