var express = require('express');
var usercontroller = require('./controllers/usercontroller');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controller
usercontroller(app);

//listen to port
app.listen(3000);
console.log('you are listening to port 3000');