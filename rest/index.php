<?php

require 'vendor/autoload.php';
require 'php/dbc.php';


$app = new \Slim\Slim(array(
	'debug'=>true,
	'mode' => 'development'
));


$dbc = new DBC('localhost', 'char_jkrayer', 'char_jkrayer', 'char_jkrayer');


$app->get('/characters', function() use ($app) {

	$dbc = $GLOBALS['dbc'];

	$app->response()->header("Content-Type", "application/json");

	echo $dbc->get_characters();

});


$app->get('/:cid', function($cid) use ($app) {

	$dbc = $GLOBALS['dbc'];

	$app->response()->header("Content-Type", "application/json");

	echo $dbc->get_notes($cid);

});


$app->post('/', function () use ($app) {

	$dbc = $GLOBALS['dbc'];
	$request = $app->request();
	$body = $request->getBody();
	$input = json_decode($body);

	echo $dbc->set_note($input);

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

