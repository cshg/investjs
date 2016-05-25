var express = require('express');
var bodyParser = require('body-parser');
var reqHandler = require('./request-handler');

var app = express();

app.use(express.static('client'));
app.use(bodyParser.json());

app.get('/', reqHandler.get);
app.get('/fetch', reqHandler.fetch);
app.post('/save', reqHandler.post);
app.post('/send', reqHandler.sendMail);

app.listen(3000, function() {
  console.log("Server started! Now listening on port 3000");
});

