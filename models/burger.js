var orm = require("../config/orm")
var burger= {
selectAll:function(cbController){
    orm.selectAll("burgers",function(result){
      cbController(result)
    })
}
}
module.exports= burger