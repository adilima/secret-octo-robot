var express = require('express');
var app = express();

app.set('PORT', 3000);

app.get('/', function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end("<html><body><h2>Succeeded</h2></body></html>");
});

app.listen(3000);


