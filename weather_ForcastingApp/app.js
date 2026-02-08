const userForm = document
        .getElementById("userForm")
        .addEventListener("submit", (e) => {
          e.preventDefault();
          var cityInput = document.getElementById("cityInput").value;
          console.log(cityInput);

          fetch(
            `https://api.weatherapi.com/v1/current.json?key=414bfed570924542aff45116262701&q=${cityInput}`,
          )
            .then((resp) => resp.json())
            .then((resp) => {
              console.log(resp);
                          document.getElementById("mainHeading").innerText="Weather Forecasting"


              let city = (document.getElementById("city").innerText =
                resp.location.name);
              let region = resp.location.region;
              let country = resp.location.country;
              document.getElementById("region").innerText =
                `${region}  ${country}`;

              document.getElementById("localTime").innerText =
                resp.location.localtime;

document.getElementById("image").src = resp.current.condition.icon;
                
              let temp = document.getElementById("temprature").innerText =
                "Teprature= "+resp.current.temp_c;

              let windSpeed = document.getElementById("windSpeed").innerText =
                resp.current.wind_kph;
              let humidity = document.getElementById("humidity").innerText =
                resp.current.humidity;

              let feelsLike = document.getElementById("feelsLike").innerText =
                resp.current.feelslike_c;
              let vis_km = document.getElementById("visibility").innerText = resp.current.vis_km;
            })
            .catch(error=>{
            console.log("error")
            document.getElementById("mainHeading").innerText="Error Wrong Input"
        })
        })
