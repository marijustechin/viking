import { Viking, Saxon, War } from './viking.js';
import { randomNumber, randomVikingName } from './generator.js';

const war = new War();

const saxons = document.getElementById('saxons');
const vikings = document.getElementById('vikings');
const recruitArmies = document.getElementById('btn-recruit');

function generateArmies() {
  console.log('clikas');
}

recruitArmies.addEventListener(
  'click',
  generateArmies()
  //   for (let i = 0; i <= 5; i++) {
  //     const viking = new Viking(
  //       randomVikingName(),
  //       randomNumber(80, 100),
  //       randomNumber(80, 100)
  //     );
  //     war.addViking(viking);

  //     const saxon = new Saxon(randomNumber(80, 100), randomNumber(80, 100));
  //     war.addSaxon(saxon);
  //   }
);

const showArmies = (vikingArmy, saxonArmy) => {
  vikings.innerHTML = '';
  saxons.innerHTML = '';

  vikingArmy.forEach((viking) => {
    vikings.innerHTML += `<p>${viking.name} health: ${viking.health} strength: ${viking.strength}</p>`;
  });

  saxonArmy.forEach((saxon, idx) => {
    saxons.innerHTML += `<p>${idx} health: ${saxon.health} strength: ${saxon.strength}</p>`;
  });
};

showArmies(war.vikingArmy, war.saxonArmy);

// console.log(war);

// war.vikingAttack();

// console.log(war);
