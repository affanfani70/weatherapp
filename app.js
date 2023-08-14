const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cd1a985c6dmshc1fb6ae62a0ec1ep137557jsn23437fb7f1d7',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    fetch(url, options).then(response => response.json()).then((response) => {
        cityName.innerHTML = city;
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp1.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        Humidity1.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        // wind_speed1.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    
    
    }).catch(err => console.error(err))
}

let btn = document.getElementById('btn');
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let inp = document.getElementById('inp').value;
    getWeather(inp);
    inp = '';

})

getWeather("Kasur");