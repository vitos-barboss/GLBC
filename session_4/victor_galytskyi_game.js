console.log('Available characters: \n' +
    '\theroes: warrior, rogue, sorcerer;\n' +
    '\tmonsters: zombie, skeleton, holem;\n' +
    'Available methods:\n' +
    '\t.addHero(hero)\n' +
    '\t.addMonster(monster)\n' +
    '\t.beginJourney()\n' +
    '\t.fight()\n' +
    '\t.finishJourney()\n\n');

/*
 * Create superclass for Hero and Monster classes
 * accepts:
 *      1) character class (string)
 *      2) life of character (number)
 *      3) damage (number)
 */

function Character(charClass, life, damage) {
    this.charClass = charClass;
    this.life = life;
    this.damage = damage;
}

/*
 * Method that return character class
 */

Character.prototype.getCharClass = function() {
    return this.charClass;
};

/*
 * Method that return name of character
 */

Character.prototype.getName = function() {
    return this.name;
};

/*
 * Method of Character, decrease amount of target life
 * on the value of attackers damage.
 *
 * Accepts target - instance of Hero(Monster).
 * returns:
 *      1) "CHARACTER_CLASS killed" - this action will kill target;
 *      2) "done AMOUNT_OF_DAMAGE damage to CHARACTER_CLASS";
 */

Character.prototype.attack = function(target) {

    if (target.life - this.damage >= 0) {
        target.life -= this.damage;
    } else {
        target.life = 0;
    }

};

/*
 * Hero constructor
 * accepts:
 *      1) name of hero (string)
 *      2) class of hero (string)
 */

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;
Hero.prototype.superclass = Character;

function Hero(name, heroClass) {

    this.name = name;

    if (Hero.charClassConig[heroClass]) {
        this.superclass(Hero.charClassConig[heroClass].charClass,
                        Hero.charClassConig[heroClass].life,
                        Hero.charClassConig[heroClass].damage);
    } else {
        throw new Error('Incorrect character class provided');
    }

}

Hero.charClassConig = {
    warrior:
        {charClass: 'Warrior', life: 30, damage: 4},
    rogue:
        {charClass: 'Rogue', life: 25, damage: 3},
    sorcerer:
        {charClass: 'Sorcerer', life: 20, damage: 5}
};

/*
 * Method of Hero, decrease amount of target life
 * on the value of attackers damage.
 *
 * Accepts target - instance of Hero.
 * returns:
 *      1) "CHARACTER_CLASS killed" - this action will kill target;
 *      2) "done AMOUNT_OF_DAMAGE damage to CHARACTER_CLASS";
 */

Hero.prototype.attack = function(target) {

    if (target instanceof Hero) {
        throw new Error('I will attack only monsters');
    }

    this.superclass.prototype.attack.call(this, target);

    if (target.life === 0) {
        return 'Hero attacked, ' + target.getCharClass() + ' killed';
    } else {
        return 'Hero attacked, done ' + this.damage + ' damage to ' + target.getCharClass();
    }

};


Monster.prototype = Object.create(Character.prototype);
Monster.prototype.constructor = Monster;
Monster.prototype.superclass = Character;

/*
 * Monster constructor
 * accepts:
 *      1) name of monster (string)
 *      2) class of monster (string)
 */

function Monster(monsterClass) {

    if (Monster.charClassConig[monsterClass]) {
        this.superclass(Monster.charClassConig[monsterClass].charClass,
                        Monster.charClassConig[monsterClass].life,
                        Monster.charClassConig[monsterClass].damage);
    } else {
        throw new Error('Incorrect character class provided');
    }
}

Monster.charClassConig = {
    zombie:
        {charClass: 'Zombie', life: 8, damage: 4},
    skeleton:
        {charClass: 'Skeleton', life: 10, damage: 6},
    holem:
        {charClass: 'Holem', life: 15, damage: 6}
};

/*
 * Method that return name of monster
 * return "I am MONSTER_CHARACTER_CLASS I don`t have name"l
 */

Monster.prototype.getName = function() {
    return 'I am ' + this.charClass + ' I don`t have name';
};

/*
 * Method of Monster, decrease amount of target life
 * on the value of attackers damage.
 *
 * Accepts target - instance of Monster.
 * returns:
 *      1) "CHARACTER_CLASS killed" - this action will kill target;
 *      2) "done AMOUNT_OF_DAMAGE damage to CHARACTER_CLASS";
 */

