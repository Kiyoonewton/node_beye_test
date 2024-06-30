const express = require("express");
// const { Users } = require("./models");
const { createItem, readItems, updateItem, deleteItem } = require("./crud");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  const usernameExist = readItems((err, data) => {
    if (err) {
      res.status(500).send(err.message);
    }
    console.log(data[0]);
    return data
  });

  console.log(usernameExist);

  bcrypt.hash(password, 10).then((hash) => {
    createItem(username, hash, (err, data) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(201).send(`Item is added ID: ${data.id}`);
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

// db.sequelize.sync().then(() => {
app.listen(3001, () => {
  console.log("SERVER RUNNING ON PORT 3001");
});
// });
