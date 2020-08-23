// Import MySQL connection.
var connection = require("../config/connection.js");
var orm = {
  selectAll: function(table,cbModel){
    var dbQuery = "SELECT * FROM " + table 
    connection.query(dbQuery, function(err,res){
      if (err) {
        throw err;
      }

      cbModel(res);
    })
  },

    insertOne : function(whatToSelect, table, orderCol){
      var dbQuery ="INSERT INTO" + table + col
    }

}

module.exports = orm

      