const express = require("express");
const app = express();
const registerController = require("./controller/register.controller");

app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  await registerController(username, password, res);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  res.json("login");
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
