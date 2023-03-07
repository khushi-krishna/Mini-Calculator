//jshint esversion:6
//simple calculator
const express= require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extented:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/cal.html");
});

app.post("/",function(req,res){
  var num1= Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1+num2;

  res.send("The result is " + result);
})

app.listen("3002",function(){
  console.log("Server started at port 3002.");
});
