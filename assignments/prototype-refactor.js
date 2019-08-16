/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
  constructor(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions
  }

  destroy() {
    return `${this.name} was removed from the game.`
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
  constructor(charAttrs) {
    super(charAttrs);
    this.healthPoints = charAttrs.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`
  }  
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
  constructor(humanAttrs) {
  super(humanAttrs);
    this.team = humanAttrs.team;
    this.weapons = humanAttrs.weapons;
    this.language = humanAttrs.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  class Villain extends Humanoid {
    constructor(villAttrs) {
      super(villAttrs);
      this.attackPoints = villAttrs.attackPoints;
      this.troubledChildhood = villAttrs.troubledChildhood;
    }

    attack(character, item) {
      let currentHealth = character.healthPoints - this.weapons[item] * this.attackPoints;
      character.healthPoints = currentHealth;
      if (currentHealth <= 0) {
        return `${character.name} has died!!!`
      } else {
        return `${this.name} attacked ${character.name} for ${this.weapons[item] * this.attackPoints} damage!!! ${character.name} is now at ${character.healthPoints}!`
      }
    }
  }

  class Hero extends Humanoid {
    constructor(heroAttrs) {
      super(heroAttrs);
      this.healPoints = heroAttrs.healPoints;
      this.attackPoints = heroAttrs.attackPoints;
    }

    heal(character) {
      let currentHealth = character.healthPoints + this.healPoints;
      character.healthPoints = currentHealth;
      return `${this.name} healed ${character.name} for ${this.healPoints} health! ${character.name} now has ${character.healthPoints} health!`
    }
    attack(character, item) {
      let currentHealth = character.healthPoints - this.weapons[item] * this.attackPoints;
      character.healthPoints = currentHealth;
      if (currentHealth <= 0) {
        return `${this.name} attacked ${character.name} for ${this.weapons[item] * this.attackPoints} damage!!! ${character.name} has died!!!`
      } else {
        return `${this.name} attacked ${character.name} for ${this.weapons[item] * this.attackPoints} damage!!! ${character.name} is now at ${character.healthPoints}!`
      }
    }
  }

  const thanos = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 5,
    },
    healthPoints: 150,
    name: 'Thanos',
    team: 'Self',
    weapons: {
      'punch': 10,
      'sword': 15,
    },
    language: 'English',
    attackPoints: 3,
  });

  const ironMan = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 4,
    },
    healthPoints: 100,
    name: 'Iron Man',
    team: 'Avengers',
    weapons: {
      'laser': 10,
      'missile': 25,
    },
    language: 'English',
    attackPoints: 2.5,
    healPoints: 25,
  });

  console.log(ironMan.takeDamage()); // Iron man took damage.
  console.log(ironMan.attack(thanos, 'missile')); // Iron Man attacked Thanos for 62.5 damage!!! Thanos is now at 87.5! 
  console.log(ironMan.attack(thanos, 'laser')); // Iron Man attacked Thanos for 25 damage!!! Thanos is now at 62.5!
  console.log(thanos.attack(ironMan, 'punch')); // Thanos attacked Iron Man for 30 damage!!! Iron Man is now at 70!
  console.log(thanos.attack(ironMan, 'sword')); // Thanos attacked Iron Man for 45 damage!!! Iron Man is now at 25!
  console.log(ironMan.heal(ironMan)); // Iron Man healed Iron Man for 25 health! Iron Man now has 50 health!
  console.log(ironMan.attack(thanos, 'laser')); // Iron Man attacked Thanos for 25 damage!!! Thanos is now at 37.5!
  console.log(ironMan.attack(thanos, 'laser')); // Iron Man attacked Thanos for 25 damage!!! Thanos is now at 12.5!
  console.log(thanos.attack(ironMan, 'sword')); // Thanos attacked Iron Man for 45 damage!!! Iron Man is now at 5!
  console.log(ironMan.attack(thanos, 'missile')); // Iron Man attacked Thanos for 62.5 damage!!! Thanos has died!!!