Monster.prototype.attack = function(target) {

    if (target instanceof Monster) {
        throw new Error('I will attack only hero');
    }

    this.superclass.prototype.attack.call(this, target);

    if (target.life === 0) {
        return 'Monster attacked, ' + target.getCharClass() + ' killed';
    } else {
        return 'Monster attacked, done ' + this.damage + ' damage to ' + target.getCharClass();
    }

};

/*
 * Game constructor
 */

function Game() {

    this.status = 'Idle';
    this.hero;
    this.monsters = [];
    this.maxMonsters = 2;
}

/*
 * Method of Game that set game.hero to hero instance
 * Accepts: instance of Hero class;
 * throw:
 *      1) "Only one hero can exist" - if hero is already defined
 *      2) "Only hero instance can be hero" - if not hero was passed to function
 * returns:
 *      "Hero created, welcome HERO_NAME" - if ok
 */


Game.prototype.addHero = function(newHero) {

    if (!(newHero instanceof Hero)) {
        throw new Error('Only hero instance can be hero');
    } else if (typeof this.hero === 'object') {
        throw new Error('Only one hero can exist');
    } else if (this.hero === undefined) {
        this.hero = newHero;
        return 'Hero created, welcome ' + this.hero.name;
    }
};

/*
 * Method of Game that adds monster to game.monsters array
 * Accepts: instance of Monster class;
 * throw:
 *      1) "Only 2 monsters can exist" - if there are already 2 monsters defined
 *      2) "Only monster Instances can become monsters" - if not monster was passed to function
 * returns:
 *      "Monster Created, MONSTER_CHARACTER_CLASS appeared in the world" - if ok
 */

Game.prototype.addMonster = function(newMonster) {

    if (!(newMonster instanceof Monster)) {
        throw new Error('Only monster Instances can become monsters');
    } else if (this.monsters.length < this.maxMonsters) {
        this.monsters.push(newMonster);
        return 'Monster Created, ' + newMonster.charClass + ' appeared in the world';
    } else {
        throw new Error('Only ' + this.maxMonsters + ' monsters can exist');
    }
};

/*
 * Method of Game that Change game status from "Idle" to "In progress",
 * should be possible only if hero and monsters are defined
 *
 * returns:
 *      "Your journey has started, fight monsters" - if ok
 * throw:
 *      "Cannot start journey, populate the world with hero and monsters first" - if smth went wrong
 */

Game.prototype.beginJourney = function() {

    if (typeof this.hero === 'object' && this.monsters.length === this.maxMonsters) {
        this.status = 'In progress';
        return 'Your journey has started, fight monsters';
    }
    throw new Error('Cannot start journey, populate the world with hero and monsters first');
};

/*
 * Method of Game that Change game status from "In progress" to "Finished", possible only
 * if hero or both monsters are dead(their life equals 0)
 *
 * return:
 *      1) "The Game is finished. Monstrs are dead. Congratulations" - if both monsters are dead
 *      2) "The Game is finished. Hero is dead :(" - if hero is dead
 *      3) "Don`t stop. Some monsters are still alive. Kill`em all" - if its not time yet
 */

Game.prototype.finishJourney = function() {

    if (this.hero.life === 0) {
        return 'The Game is finished. Hero is dead :(';
    }


    var monstersDead = this.monsters.every(function(value, i, arrOfMonsters) {
        return arrOfMonsters[i].life === 0;
    });
    if (monstersDead) {
        this.status = 'Finished';
        return 'The Game is finished. Monsters are dead. Congratulations';
    } else {
        return 'Don`t stop. Some monsters are still alive. Kill`em all';
    }

};

/*
 * Method of Game that initiate a battle between hero and monster, one after another,
 * they should attack each other, starting from hero, and until someone life is not 0.
 *
 *returns
 *      string 'Hero win' or 'Monster win', depending on who has life points left
 */

Game.prototype.fight = function() {

    if (this.status === 'In progress') {
        
        var nextMonsterForFight = this.monsters.find(function (monster) {
            return monster.life > 0;
        });

        if (nextMonsterForFight === undefined) {
            return 'Monsters are dead. You can finish your journey';
        }

        while (nextMonsterForFight.life > 0 && this.hero.life > 0) {
            var fightHeroResult = this.hero.attack(nextMonsterForFight);
            console.log(fightHeroResult); // fast
            if (nextMonsterForFight.life > 0) {
                var fightMonsterResult = nextMonsterForFight.attack(this.hero);
                console.log(fightMonsterResult); // fast
            }
        }

        if (this.hero.life <= 0) {
            return 'Monster win';
        } else {
            return 'Hero win';
        }

    } else {
        throw new Error('Begin your journey to start fighting monsters');
    }
};

