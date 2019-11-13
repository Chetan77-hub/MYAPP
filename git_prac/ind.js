var express = require('express');
var app = express();
app.get("/",function(request,response){

    response.send("In ind.js");

});
app.post("/v",function(request,response){

    response.send("in post")

});

app.put("/d",function(request,response){
response.send("in put");
});
