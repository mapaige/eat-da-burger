var orm = require("../config/orm");
const { updateOne } = require("../config/orm");
var burger= {
selectAll:function(cbController){
    orm.selectAll("burgers",function(result){
      cbController(result);
    });
},

 insertOne: function(cols, vals, cbController) {
   orm.insertOne("burgers", cols, vals, function(result){
     cbController(result);
   });
 },
};

updateOne: function(objColVals,condtion,cbController) {
  orm.updateOne ("burgers", objColVals, condition, function(res){
    cbController(result);
  });

};
module.exports= burger