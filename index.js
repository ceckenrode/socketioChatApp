var app = require('express')();
var http = require('http').Server(app);
var PORT = process.env.PORT || 3000

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(PORT, function(){
  console.log('listening on *:' + PORT
    );
});
