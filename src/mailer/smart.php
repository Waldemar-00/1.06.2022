<?php 

// Input validation and sanitization
function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Check if POST data exists and validate
if (!isset($_POST['name']) || !isset($_POST['phone']) || !isset($_POST['email'])) {
    http_response_code(400);
    exit('Missing required fields');
}

$name = sanitizeInput($_POST['name']);
$phone = sanitizeInput($_POST['phone']);
$email = sanitizeInput($_POST['email']);

// Validate inputs
if (empty($name) || strlen($name) < 2) {
    http_response_code(400);
    exit('Invalid name');
}

if (!validateEmail($email)) {
    http_response_code(400);
    exit('Invalid email address');
}

if (empty($phone)) {
    http_response_code(400);
    exit('Invalid phone number');
}

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// Load SMTP configuration from environment variables or config file
// Never hardcode credentials in source code!
$smtp_host = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
$smtp_username = getenv('SMTP_USERNAME') ?: 'your-email@gmail.com';
$smtp_password = getenv('SMTP_PASSWORD') ?: 'your-app-password';
$from_email = getenv('FROM_EMAIL') ?: 'your-email@gmail.com';
$to_email = getenv('TO_EMAIL') ?: 'recipient@gmail.com';

$mail->isSMTP();
$mail->Host = $smtp_host;
$mail->SMTPAuth = true;
$mail->Username = $smtp_username;
$mail->Password = $smtp_password;
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom($from_email, 'Site Pulse');
$mail->addAddress($to_email);
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . ' <br>
	Номер телефона: ' . htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') . '<br>
	E-mail: ' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '';

if(!$mail->send()) {
    http_response_code(500);
    exit('Failed to send email');
} else {
    http_response_code(200);
    echo 'Email sent successfully';
}

?>