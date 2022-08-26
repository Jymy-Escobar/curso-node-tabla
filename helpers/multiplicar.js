const fs = require('fs');
const colors = require('colors');


const crearArchivo  = async( base = 5, listar= false, hasta = 10 ) => {
    try {
        console.log('==================='.green);
        console.log('   Tabla del: '.green, colors.blue(base));
        console.log('==================='.green);
        
        let salida,consola = '';
        
        for (let i = 1; i <=hasta; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${ base * i} \n`;  
            consola += `${base} x ${i} = ${ base * i} \n`;  
        }
        
        if(listar){
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,consola);
        
        return `tabla-${base}`;
    } catch (error) {
        return `Error en: ${error}`;
    }
}


module.exports = {
    crearArchivo,
}