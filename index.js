const express = require("express");
const app = express();
const registerController = require("./controller/register.controller");
const db = require("./database");
const User = require("./models/Users");
const allUser = new User(db).getAllItems();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const User = await allUser;
  await registerController(username, password, User, res);
});

app.post("/login", async(req, res) => {
  const { username, password } = req.body;
  const User = await allUser;

});

app.post("/createPost", (req, res) => {
  res.json("createPost");
});

app.get("/blog", (req, res) => {
  res.json("profile");
});

app.listen(3001, () => {
  console.log("SERVER RUNNING ON PORT 3001");
});
