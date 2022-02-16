

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 4645468,
    lat: 14.6455,
    lng: 34.6545
  }
};


const persona2 = { ...persona }

persona2.nombre = 'Jose'

console.log(persona);
console.log(persona2);








