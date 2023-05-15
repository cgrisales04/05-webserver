require('dotenv').config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const puerto = process.env.PORT;

const data = {
  nombre: "Cristian",
  titulo: "Node Js",
};

//Handlerbars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", data);
});

app.get("/generic", (req, res) => {
  res.render("generic", data);
});

app.get("/elements", (req, res) => {
  res.render("elements", data);
});

app.get("*", (req, res) => {
  res.render("home", data);
});
app.listen(puerto);
