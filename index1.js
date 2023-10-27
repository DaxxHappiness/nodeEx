const http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Hello http webserver!');
    response.end();
}).listen(8000, function(){
    console.log('Server running at http://127.0.0.1:8000/');
});