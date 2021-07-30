const express = require("express");
const app = express();
const port = 5000;

const { User } = require("./models/User"); // User.js 스키마를 가져와서 model 생성

const mongoose = require("mongoose");
mongoose
  .connect("mongooseDB에서 가져온 URL 정보", {
    useNewParser: true,
    userUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello, World!"));

app.post("/register", (req, res) => {
  const user = new User(req.body); // user 객체 생성
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
