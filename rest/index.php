<?php

require '../vendor/autoload.php';
require 'php/dbc.php';


$app = new \Slim\Slim(array(
	'debug'=>true,
	'mode' => 'development'
));


$dbc = new DBC('localhost', 'char_jkrayer', 'char_jkrayer', 'char_jkrayer');


//List All Characters
$app->get('/character', function() use ($app) {

	$dbc = $GLOBALS['dbc'];

	$app->response()->header("Content-Type", "application/json");

	echo $dbc->get_characters();

});


//Get a Single Character
$app->get('/character/:id', function($id) use ($app) {

	$dbc = $GLOBALS['dbc'];

	$app->response()->header("Content-Type", "application/json");

	echo $dbc->get_character( intval($id) );

});


//Get all notes for one character id
$app->get('/note/:cid', function ($cid) {

	$dbc = $GLOBALS['dbc'];

	echo $dbc->get_notes($cid);

});


//Add a single Note
$app->post('/note/', function () use ($app) {

	$dbc = $GLOBALS['dbc'];

	$request = $app->request();

	$body = $request->getBody();

	$input = json_decode($body);

	echo $dbc->set_note($input);

});


//Add a single Note
$app->put('/note/', function () use ($app) {

	$dbc = $GLOBALS['dbc'];

	$request = $app->request();

	$body = $request->getBody();

	$input = json_decode($body);

	echo $dbc->update_note($input);

});


//Get a Single Note by id
$app->get('/note/:cid/:id', function ($id, $cid) {

	$dbc = $GLOBALS['dbc'];

	echo $dbc->get_single_note($id, $cid);

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
