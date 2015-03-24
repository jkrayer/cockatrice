// var Berramir = Berramir || function () {};

function Berramir (obj) {

	this.obj = obj;

	//One Time Setup
	this.setLevel();
	this.setBonus();
	this.parseScores();
	this.parseProf();

	return this.obj;

}



/**
 * Set level based on XP Threshold
 */
Berramir.prototype.setLevel = function () {

	var levels = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000],
		i = 1;

	for (i; i < 21; i++) {
		if (this.obj.xp < levels[i]) { break; }
	}

	this.obj.level = i;

}



/**
 * Set Proficency Bonus Based on Level
 */
Berramir.prototype.setBonus = function () {

	var bonus = 6;

	if (this.obj.level < 5) { bonus = 2; }
	if (this.obj.level < 9) { bonus = 3; }
	if (this.obj.level < 13) { bonus = 4; }
	if (this.obj.level < 17) { bonus = 5; }

	this.obj.profBonus = bonus;

}



/**
 * Set Score Mod based on supplied score
 * @param {number} score ability score
 */
Berramir.prototype.setScoreMod = function (score) {

	return Math.floor((score / 2) - 5);

}



/**
 * Set Scores and Mods
 * @return {[type]} [description]
 */
Berramir.prototype.parseScores = function () {

	var scores = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'],
		key, val;

	for (key in scores) {
		val = parseInt(this.obj[scores[key]], 10);
		this.obj[scores[key]] = {};
		this.obj[scores[key]]['score'] = val;
		this.obj[scores[key]]['bonus'] = this.setScoreMod(val);
	}

}




Berramir.prototype.parseProf = function () {

	var prof = this.obj.proficiencies.split(','),
		skillObj = {
			Strength: 'strength',
			Dexterity: 'dexterity',
			Constitution: 'constitution',
			Intelligence: 'intelligence',
			Wisdom: 'wisdom',
			Charisma: 'charisma',
			Acrobatics: 'dexterity',
			'Animal Handling': 'wisdom',
			Arcana: 'intelligence',
			Athletics: 'strength',
			Deception: 'charisma',
			'History': 'intelligence',
			Insight: 'wisdom',
			Intimidation: 'charisma',
			Investigation: 'intelligence',
			Medicine: 'wisdom',
			Nature: 'intelligence',
			Perception: 'wisdom',
			Performance: 'charisma',
			Persuasion: 'charisma',
			Religion: 'intelligence',
			'Sleight of Hand': 'dexterity',
			Stealth: 'dexterity',
			Survival: 'wisdom'
		},
		key, keyScore;

	this.obj.skills = {};

	for (key in skillObj) {

		keyScore = skillObj[key];

		this.obj.skills[key] = this.obj[keyScore].bonus;

		if (prof.indexOf(key) > -1) {
			this.obj.skills[key] += this.obj.profBonus;
		}

	}

};
