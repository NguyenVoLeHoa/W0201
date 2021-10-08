const fs = require('fs');
fs.readFile('./lorem.txt', (err, data) => {
    if(err) {
        return console.log('Error occurred while reading file');
    }
    console.log(data.toString());
});