const express = require("express");
const db = require("./models");
const { Users } = require("./models");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({ username: username, password: hash })
      .then(() => {
        res.json("USER REGISTERED");
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
      });
  });
});

app.post("/login", (req, res) => {
  res.json("login");
});

app.post("/createPost", (req, res) => {
  res.json("createPost");
});

app.get("/blog", (req, res) => {
  res.json("profile");
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
});
