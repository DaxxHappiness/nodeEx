let fs = require('fs');

let file = 'test1.txt';
fs.open(file, 'w', function(err, fd) {
    if (err) throw err;
    console.log('file open complete');
});