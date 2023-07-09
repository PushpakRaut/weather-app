const URL = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
const API_Key = '1de47596d9mshc16cc7f5d4c640fp1923afjsn6f77b20ea17f'
const API_HOST = 'weather-by-api-ninjas.p.rapidapi.com'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_Key,
		'X-RapidAPI-Host': API_HOST
	}
};

const getApiData = async (city) => {
    const response = await fetch(`${URL}?city=${city}`, options);
    return await response.json()
}

const searchCity = () =>{
    const city = document.getElementById('city-input').value;
    const city_name = document.getElementById('city-name')
    const weather_type = document.getElementById('weather-type')
    const temp = document.getElementById('temp')
    const min_temp = document.getElementById('min-temp')
    const max_temp = document.getElementById('max-temp')
    let type
    getApiData(city)
        .then(data => {
            console.log(data)
            if(!data.error) {
                city_name.innerHTML = city
                type = (data.cloud_pct > 75) 
                    ? "RAINY"
                    : (data.cloud_pct > 50)
                        ? "CLOUDY"
                        : (data.cloud_pct > 25) 
                            ? "SUNNY"
                            : "CLEAR"
                temp.innerHTML = data.temp
                weather_type.innerHTML = type
                min_temp.innerHTML = data.min_temp
                max_temp.innerHTML = data.max_temp
            }else{
                city_name.innerHTML = "Not a city"
            }
        })
        
    
}
