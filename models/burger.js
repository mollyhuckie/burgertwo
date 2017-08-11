var orm = require("../config/orm.js");
console.log(orm);
//create the code that will call the ORM functions using burger specific input for the ORM
orm.selectAll("burgers", function(results){
    console.log(results);
});

var burger = {
    all: function(callback){
        orm.selectAll("burgers", function(results){
        callback(results);
        });
    }
};

module.exports = burger;