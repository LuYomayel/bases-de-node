const argv = require('yargs')
.option('b', {
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'Tabla que quiero imprimir'
})
.option('l',{
    alias: 'listar',
    type:'boolean',
    demandOption:true,
    default: false,
    describe: 'Listar o no la tabla'
})
.option('h',{
    alias: 'hasta',
    type:'number',
    demandOption:true,
    default: 10,
    describe: 'Tabla hasta...'
})
.check( (argv, options) => {
    if( isNaN(argv.b) ){
        throw 'La base tiene que ser un numero'
    }
    return true
})
.argv;

module.exports = argv
