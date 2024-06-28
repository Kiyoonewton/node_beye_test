const express = require("express");
const bodyParser = require("body-parser");
const blogRoutes = require("./server/routes/blogRoutes");
const loginRoute = require("./server/routes/loginRoutes");

const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/blog", blogRoutes);
// app.post("/login", loginRoute);
app.post("/login", (req, res)=>{
    const username = req.body.username
    const user = {name:username}

   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
   res.json({accessToken})
});
// app.post("/add", cookieJwtAuth, addRoute);

app.get("/", (req, res) => {
  res.send("Hello Kiyoonewton");
});

// const routes = require("./server/routes/recipeRoutes.js");
// app.use("/", routes);

app.listen(port, () => console.log(`listening to port ${port}`));
