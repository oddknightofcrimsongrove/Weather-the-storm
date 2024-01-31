
const cities = [];
document.getElementById('submit_btn').addEventListener('click', async function () {
    const APIKey = "936b505fb7e01d09c658440bbf80ecec";
    const city = document.getElementById('city-name')
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${APIKey}&units=imperial`)
    const data = await response.json();
    //    loop through the data and change the values in the cards
    for (i = 0; i < data.list.length - 1; i++) {
        // 
        if (i < 5) {
            console.log(data.list[i + 8])
            document.getElementsByClassName('minValues')[i].innerText = `Temp: ${data.list[i + 8].main.temp_min}`;
            document.getElementsByClassName('humidity')[i].innerText = `humidity: ${data.list[i + 8].main.humidity}`;
            document.getElementsByClassName("imgClass")[i].src = `https://openweathermap.org/img/wn/${data.list[i + 8].weather[0].icon}.png`
        }


    }

    cities.push(city.value);
    localStorage.setItem('cities', JSON.stringify(cities));
})

// get cities from local storage and add it to the area
