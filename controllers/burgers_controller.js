var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data,
      test: "test"
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//console.log("this is the burger",burger);

// burger.all(function(data) {
//     var pushB = {
//       burgers: data
//     };
//     console.log("final burger data", data);
//     res.render("index", pushB);
//   });

//   router.post("/", function(req, res) {
//    console.log('You sent, ' + req.body.burger_name);
//    router.send('You sent, ' + req.body.burger_name);

//   connection.query("INSERT INTO tasks (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
//     if (err) throw err;

//     res.redirect("/");
//   });
// });

  // Export routes for server.js to use.
module.exports = router;