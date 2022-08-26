const { option, options } = require('yargs');
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'

    })
    .option('ha',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Numero hasta donde se hara la multiplicacioon'
    })
    .check((argv,options) =>{
        if(isNaN(argv.base)){
            throw "La base tiene que ser un numero";
        }
        if(isNaN(argv.hasta)){
            throw "La variable hasta tiene que ser un numero";
        }
        return true;
    })
    .argv;


module.exports = argv;