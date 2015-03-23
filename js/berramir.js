// var Berramir = Berramir || function () {};


function Berramir (obj) {

	obj.level = setLevel();
	obj.profBonus = setBonus();
	parseScores();
	parseProf();	


	function setLevel () {

		var levels = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000],
			i = 1;

			for (i; i < 21; i++) {
				if (obj.xp < levels[i] ) { return i; }
			}

	}


	function setBonus () {

		if (obj.level < 5) { return 2; }
		if (obj.level < 9) { return 3; }
		if (obj.level < 13) { return 4; }
		if (obj.level < 17) { return 5; }

		return 6;

	}


	function getBonus(score) {
		return Math.round((score / 2) - 5);
	}


	function parseScores() {

		var scores = ['strength', 'dexterity', 'constitution', 'intelligence', 'widsom', 'charisma'],
			key, score, val;

		for (key in scores) {
			score = scores[key];
			val = parseInt(obj[score], 10);
			obj[score] = {};
			obj[score]['score'] = val;
			obj[score]['bonus'] = getBonus(val);
		}

	}


	function parseProf() {
		var p = obj.proficiencies.split(',');
	};


	return obj;

}
