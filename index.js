var PowerMate = require('node-powermate');
var powermate = new PowerMate();
var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

app.get('/brightness/:value', function (req, res) {
  if(req.params.value < 0 || isNaN(req.params.value)){
    data.brightness = 0;
  }else if(req.params.value > 255){
    data.brightness = 255;
  }else{
    data.brightness = parseInt(req.params.value);
  }

  powermate.setBrightness(data.brightness, function(){
    res.end();
  });
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
