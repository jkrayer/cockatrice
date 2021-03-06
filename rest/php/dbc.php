<?php
/**
 * Connects to DB and Preforms SQL Functions
 * @internal http://dev.mysql.com/doc/refman/5.0/en/index.html
 * @package DnD Builder
 * @subpackage Core
 *
 * @since 0.0.1
 * @version 0.0.1
 *
*/

class DBC {

	/**
	 *
	 * @var mixed stores database connection
	 *
	 * @since 0.0.1
	*/
	protected $_mysql = NULL;

	/**
	 * Open MySQL Connection
	 *
	 * @param string $host
	 * @param string $username
	 * @param string $password
	 * @param string $db
	 *
	 * @since 0.0.1
	*/
	public function __construct($host, $username, $password, $db)
	{
		//Connect to the database
		$this->_mysql = new mysqli($host, $username, $password, $db) or
			die('There was a problem connecting to the database');
	}

	private function process($query)
	{
		$data = [];
		$row = [];
		$query_result = $this->_mysql->query($query);

		while ($row = $query_result->fetch_array(MYSQLI_ASSOC)) {
			$data[] = $row;
		}

		return json_encode($data);

	}


	//Public Interface
	public function get_characters()
	{
		return $this->process("SELECT id, name, xp, race, klass, brief FROM characters");
	}


	public function get_character($id = 0)
	{

		if ($id === 0 || !is_int($id)) {
			return "Invalid argument supplied to get_character";
		}

		return $this->process("SELECT * FROM characters WHERE id = $id");

	}


	public function get_notes($cid)
	{

		$cid = (int) $cid;

		if (!is_int($cid)) {
			die('get_notes needs a numeric id');
		}

		return $this->process("SELECT * FROM character_notes WHERE character_id = $cid ORDER BY id DESC");
	}


	//
	public function get_single_note($id, $cid) {

		$query_string = "SELECT * FROM character_notes WHERE id = %d AND character_id = %d";

		$query = sprintf($query_string, $id, $cid);

		return $this->process($query);

	}

	//Public Interface
	public function get_last_note()
	{
		return $this->process('SELECT * FROM character_notes ORDER BY id DESC LIMIT 1');
	}


	public function set_note($data)
	{

		$query_string = 'INSERT INTO character_notes (character_id, note, date) VALUES (%d, "%s", %d)';

		$escaped_string = mysqli_real_escape_string ($this->_mysql, $data->note);
		$id = (int)$data->character_id;
		$date = (int)$data->date;

		$query = sprintf($query_string, $id, $escaped_string, $date);

		$this->_mysql->query($query);

		return $this->get_last_note();
		//return $this->_mysql->insert_id;
	}


	//
	public function update_note($data)
	{
		$query_string = "UPDATE character_notes SET note = '%s' WHERE id = %d";

		$escaped_string = mysqli_real_escape_string ($this->_mysql, $data->note);

		$id = (int)$data->id;

		$query = sprintf($query_string, $escaped_string, $id);

		return $this->_mysql->query($query);

	}


	/**
	 * Close MySQL Connection
	 *
	 * @since 0.0.1
	*/
	public function __destruct()
	{
		$this->_mysql->close();
	}


}

/****
function connect_db() {
	$server = 'localhost'; // this may be an ip address instead
	$user = 'char_jkrayer';
	$pass = 'char_jkrayer';
	$database = 'char_jkrayer';
	$connection = new mysqli($server, $user, $pass, $database);

	return $connection;
}


	$db = connect_db();

	$result = $db->query('SELECT * FROM character_notes');

	while ( $row = $result->fetch_array(MYSQLI_ASSOC) ) {
		$data[] = $row;
	}

	echo json_encode($data);
****/
?>
