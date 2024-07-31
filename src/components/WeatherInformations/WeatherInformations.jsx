/* eslint-disable react/prop-types */

import './WeatherInformations.css'



function WeatherInformations({weather}) {

    



    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
           

            <p className='temperature'>{Math.round(weather.main.temp)}℃</p>


            <p className='description'>{weather.weather[0].description}</p>


            <div className='details'>
                <p>Sensaçao térmica: {Math.round(weather.main.feels_like)}℃</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
           

        </div>




    )




}

export default WeatherInformations