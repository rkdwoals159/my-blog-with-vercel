require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const api = require("./routes");
const indexRouter = require("./routes/index");

const app = express();
const { PORT, MONGO_URI } = process.env;
const { swaggerUi, specs } = require("./swagger/swagger");

// Node의 native Promise 사용
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", api);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/todos", require("./routes/todos"));
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
module.exports = app;
