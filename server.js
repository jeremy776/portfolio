require("dotenv").config();

const express = require("express");
const mongo = require("mongoose");
const app = express();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const session = require("express-session");
const flash = require("connect-flash");
const User = require("./models/user.js");
const bodyParser = require("body-parser")

const socket = require("socket.io");

const url = bodyParser.urlencoded({extended : false});

mongo.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(obj, done) {
  done(null, obj)
})

app.use(session({
  secret: "keyboard cat",
  resave: false, 
  saveUninitialized: false
}))

mongo.connection.on("connected", (connect) => {  
  console.log("Database tersambung")
  if(connect) console.log(connect)
});
 
console.log(process.env.URL);

app.use(express.static(__dirname+"/public/"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : false}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/rahasiahalamananjir", function(req, res) {
  res.sendStatus(200)
});

app.get("/", function(req, res) {
  res.render("index.ejs", {
    req:req,
    res:res
  });
});

app.listen(process.env.PORT)
