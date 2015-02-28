<?php

require 'vendor/autoload.php';
require 'php/dbc.php';


$app = new \Slim\Slim(array(
	'debug'=>true,
	'mode' => 'development'
));


$dbc = new DBC('localhost', 'char_jkrayer', 'char_jkrayer', 'char_jkrayer');


$app->get('/', function() {

	$dbc = $GLOBALS['dbc'];
	$app = $GLOBALS['app'];

	$app->response()->header("Content-Type", "application/json");

	echo $dbc->get_notes();

});


$app->post('/', function () {
	//add new note
	$dbc = $GLOBALS['dbc'];

	$dbc->set_note($_POST['note']);
});



/*
$app->get('/:id', function ($id) {
	$dbc = $GLOBALS['dbc'];
	echo $dbc->get_note($id);
});

$app->put('/:id', function ($id) {
	//update the note with the given id
	echo "put home $id";
});


$app->delete('/:id', function ($id) {
	//update the note with the given id
	echo "delete home $id";
});
*/

$app->run();


?>

