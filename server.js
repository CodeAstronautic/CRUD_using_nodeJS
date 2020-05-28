require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const employeeController = require('./controllers/employeeController');
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views');
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname : 'hbs',defaultLayout: 'mainLayout',layoutDir:__dirname + '/views/layouts/'}));
app.set('view engine','hbs');
app.listen(5000,()=>{
    console.log('Express server started at port : 3000');
});

app.use('/employee',employeeController);