const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginController = async (username, password, User, res) => {
  const usernameExist = User.filter((user) => user.username === username)[0];

  const passwordExist = await bcrypt.compare(password, usernameExist?.password);
  if (!passwordExist) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: usernameExist.uuid }, "secretKey", {
    expiresIn: "1h",
  });
  res.status(200).json({ token });
};

module.exports = loginController;
