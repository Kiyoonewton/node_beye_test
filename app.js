// const express = require("express");
// const bodyParser = require("body-parser");
// const blogRoutes = require("./server/routes/blogRoutes");
// const loginRoute = require("./server/routes/loginRoutes");
// const jwt = require("jsonwebtoken");

// const app = express();
// const port = process.env.PORT || 3000;

// require("dotenv").config();

// const posts = [
//   {
//     username: "Kiyoonewton",
//     title: "Post 1",
//   },
//   {
//     username: "Isaac",
//     title: "Post 2",
//   },
// ];

// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/blog", blogRoutes);
// // app.post("/login", loginRoute);
// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   if (!username) res.status(401).send("Enter your username");
//   const user = { name: username };

//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   res.json({ accessToken });
// });
// // app.post("/add", cookieJwtAuth, addRoute);

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// app.get("/posts", authenticateToken, (req, res) => {
//   res.json(posts.filter((post) => post.username === req.user.name));
// });

// app.get("/", (req, res) => {
//   res.send("Hello Kiyoonewton");
// });

// // const routes = require("./server/routes/recipeRoutes.js");
// // app.use("/", routes);

// app.listen(port, () => console.log(`listening to port ${port}`));
