var router = require("express").Router()
var burger = require("../models/burger")
router.get("/", function(req,res){
      burger.selectAll(function(result){
        res.render("index",{burgerData:result})
      })
})

module.exports = router