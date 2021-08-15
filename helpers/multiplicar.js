const colors = require('colors');
const fs = require('fs');
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {


    try{

        let salida = ''; 
        let consola = '';
    
        for (let a = 1; a < hasta; a++) {
            salida += `${base} x ${a} = ${base*a} \n`;
            consola += (colors.bold(`${colors.white(base)} ${'x'.green} ${a} ${'='.green} ${base*a} \n`));
        } 
        

        if(listar) {

        console.log('==========================================================================='.bgGreen);
        console.log('==========================================================================='.bgRed);
        console.log(`=========================== LA TABLA DEL ${base} ================================`.bold);
        console.log('==========================================================================='.bgRed);
        console.log('==========================================================================='.bgGreen);
        console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);
        
        return `Archivo tabla-del-${base}.txt creado`;

    } catch(err) {
        throw err;
    }


}


module.exports = {
    crearArchivo
}