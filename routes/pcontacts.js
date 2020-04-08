var express = require("express");
var router = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

/* GET users listing. */
router.get("/", function (req, res, next) {
  var url = "mongodb://localhost:27017/";
  var pcontacts = MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("contacts");
    dbo
      .collection("pcontacts")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.render("pcontacts", { pcontacts: result });
        db.close();
      });
  });
});

module.exports = router;
