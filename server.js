var express = require("express");
var app = express();

app.get('/*', function(req, res){
  var ip = req.headers["x-forwarded-for"];
  var lang = req.headers["accept-language"].split(",");
  var userOS = req.headers["user-agent"];
  var sub = userOS.slice(userOS.search(/\(/)+1,userOS.search(/\)/));
  console.log(sub);
  res.end('{"ipadress": "'+ip+'", "language": "'+lang[0]+'", "software": "'+sub+'"}');
  
});

app.listen(process.env.PORT, process.env.IP);