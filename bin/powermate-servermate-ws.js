var data = require("../index-ws");

var http = require('http');
var server = http.createServer(function(request, response) {});

server.listen(8081, function() {
  console.log((new Date()) + ' Server is listening on port 8081');
});

var WebSocketServer = require('websocket').server;
wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('request', function(r){
  var connection = r.accept('echo-protocol', r.origin);

  var count = 0;
  var clients = {};
  var id = count++;

  clients[id] = connection

  console.log((new Date()) + ' Connection accepted [' + id + ']');


  for(var i in clients){
    clients[i].send(JSON.stringify(data));
  }

  connection.on('close', function(reasonCode, description) {
    delete clients[id];
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });

});
