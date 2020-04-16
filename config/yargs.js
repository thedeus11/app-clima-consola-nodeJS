const argv = require('yargs').options({ //Obtener solo las opciones, sin necesidad e un comando
                        direction: {
                            alias: 'd',
                            desc: 'Dirección de la ciudad Para obtener el clima',
                            demand: 'true'
                        }
                    })
                    .help()
                    .argv; //Recibir los argumentos
module.exports = {
    argv
}