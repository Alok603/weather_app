const api_key="46df15d415d353bf19351ff79e5ff7a3";
const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbx=document.querySelector('.search input')
const searchbtn=document.querySelector('.search button')
const weatherIcon=document.querySelector('.weather-icon')

async function checkWhether(city){
    const response=await fetch(api_url+city+`&appid=${api_key}`)
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
        document.querySelector(".details").style.display="none"
    }
    var data=await response.json();
    console.log(data)
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=='Clouds'){
        weatherIcon.src="clouds.png"
    }
    if(data.weather[0].main=='Clear'){
        weatherIcon.src="clear.png"
    }
    if(data.weather[0].main=='Rain'){
        weatherIcon.src="rain.png"
    }
    if(data.weather[0].main=='Drizzle'){
        weatherIcon.src="drizzle.png"
    }
    if(data.weather[0].main=='Mist'){
        weatherIcon.src="mist.png"
    }
    
    
}
searchbtn.addEventListener('click',()=>{
    checkWhether(searchbx.value);
})
