$(function () {




    $("#add").click(function () { //the Id of the butto is connected to the click function 
        var zipCode = $("#enterzip").val(); // the id of the form is connected to the zipCode variable  
        $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyAw239Po20l0xNQoX6PW4yjvnRMB4ddJp8").done(function (data) {
            var latitude = data.results[0].geometry.location.lat;
            var longitude = data.results[0].geometry.location.lng;
            var lngLat = latitude + "," + longitude;
            var state = data.results[0].address_components[2].short_name;
            var city = data.results[0].address_components[1].short_name;
            var darkSkyKey = "96f02ad95bc782facd7335190cb87a0a";
            $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + lngLat, { dataType: "jsonp" }).done(function (data) {
                console.log(lngLat);
                var temp = parseInt(data.currently.temperature);
                var rain = data.currently.precipProbability;
                var min = parseInt(data.daily.data[0].temperatureMin);
                var max = parseInt(data.daily.data[0].temperatureMax);
                var template = "<div class='col-sm-3 well delete'><h5>Temp.<span>" + temp + "<span></h5><hr /><p>Min:<span>" + min + "</span></p><hr /><p>Max:<span>" + max + "</span></p><hr /><h4><span>" + city + "," + state + "</span></h4><h4>Rain% :<span>" + rain + "</span></h4><span class ='delTemplate glyphicon glyphicon-remove'></span></div>";
                $("#populate").prepend(template);
                $(".delTemplate").click(function () {  //Idk why this needs in this function 
                    $(this).parent().remove();
                });
                //I added a nonfuntional delete button to the template above
            });

        });
    });
    $("#deleteButton").click(function () {
        $(".delete").remove();
    });
    // $(".delTemplate").click(function () {
    //     $(this).parent().remove();
    // });
});


