const inputEl = document.getElementById ('city-name')
const SubmitBtn = document.getElementById('submit_btn')
const SingleDay = document.getElementById('single_day_forecast')
const API_key = '936b505fb7e01d09c658440bbf80ecec'

SubmitBtn.addEventListener('click',function(){
    let searchValue= inputEl.value;
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_key}`

    fetch(Url).then(res=>{
        return res.json()
    }).then(data=>{
        console.log(data)
        let cityName=data.name;
        SingleDay.append(cityName)

        let temp_text=`current temp=${data.main.temp}`
        SingleDay.append(temp_text)
    })
})