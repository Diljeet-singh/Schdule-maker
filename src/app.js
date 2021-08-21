const path = require("path");
const express = require("express");
const hbs = require("hbs");
require("./database/appdb");
const employeesrouter = require("./routers/employees");

const app = express();

app.use(express.json());

const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(publicDirPath));
app.use(employeesrouter);

app.get("", (req, res) => {
  res.render("index");
});

app.get("/manager", (req, res) => {
  res.render("manager");
});

app.get("/employee", (req, res) => {
  res.render("employee");
});
app.get("/addEmployee", (req, res) => {
  res.render("addEmployee");
});

app.get("*", (req, res) => {
  res.render("manager");
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
