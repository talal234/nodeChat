var express = require("express");
var app = express();
var port = 3500;
 
app.get("/", function(req, res){
    res.send("The web server is up and running!!");
});
 
app.listen(port);
console.log("Listening on port " + port);