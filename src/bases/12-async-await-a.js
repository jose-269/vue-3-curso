
const miPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('Promesa resuelta')
      reject('Error en mi promesa')
    }, 2000)
  })
};


const medirTiempoAsync = async() => {

  try {
    
    console.log(('Inicio'));
  
    const respuesta = await miPromesa();
    console.log(respuesta);
  
    console.log('Fin');
  
    // return 'Fin de medir tiempo Async'
  } catch (error) {
    // return 'Catch en midir TiempoAsync';
    throw 'Error en medi tiempo'

  }
}

medirTiempoAsync()
  .then(valor => console.log('Then Exitoso', valor))
  .catch(console.log)
