    import React, { useState } from 'react'
import { Button } from 'semantic-ui-react';
import WeatherCard from './WeatherCard';
import ForecastCard from './ForecastCard'

    export default function Forecast(forecast) {
        const [index, setIndex] = useState(0);

     
        function Increase(){
            if (index < 39){
            setIndex(index+1);}
        }
        
        function Decrease(){
            if (index > 0){
            setIndex(index-1);}
        }
    
        let precipitation;
        if (forecast.forecast[index].rain){
            precipitation = forecast.forecast[index].rain['3h']
        } else{
            precipitation = 'none'
        }
    return (
        <div>   <div class="card">
            {index}
     
     
    <button onClick={() =>Increase()}>Increase</button>
    <button onClick={() =>Decrease()}>Decrease</button>
    {console.log(forecast.forecast[index])}
    </div>
<ForecastCard 
    temperature={forecast.forecast[index].main.temp}
    humidity={forecast.forecast[index].main.humidity}
        time={forecast.forecast[index].dt_txt}
        icon={forecast.forecast[index].weather[0].icon}
precipitation={precipitation}
/>
    
   
    </div>
    )
    }


