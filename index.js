const express = require("express"); // express 모듈 가져오기
const app = express(); // express의 function을 이용해 app을 만들기
const port = 5000; // 포트를 지정해서 백 서버 생성
const bodyParser = require("body-parser");

const config = require("./config/key"); // exports된 config 폴더의 key.js를 가져온다.

//body-parser에 옵션 주기
app.use(bodyParser.urlencoded({ extended: true })); // application/x-www-form-urlencoded의 형태 데이터를 분석해서 디비에 넣게

app.use(bodyParser.json()); // application/json 형태의 데이터를 분석해서 디비에 넣게

const { User } = require("./models/User");
//User 정보 가져와서 인스턴스 만들기
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World! 안녕하세요 :)"));

// postman
app.post("/register", (req, res) => {
  //회원가입할 때 필요한 정보들을 client에서 가져오면, 그것들을 데이터 베이스에 넣는다.

  const user = new User(req.body); //bodyParser를 이용해서 req에 데이터를 넣게 해준다.

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });

    return res.status(200).json({
      success: true,
    });
  }); //몽고DB에서 오는 메소드(user모델에 데이터를 저장시킴)
});

/*
'/register'은 라우터의 end point라고 한다. 
*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // 5000의 포트로 app을 실행시킴
