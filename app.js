const { argv } = require('./config/yargs');
const { getInfo } = require('./data/data')
let direction = argv.direction;
getInfo(direction)
                .then( response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log('Error', err);
                });
