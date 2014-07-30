<?php
/* Set e-mail recipient */
$myemail = "oyolulin17@.grinnell.edu";

/* Check all form inputs using check_input function */
$name = check_input($_POST['inputName'], "Your Name");
$email = check_input($_POST['inputEmail'], "Your E-mail Address");
$subject = check_input($_POST['inputSubject'], "Message Subject");
$message = check_input($_POST['inputMessage'], "Your Message");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email)) {
	show_error("Invalid e-mail address");
}
/* Let's prepare the message for the e-mail */

/*how is subject defined twice? */
$subject = "Email via portfolio website";

$message = "

Someone has sent you a message using your contact form:

Name: $name
Email: $email
Subject: $subject

Message:
$message

";

/* Send the message using mail() function */
mail($myemail, $subject, $message); //which subject does this refer to?

/* Redirect visitor to the thank you page */
header('Location: http://loyolu.github.io/confirmation.html');
exit();

/* Functions we used */
function check_input($data, $problem='') {
	$data = trim($data); //deletes blank characters from beginning and end of a string
	$data = stripslashes($data); //removes slashes; single slash is deleted, // becomes single slash
	$data = htmlspecialchars($data); //converts charcters to computer speak, i.e. & 
	if ($problem && strlen($data) == 0) {
		show_error($problem);
	}
	return $data;
}

function show_error($myError)
{
	?>
	<html>
	<body>

	<p>Please correct the following error:</p>
	<strong><?php echo $myError; ?></strong>
	<p>Hit the back button and try again</p>

	</body>
	</html>
	<?php
	exit();
	}
	?>