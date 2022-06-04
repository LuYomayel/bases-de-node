const {crearArchivo} = require('./helpers/multiplicar')                      
const argv = require('./config/yargs')

console.clear();



// console.log(base)
crearArchivo(argv.b, argv.l, argv.h)
    .then(response => console.log(response))
    .catch(err => console.log(err))