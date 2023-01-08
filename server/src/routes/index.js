import express from "express";
const indexrouter = express.Router();
/* GET home page. */
indexrouter.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가 수정 삭제 조회
 */
// indexrouter.use("/user", user);
export default indexrouter;
