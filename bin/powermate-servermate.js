var app = require("../index");

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Powermate Servermate listening at http://%s:%s", host, port)

});
