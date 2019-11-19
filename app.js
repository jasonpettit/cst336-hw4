const express = require("express");
const app = express();
app.engine('html',require('ejs').renderFile);
app.use(express.static("public"));

//import faker and get a word
//NOTE: I TRIED GETTING 7 DIFFERENT WORDS AND IT LEAD TO A TIMEOUT
//var faker = require('faker');
//var word1 = faker.hacker.adjective();

//routes
app.get ("/", function (req, res) {
    res.render("index.ejs");
})

app.get("/companies", function(req, res){
    res.render("companies.ejs");
});

app.get("/future", function(req, res){
    res.render("future.ejs");
});

app.get("/how", function(req, res){
    res.render("how.ejs");
});

/*
//CLOUD 9 CONFIG
app.listen("8080", "127.0.0.1", function(){
    console.log("Express Server is Running...");
});
*/


//HEROKU CONFIG
//listner
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
});

