const { createUsers } = require("../crud/users");
const { v4 } = require("uuid");
const bcrypt = require("bcrypt");

const registerController = async (username, password, User, res) => {

  const usernameExist = User.filter((user) => {
    return user.username === username;
  })[0];

  bcrypt.hash(password, 10).then((hash) => {
    !usernameExist
      ? createUsers(username, hash, v4(), (err, data) => {
          if (err) {
            res.status(500).send(err.message);
          } else {
            res.status(201).send({ data });
          }
        })
      : res.status(500).send("Username Already Exist");
  });
};

module.exports = registerController;
