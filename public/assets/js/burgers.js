$(function(){
    $(".create-form").on("submit", function(event){
        var newBurger ={
            burger_name: $("#newburger")
            .val()
            .trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("New Burger Added....")
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState ={
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function(){
                console.log("Burger has been devoured... ");
                location.reload();
            });
    });

   $(".discardburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
   });
});