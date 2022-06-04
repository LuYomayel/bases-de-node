const colors = require('colors')
const fs = require('fs');

const crearArchivo = (base = 7, listar, hasta) => {
    return new Promise( (resolve, reject) => {
        try {
            let salida = '';
            console.log(`Tabla del ${base}\n`)
        
            for(let i = 1; i <=hasta;i++){
                if(i == hasta){
                    salida += `${base} ${'*'.red} ${i} = ${i*base}`;
                }else{
                    salida += `${base} ${'*'.red} ${i} = ${i*base}\n`;
                }
            }
            if(listar)console.log(salida)
        
            let writeFile = fs.writeFileSync(`salida/tabla${base}.txt`, salida)
            resolve(`tabla${base}.txt`)
        } catch (error) {
            console.log('estoy aca')
            reject(error)
        }
            
        
    })
}

module.exports = {
    crearArchivo
}