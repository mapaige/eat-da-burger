$(function(){
 
  $(".addBurger").on("click", function(event){
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
  });
   $(".devouredBtn").on("click", function(event){
     var id= $(this).attr("data-id")
     var devouredState = {devoured:1};
     $.ajax({
       url:"/api/burgers/" + id,
       method:"PUT",
       data:devouredState
     }).then(function(){
       location.reload()
     })
   });
});