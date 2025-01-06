import { randomNumber } from './generator.js';

// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
export class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
export class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
export class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomSaxon = randomNumber(0, this.saxonArmy.length);

    const saxon = this.saxonArmy[randomSaxon];

    const vikingStrength =
      this.vikingArmy[randomNumber(0, this.vikingArmy.length)].strength;

    const message = saxon.receiveDamage(vikingStrength);

    if (saxon.health < 0) {
      let saxons = this.saxonArmy.filter((saxon) => saxon.health > 0);
      this.saxonArmy = [...saxons];
    }

    return message;
  }

  saxonAttack() {
    const randomViking = randomNumber(0, this.vikingArmy.length);

    const viking = this.vikingArmy[randomViking];
    const saxonStrength =
      this.saxonArmy[randomNumber(0, this.saxonArmy.length)].strength;

    const message = viking.receiveDamage(saxonStrength);
    if (viking.health < 0) {
      let vikings = this.vikingArmy.filter((viking) => viking.health > 0);
      this.vikingArmy = [...vikings];
    }

    return message;
  }

  showStatus() {
    return `${this.vikingArmy.length} vikings vs ${this.saxonArmy.length} saxons`;
  }
}
