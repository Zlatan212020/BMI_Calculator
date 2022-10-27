const express=require('express');
const bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/",function(req,res){
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var result=num1+num2;
res.send("Answer is"+" "+result);
});


app.post("/bmiCalculator",function(req,res){
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var bmi=Math.floor(num1/(num2*num2));

var interpretation = "";

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else if (bmi > 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  } else {
    interpretation = "Invalid";
  }
  res.send(interpretation);
});


app.listen(3000,function(){
  console.log("server started running");
});
