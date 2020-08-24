// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for(var i = 0; i < num; i++) {
    arr.push("?");
    }
    return arr.toString();
    
}

var orm = 
  selectAll: function(table,cbModel){
    var dbQuery = "SELECT * FROM " + table 
    connection.query(dbQuery, function(err,res){
      if (err) {
        throw err;
      }

      cbModel(res);
    })
  },

    insertOne : function(table, cols, vals, cb){
      var dbQuery ="INSERT INTO " + table  + "(" +
    cols.toString() + ")" + "VALUES (" + printQuestionMarks(vals.length) + ")";
       
    console.log (dbQuery);
    connection.query(dbQuery,vals, function(err,res){
    if (err) {
      throw err;
    }

    cb(res);
  });

},

   updateOne: function (table, objcolVals, condition, cbModel){
   var dbQuery = "UPDATE" + table + "SET" + objToSql(objColVals) + "WHERE " + condition;

    console.log (dbQuery);
   connection.query(dbQuery,vals, function(err,res){
    if (err) {
      throw err;
     }

     cb(res);
 });

   }

  };


   
module.exports = orm

    