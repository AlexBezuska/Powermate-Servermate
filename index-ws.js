var PowerMate = require('node-powermate');
var powermate = new PowerMate();

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8081 });

var data = {
  "buttonDown": false,
  "wheelDelta": 0,
  "brightness": 0
}

wss.on('connection', function connection(ws) {

  powermate.on('buttonDown', function(){
    data.buttonDown = true;
    ws.send(JSON.stringify(data));
  });

  powermate.on('buttonUp', function(){
    data.buttonDown = false;
    ws.send(JSON.stringify(data));
  });

  powermate.on('wheelTurn', function(wheelDelta){
    data.wheelDelta = wheelDelta;
    ws.send(JSON.stringify(data));
  });

});
//powermate.setBrightness(data.brightness, function(){});
