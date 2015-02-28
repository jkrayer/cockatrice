<?php
require 'rest/php/dbc.php';

$dbc = new DBC('localhost', 'char_jkrayer', 'char_jkrayer', 'char_jkrayer');


echo "<pre>";
echo $dbc->set_note('This is a ANOTHER note from tester.php');
echo "</pre>";

/*
if (isset($_POST['note'])) {
	echo $dbc->set_note($_POST['note']);
}

echo "<pre>I'm post";
print_r($_POST);
echo "</pre>";

echo "set?=" . isset($_POST['note']);
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="UTF-8">
	<title>Cockatrice</title>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

</head>

<body>

<form method="post" action="tester.php" >
	<input type="text" name="note" />
	<button type="submit">Submit</button>
</form>

</body>
</html>
