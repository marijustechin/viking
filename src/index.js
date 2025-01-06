import { Viking, Saxon, War } from './viking.js';
import { randomNumber, randomVikingName } from './generator.js';

const war = new War();

let vikingAttack = true;

const swords = document.querySelector('.swords');
const saxons = document.getElementById('saxons');
const vikings = document.getElementById('vikings');
const recruitArmies = document.getElementById('btn-recruit');
const fight = document.querySelector('.fight');

const showArmies = () => {
  vikings.innerHTML = '';
  saxons.innerHTML = '';

  war.vikingArmy.forEach((viking) => {
    vikings.innerHTML += `<p>${viking.name} health: ${viking.health} strength: ${viking.strength}</p>`;
  });

  war.saxonArmy.forEach((saxon, idx) => {
    saxons.innerHTML += `<p>${idx} health: ${saxon.health} strength: ${saxon.strength}</p>`;
  });
};

recruitArmies.onclick = () => {
  for (let i = 0; i < 5; i++) {
    const viking = new Viking(
      randomVikingName(),
      randomNumber(80, 100),
      randomNumber(80, 100)
    );
    war.addViking(viking);

    const saxon = new Saxon(randomNumber(80, 100), randomNumber(80, 100));
    war.addSaxon(saxon);
  }
  recruitArmies.classList.add('hidden');
  fight.classList.remove('hidden');
  swords.classList.remove('hidden');
  showArmies();
};

fight.onclick = () => {
  if (vikingAttack) {
    document.querySelector('.info').innerHTML = war.vikingAttack();
  } else {
    document.querySelector('.info').innerHTML = war.saxonAttack();
  }
  vikingAttack = !vikingAttack;
  showArmies();
  document.querySelector('.status').innerHTML = war.showStatus();
};
