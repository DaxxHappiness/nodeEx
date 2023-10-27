let fs = require('fs');

fs.readFile('text2.txt', 'utf8', function(err, data) {
    console.log(data);
});