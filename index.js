const express = require("express");
// const { Users } = require("./models");
const { createItem, readItems, updateItem, deleteItem } = require("./crud");
const bcrypt = require("bcrypt");
const app = express();
const { v4 } = require("uuid");

app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const usernameExist = await readItems((err, data) => {
    if (err) {
      res.status(500).send(err.message);
    }
    return data.filter((user) => user.username === username);
  });

  bcrypt.hash(password, 10).then((hash) => {
    !usernameExist
      ? createItem(username, hash, v4(), (err, data) => {
          if (err) {
            res.status(500).send(err.message);
          } else {
            res.status(201).send({ data });
          }
        })
      : res.status(500).send("Username Already Exist");
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

// db.sequelize.sync().then(() => {
app.listen(3001, () => {
  console.log("SERVER RUNNING ON PORT 3001");
});
// });
