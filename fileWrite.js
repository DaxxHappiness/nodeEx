let fs = require('fs');

let data = 'file system example!!';
fs.writeFile('text2.txt', data, 'utf8', function(error) {
    console.log('write end');
});