require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const url = bodyParser.urlencoded({extended : false});
 
console.log(process.env.URL);

app.use(express.static(__dirname+"/public/"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : false}));

app.get("/", function(req, res) {
  res.render("index.ejs", {
    req:req,
    res:res
  });
});

app.listen(process.env.PORT)
