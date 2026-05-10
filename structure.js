console.log("yes");

var submit = document.getElementById("submit"); 
var long = document.getElementById("long"); 
var lat = document.getElementById("lat"); 

submit.addEventListener("click", function(event){
    event.preventDefault();
    var longvalue = long.value; 
    var latvalue = lat.value; 
    console.log(longvalue);
    console.log(latvalue);

    if(longvalue && latvalue){

        var cityurl = `https://nominatim.openstreetmap.org/reverse?lat=${latvalue}&lon=${longvalue}&format=json`;

        fetch(cityurl).then(function(res){
            return res.json(); 
            
        }).then(function(data){
            console.log(data); 
            var city = document.getElementById("city");
            city.innerHTML= data.address.city; 

            var country = document.getElementById("country");
            country.innerHTML=data.address.country; 

        }); 

            var url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latvalue}&longitude=${longvalue}&current=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,us_aqi`;
            fetch(url).then(function (response){
                return response.json(); 
            }).then(function(data){
                console.log(data); 
                var out = data.current; 

            var aqi = document.getElementById("aqival");
            aqi.innerHTML= out.us_aqi;

            var co = document.getElementById("coval");
            co.innerHTML= out.carbon_monoxide;

            var no2 = document.getElementById("no2val");
            no2.innerHTML= out.nitrogen_dioxide;

            var o3 = document.getElementById("o3val");
            o3.innerHTML= out.ozone;

            var pm10 = document.getElementById("pm10val");
            pm10.innerHTML= out.pm10;

            var pm25 = document.getElementById("pm25val");
            pm25.innerHTML= out.pm2_5;

            var so2 = document.getElementById("so2val");
            so2.innerHTML= out.sulphur_dioxide;


            var output = document.getElementById("output");
            output.style.display = "block"; 

        }).catch(function(error){
        console.log("Error:", error);
    });
    }
    
});

