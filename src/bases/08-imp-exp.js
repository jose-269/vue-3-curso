// import { owners } from "./data/heroes";

import superHeroes from '../data/heroes'
// const [dc, marnpmvel] = owners;

// console.log(dc);
// console.log(marvel);

export const getHeroById = (id) => superHeroes.find(heroe => heroe.id === id);
// console.log(getHeroById(2));


export const getHeroByOwner= (owner) => superHeroes.filter(heroe => heroe.owner === owner);
// console.log(getHeroByOwner('DC'));

// console.log(superHeroes);