var Sequelize = require("sequelize"); 


module.exports = function(sequelize) {
  var burger = sequelize.define("burgers", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    devoured: {
      type: Sequelize.BOOLEAN,
    },
    date: {
      type: Sequelize.DATE,
    }
  });
  return burger;
};

// var orm = require("../config/orm.js");
// console.log(orm);
// //create the code that will call the ORM functions using burger specific input for the ORM
// orm.selectAll("burgers", function(results){
//     console.log(results);
// });

// var burger = {
//     all: function(callback){
//         orm.selectAll("burgers", function(results){
//         callback(results);
//         });
//     }
// };

//module.exports = burgers;