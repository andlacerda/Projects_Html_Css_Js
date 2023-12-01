
const apiKey = "#" //add your apiKey from Open Weather ; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const sBox = document.querySelector("#txtCity");
const sButton = document.querySelector(".btnSearch");
const item = document.querySelector(".content-align");

async function checkWeather(city) {

    try {
    const response = await fetch(apiUrl + `${city}&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " c";
    console.log(data.weather[0].main);
    
    if (data.weather[0].main == "Clouds"){
        document.getElementById("icon").className = "ri-cloud-line weather-icon";
    }else if (data.weather[0].main == "Clear"){
        document.getElementById("icon").className = "ri-sun-line weather-icon";
    }else if (data.weather[0].main == "Rain"){
        document.getElementById("icon").className = "ri-rainy-line weather-icon";
    }else if (data.weather[0].main == "Drizzle"){
        document.getElementById("icon").className = "ri-drizzle-line weather-icon";
    }else if (data.weather[0].main == "Mist"){
        document.getElementById("icon").className = "ri-mist-line weather-icon";
    }
    }catch(err){
        document.getElementById("icon").className = "ri-question-mark weather-icon";
        document.querySelector(".temp").innerHTML = "undefined";
    }
}

sButton.addEventListener("click", () =>{
    checkWeather(sBox.value);
});