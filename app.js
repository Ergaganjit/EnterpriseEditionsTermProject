var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");
var indexRouter = require("./routes/index");
var pcontactsRouter = require("./routes/pcontacts");
var bcontactRouter = require("./routes/bcontact");
var createPContactRouter = require("./routes/createPContacts");
var createBContactRouter = require("./routes/createBContact");
var pdcontactsRouter = require("./routes/pdcontacts");
var bdcontactRouter = require("./routes/bdcontact");
var acontactrouter = require("./routes/acontact");
var adcontactrouter = require("./routes/adcontact");
var createAContactRouter = require("./routes/createAContact");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/pcontacts", pcontactsRouter);
app.use("/bcontact", bcontactRouter);
app.use("/createPContacts", createPContactRouter);
app.use("/createBContact", createBContactRouter);
app.use("/pdcontacts", pdcontactsRouter);
app.use("/bdcontact", bdcontactRouter);
app.use("/acontact", acontactrouter);
app.use("/adcontact", adcontactrouter);
app.use("/createAContact", createAContactRouter);

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
