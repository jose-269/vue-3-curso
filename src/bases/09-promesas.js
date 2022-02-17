 import { getHeroById } from './bases/09-imp-exp';
// console.log('Ínicio');

// new Promise( (resolve, reject) => {

//   console.log('cuerpo de la promesa');

//   // resolve('Promesa resolved')
//   reject('Promersa resolved con error');

// })
// .then(console.log)
// .catch(console.log)

// console.log('Fin');

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {

    setTimeout(() =>{
      const hero = getHeroById(id);

      if(hero)resolve(hero);
      else reject('Heroe no encontrado')

      
    },2000);
  })
};


getHeroByIdAsync(5)
  .then(h => console.log(`El Heroe es ${h.name}`))
  .catch(console.log)