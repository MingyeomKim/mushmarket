const express = require("express"); // express 모듈 가져오기
const app = express(); // express의 function을 이용해 app을 만들기
const port = 5000; // 포트를 지정해서 백 서버 생성

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://gyeomi:family0831@testcluster.2znuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!!!!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // 5000의 포트로 app을 실행시킴
