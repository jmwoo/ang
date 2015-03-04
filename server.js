var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

var posts = [{text: 'hello'}, {text: 'cruel'}, {text: 'world'}];

// settings
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/posts', function (req, res) {
	res.json(posts);
});

app.listen(port);
console.log('server listening on port:', port);