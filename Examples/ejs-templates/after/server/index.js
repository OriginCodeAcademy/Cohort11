const server = require('./app');

// listen for incoming connections
server.listen(3000, function () {
	console.log('Server is listening on localhost:3000');
});