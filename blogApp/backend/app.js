const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());
// app.use(bodyParser.json());

const dbUrl =
  "mongodb+srv://Node-Mongo786:qAz123pLm@cluster0.b1fon.mongodb.net/mernApp1?retryWrites=true&w=majority";

const PORT = 8000;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.use("/blogs", blogRoutes);
app.use("/auth", authRoutes);

// app.get("/set-cookies", (req, res) => {
//   res.cookie("newUser", false);
//   res.cookie("employee", true, {
//     maxAge: 1000 * 60 * 60 * 24,
//     secure: true,
//   });
//   res.send("You got the cookies!");
// });

// app.get("/read-cookies", (req, res) => {
//   const cookies = req.cookies;
//   console.log(cookies);

//   res.json(cookies.newUser);
// });
