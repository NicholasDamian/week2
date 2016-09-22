//alternative: $(document).ready(function() {

var url =
"http://rest.learncode.academy/api/learncode/friends";



$(function() {

    // Pure-JS equivalencies
    // $("#add") ~= document.getElementById("add")
    // $(".list") ~= document.getElementsByClassName("list")

    //alternative: $("button#add").on("click", function(ev) {
    $("button#add").click(function(ev /*event*/) {
        var newCar = $("#newcar").val();

        // Prevent adding a blank item
        if(newCar == "") return;
        
        $("#list").append("<li>"
        + newCar  + ' <button class="remove">(x)</button>' + "</li>");
        
        $("#newcar").val("");
    });

    $("#list").click("button.remove", function(ev) {
        $(ev.target).parent().fadeOut();
    });



    $.ajax(url,{method:"GET"}).done(function(data){
    for(var i = 1; i < data.length; i++){
    $("#friend").append("<li>" +data[i].name +"</li>");
    }
    

    });




    $.ajax("http://rest.learncode.academy/api/learncode/friends/57e2c0d51ebec60100061864")
    .done(function(data){
        //micheal like burbon
        $(".temp").append(data.name + " likes " + data.drink);
    }); 

});