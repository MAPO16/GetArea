var express = require('express');
var app = express();


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host   : 'localhost',
  user   : 'servicio2',
  password : 'servicio2.123',
  database : 'mobasign'
});

 connection.connect();


app.get('/rest/area', function (req, res) {


    connection.query('SELECT * FROM Area', function (error, results, fields) {
  if (error) throw error;
  return res.send({error: false, date: results, message: 'Todos list'})
 });
});
app.listen(4470, function (){
  console.log('Node app is running on port 4470')

});