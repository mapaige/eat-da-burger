var router = require("express").Router()
var burger = require("../models/burger")

router.get("/", function(req,res){
      burger.selectAll(function(result){
        res.render("index",{burgerData:result})
      });
})

router.post("/api/burgers", function(req,res){
  burger.insertOne(
    ["burger_name","devoured"],
    [ req.body.burger_name, req.body.devoured],
    function(result){
      res.json({id:result.insertId});
    });
  
});

router.put("/api/burgers/:id",function(req,res){
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne({devoured :req.body.devoured},condition, function(result){
    if (result.changedRows == 0){
      //If not rows changed, then the ID must not exist, throw 404
      return result.status(404).end();
    } else {
      res.status(200).end();
    }
  });


   
  });

  
module.exports = router;