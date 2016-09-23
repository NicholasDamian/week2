$(function () {




    $("button#add").click(function () {
        var zipCode = $("#enterzip").val();
            $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyAw239Po20l0xNQoX6PW4yjvnRMB4ddJp8").done(function (data) {
            var latitude = data.results[0].geometry.location.lat;
            var longitude = data.results[0].geometry.location.lng;
            var lngLat = latitude + "," + longitude;
            var state = data.results[0].address_components[2].short_name;
            var city = data.results[0].address_components[1].short_name;
            $(".state").append("<span>" + state + "</span>");
            $(".city").append("<span>" + city + "</span>");
            getInfo(lngLat);
            });
        });
    });
    var getInfo = function(lngLat) {
            var darkSkyKey = "96f02ad95bc782facd7335190cb87a0a";
            $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + lngLat, { dataType: "jsonp" }).done(function (data) {
                console.log(lngLat);
                var temp = data.currently.temperature;
                var rain = data.currently.precipProbability;
                var min = data.daily.data[0].temperatureMin;
                var max = data.daily.data[0].temperatureMax;
                $(".temp").append("<span>" + temp + "</span>");
                $(".rain").append("<span>" + rain + "</span>");
                $(".min").append("<span>" + min + "</span>");
                $(".max").append("<span>" + max + "</span>");
            });
    }
    