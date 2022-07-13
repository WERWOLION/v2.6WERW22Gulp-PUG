<?php
        // ----------------------------капча----------------
if (isset($_POST['recaptcha_response']) && !empty($_POST['recaptcha_response'])) {
  
  // Build POST request
  $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
  $recaptcha_secret = '6Lebj_sdAAAAAL6v9dMNkfiA5xqIRzZqLZnY8yU-';
  $recaptcha_response = $_POST['recaptcha_response'];

  // Make and decode POST request
  $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
  $recaptcha = json_decode($recaptcha);


  // Take action based on the score returned
  if ($recaptcha->score >= 0.5) {
    $messageRecaptcha = 'проверка на бота пройдена';
    $message = $messageRecaptcha;
  }else {
    // code...
    $message = 'Вы распознаны гуглом как бот';
    die ("Recaptcha Защита от бота посчитала вас отправителем спама");
  }
}

 $response = ['message' => $message]; // нужно для отправки сообщения на сайт
 // -------------END---------------капча----------------


  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
 
  require 'PHPMailer/src/Exception.php';
  // require_once "PHPMailer/src/SMTP.php";
  require 'PHPMailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = "utf-8";
  $mail->setLanguage('ru','PHPMailer/language/');
  $mail->isHTML(true); // включить теги письма


// от кого письмо
$mail->setFrom('werwolion@gmail.com', 'Возможный заказчик');
// кому отправить
$mail->addAddress('werwolion@mail.ru');
// Тема письма
$mail->Subject = 'Вам поступило сообщение с вашего сайта"';

//тело письма
$body = '<h1> Вам поступило сообщение с вашего сайта </h1>';


if(trim(!empty($_POST['name']))){ // inputName
  $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){ // inputMail
  $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){ // formMessage
  $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
}


$mail->Body = $body;
// Отправляем
if (!$mail->send()){
  $message = 'Произошла ошибка на сервере';
}else{
   $message = 'Сообщение успешно отправлено на сервере, ожидайте ответа.'. ' ' . $messageRecaptcha;
  // $message = 'Сообщение успешно отправлено , ожидайте ответа.';
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);