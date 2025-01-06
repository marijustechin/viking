const vikingNames = [
  'Arne',
  'Birger',
  'Bjørn',
  'Bo',
  'Erik',
  'Frode',
  'Gorm',
  'Halfdan',
  'Harald',
  'Knud',
  'Kåre',
  'Leif',
  'Njal',
  'Roar',
  'Rune',
  'Sten',
  'Skarde',
  'Sune',
  'Svend',
  'Troels',
  'Toke',
  'Torsten',
  'Trygve',
  'Ulf',
  'Ødger',
  'Åge',
];

const saxonNames = [
  'Alwalda',
  'Atelic',
  'Aelle',
  'Ealdian',
  'Benwick',
  'Agyfen',
  'Octe',
  'Seaver',
  'Ine',
  'Dreogan',
  'Tolan',
  'Recene',
  'Ancenned',
  'Pleoh',
  'Earm',
  'Leanian',
  'Tredan',
  'Beornwulf',
  'Grindan',
  'Bana',
  'Scand',
  'Aylsworth',
  'Altun',
  'Broga',
  'Toland',
];

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomVikingName = () => {
  let random = randomNumber(0, vikingNames.length);
  return vikingNames[random];
};
