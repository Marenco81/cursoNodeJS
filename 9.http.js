const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola mundo');
});

server.listen(0, () => {
    // console.log('Server listening on port 3000');
    console.log(`server listening on port http://localhost:${server.address().port}`) // usando servidor '0' se asigna el primero libre
})