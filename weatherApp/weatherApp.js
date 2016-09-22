$(function () {

    // var area = "37.8267,-122.4233";
    $("button#add").click(function(){

    var area = $("#area").val();
    



    var darkSkyKey = "96f02ad95bc782facd7335190cb87a0a";
    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + area, { dataType: "jsonp" }).done(function (data) {
        $(".temp").append("<span>" + data.currently.temperature + "</span>");
        //    });


        //    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + area , { dataType: "jsonp"}).done(function(data) {
        $(".rain").append("<span>" + data.currently.precipProbability + "</span>");
        //    });

        //  $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + area , { dataType: "jsonp"}).done(function(data) {
        $(".min").append("<span>" + data.daily.data[0].temperatureMin + "</span>");
        //    });

        // $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + area , { dataType: "jsonp"}).done(function(data) {
        $(".max").append("<span>" + data.daily.data[0].temperatureMax + "</span>");
    });

    // var zipCode = 41653;
    // $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + ",&key=AIzaSyAw239Po20l0xNQoX6PW4yjvnRMB4ddJp8").done(function(data){

    // })

    });



});