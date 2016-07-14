var http = require('http');

var server = http.createServer(
	function(request, response){
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		response.end('Hola Mundo');
	}
);

server.listen(8000, function(){
	console.log('Servidor escuchando puerto 8000')
});