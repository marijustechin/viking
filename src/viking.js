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
    const saxon = this.saxonArmy[randomNumber(0, this.saxonArmy.length)];
    console.log('random saxon', saxon);
    const vikingStrength =
      this.vikingArmy[randomNumber(0, this.vikingArmy.length)].strength;

    return saxon.receiveDamage(vikingStrength);
  }

  saxonAttack() {}

  showStatus() {}
}
