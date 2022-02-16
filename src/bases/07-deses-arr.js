


const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [, , ,  goten = 'Sinvalor'] = characters;

console.log(goten);

const returnArray = ([letras, numbers]) => {
  return [letras, numbers]
};

const [s, n] = returnArray(['XYZ', 123])

console.log(s,n);