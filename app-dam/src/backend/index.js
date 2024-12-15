//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

const cors = require('cors');

var express = require('express');
var app = express();
var pool = require('./mysql-connector');
const routerDispositivo = require('./routes/dispositivo')
const routerMediciones = require('./routes/mediciones')
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));
// to enable cors
app.use(cors(corsOptions));

app.use('/dispositivo', routerDispositivo)

app.use('/mediciones',routerMediciones)

//Prueba clase 5- Middleware

//app.all('/todo', function(req,res) {
//    res.send({'mensaje':'Hola DAM'})
//})

//var cb0 = function(req,res,next) {
//    console.log('CB0')
//    next()
//}

//var cb1 = function(req,res,next) {
//    console.log('CB1')
//    next()
//}

//var cb2 = function(req,res,next) {
//    res.send({'mensaje': 'Hola DAM'}).status(200)
//}

//app.get('/', [cb0, cb1, cb2])

//=======[ Main module code ]==================================================

app.get('/', function(req, res, next) {
    res.send({'mensaje': 'Hola DAM'}).status(200);
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
