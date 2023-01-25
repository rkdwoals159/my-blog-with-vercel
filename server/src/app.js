import dotenv from "dotenv";
import createError from "http-errors";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import postingRouter from "./routes/posting/index.js";
import { swaggerUi, specs } from "../swagger/swagger.js";
import http from "http";
import cors from "cors";
dotenv.config();

const port = process.env.PORT | "8080";
const app = express();
const __dirname = path.resolve();
const server = http.createServer(app);
server.listen(port, () => console.log("server open..."));
// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("connected", () => console.log("정상적으로 MongoDB에 연결되었습니다."));
db.on("error", () => console.error("MongoDB 연결에 실패했습니다..."));
// view engine setup
app.set("port", port);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

const whiteList = ["http://localhost:3000", "http://jaemin-devBlog.ml",`http://${process.env.LOCAL_IP}:3000`,process.env.LOCAL_IP,'https://jaemin-devblog-rnjpsgafy-rkdwoals159.vercel.app'];
app.use(
  cors({
    origin: whiteList,
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// app.use("/todos", require("./routes/todos"));
app.use("/postings", postingRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
export default app;
