const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");

const getUser = async (username) => {
  return { userId: v4(), password: "123456", username };
};

const createUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await getUser(username);

  if (user.password !== password) {
    return res.status(403).json({
      error: "invalid login",
    });
  }

  delete user.password;

  const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
    //secure:true;
    //maxAge: 100000,
    //signed: true;
  });

  return res.redirect("/");
};

module.exports = createUser;
