const apikey = "ecb618e89d0180bf1ede8e30a0fafc03";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcone= document.querySelector(".weather-icone");


async function checkweather(city){
    const response = await fetch (apiUrl + city + `&appid=${apikey}`);
   
if(response.status==404){
    document.querySelector(".error").style.display ="block"
    document.querySelector(".weather").style.display ="none"

}
else{


    var data =await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

if (data.weather[0].main=="Clouds"){
    weatherIcone.src = "cloudy.png"
}
else if(data.weather[0].main=="Clear"){
    weatherIcone.src = "clear-sky.png"
}
else if(data.weather[0].main=="Drizzle"){
    weatherIcone.src = "drizzl.png"
}
else if(data.weather[0].main=="Rain"){
    weatherIcone.src = "clouds.png"
}


document.querySelector(".weather").style.display ="block";
document.querySelector(".error").style.display ="none";

}
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);


})




    
