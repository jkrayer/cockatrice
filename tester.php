<?php
require 'rest/php/dbc.php';

$dbc = new DBC('localhost', 'char_jkrayer', 'char_jkrayer', 'char_jkrayer');

echo $dbc->get_last_note();

?>

<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="UTF-8">
	<title>Cockatrice</title>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

</head>

<body>

<form action="rest/index.php" method="post">
	<textarea name="j">{"note":"this is a fucking note","id":1}</textarea>
	<button type="submit">Submit</button>
</form>


</body>
</html>
