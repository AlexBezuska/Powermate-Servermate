var PowerMate = require('node-powermate');
var powermate = new PowerMate();
var express = require('express');
var app = express();

var data = {
  "buttonDown": false,
  "wheelDelta": 0,
  "brightness": 0
}

powermate.on('buttonDown', function(){
  data.buttonDown = true;
});

powermate.on('buttonUp', function(){
  data.buttonDown = false;
});

powermate.on('wheelTurn', function(wheelDelta){
  data.wheelDelta = wheelDelta;
});

app.get('/data', function (req, res) {
  res.send(data);
});

app.get('/:key/:value', function (req, res) {
  data[req.params.key] = req.params.value;
  powermate.setBrightness(parseInt(data.brightness), function(){
    res.end();
  });
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
