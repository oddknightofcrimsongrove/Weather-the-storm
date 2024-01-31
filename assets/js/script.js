// const inputEl = document.getElementById ('city-name')
// const submitBtn = document.getElementById('submit_btn')
// const SingleDay = document.getElementById('single_day_forecast')
// const API_key = '936b505fb7e01d09c658440bbf80ecec'

// submitBtn.addEventListener('click',function(){
//     let searchValue= inputEl.value;
//     let Url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_key}&units=imperial`

//     fetch(Url).then(res=>{
//         return res.json()
//     }).then(data=>{
//         console.log(data)
//         let cityName = data.name;
//         SingleDay.append(cityName)

//         let temp_text=`temp =${data.main.temp}`
        
//         SingleDay.append(temp_text)
        
//     });

//     let urlFiveday = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${API_key}`;
//     fetch(urlFiveday).then(res=>{
//         return res.json()
//     }).then(data=>{
//          console.log(data)
//          let cityName = data.name;
//          fiveDay.append(cityName)
 
//         let temp_text = `weather=${data.main.temp}`
//         fiveDay.append(temp_text)
//         fiveDay.append(cityName)
 
//     });
// });
// const fiveDay = document.getElementById('five_day_forecast')
