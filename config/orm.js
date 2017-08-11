var connection = require("../config/connection.js");

//create the methods that will execute the necessary MySQL commands in the controllers
//these are the methods you will need to use in order to retrieve & store data in your database

var orm = {
selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        console.log(err);
        throw err;
      }
      cb(result);
    });
  }
}

//selectAll()
//insertOne()
//updateOne()

module.exports = orm;