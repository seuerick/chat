const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use('/', (req, res) => {
	console.log(req);
});

server.listen(3000);
