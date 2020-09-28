// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for(var i = 0; i < num; i++) {
    arr.push("?");
    }
    return arr.toString();

}
// Helper function to convert object key/value pairs to SQL syntax

function objToSql(ob) {
  var arr =[];
  for (var key in ob) {
    var value = ob[key];
    if(Object.hasOwnProperty.call(ob,key)) {
      if(typeof value === "string" && value.indexOf(
        "") >= 0) {
          value = "'" + value + "'";
        }
   arr.push(key + "=" + value);
  }
}
  return arr.toString();
}

var orm = {
  selectAll: function(table,cbModel){
    var dbQuery = "SELECT * FROM " + table + ";";
    connection.query(dbQuery, function(err,res){
      if (err) {
        throw err;
      }

      cbModel(res);
    });
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

   updateOne: function (table, objColVals, condition, cbModel){
   var dbQuery = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;

    console.log (dbQuery);
   connection.query(dbQuery, function(err,res){
    if (err) {
      throw err;
     }

     cbModel(res);
    });
   }
};

   
module.exports = orm;

