
const apiKey = #;
const apiUrl = #;
const sBox = document.querySelector("#txtCity");
const sButton = document.querySelector(".btnSearch");
const element = document.querySelector("#content-align");
const icon = document.getElementById("element");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `${city}&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " c";
    element.removeChild(icon);

    
}

sButton.addEventListener("click", () =>{
    checkWeather(sBox.value);
});