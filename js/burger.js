$(function(){
  $(".create-form").on("submit", function(event){
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
   $(".eatburger").on("click", function(event){
     var devouredState = {devoured:1};
   });
});