const process = require('process');
process.on('beforeExit'), (code) => {
    console.log('Process beforeExit event with code: ', code);
};