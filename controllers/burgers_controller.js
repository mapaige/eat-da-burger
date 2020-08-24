var router = require("express").Router()
var burger = require("../models/burger")
router.get("/", function(req,res){
      burger.selectAll(function(result){
        res.render("index",{burgerData:result})
      })
})

router.put("/",function(req,res){
  var condition = "id = " + req.params.id;
  
  console.log("condition", condition);

  burger.updateOne({
    
  })
})
module.exports = router