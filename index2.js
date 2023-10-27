const express = require('express');
const app = express();
const port = 3000;

// get method with 정규표현식 적용1
app.get('/ab?cd', (req, res) => {
    res.send('ab?cd');
});

// get method with 정규표현식 적용2
app.get('/a/', (req, res) => {
    res.send('/a/');
});

// path Variable
// http://localhost:3000/user/1234/item/%EC%9E%90%EB%8F%99%EC%B0%A8
app.get('/user/:userId/item/:itemId', (req, res) => {
    const { userId, itemId } = req.params;
    res.send(`userId: ${userId}, itemId: ${itemId}`);
});

// path Variable2
app.get('/user', (req, res) => {
    const { user, item } = req.query;
    res.send(`userId: ${user}, item: ${item}`);
});

// get method
app.get('/', (req, res) => {
    res.send('Hello World');
});

// post method
app.post('/', function(req, res) {
    res.send('Got a POST request');
});

// put method
app.put('/', (req, res) => {
    res.send('Got a put request');
});

// delete method
app.delete('/', function(req, res) {
    res.send('Got a delete request');
});

// All method
app.all('/customer', function(req, res) {
    res.send('Got a All request');
});

app.listen(port, () => 
    console.log(`${port} 포트에서 서버 실행 중`));