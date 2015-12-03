var PowerMate = require('node-powermate');
var powermate = new PowerMate();

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

//powermate.setBrightness(data.brightness, function(){});


module.exports = data;
