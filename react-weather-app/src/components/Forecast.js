    import React, { useState } from 'react'
import { Button } from 'semantic-ui-react';
import WeatherCard from './WeatherCard';
import ForecastCard from './ForecastCard'

    export default function Forecast(forecast) {

        const [index, setIndex] = useState(0);

        function Increase(){
            if (index < 40){
            setIndex((index+1)%40);}
        }
        
        function Decrease(){
            if (index > 0){
            setIndex(index-1);}
        }
    
    return (
        <div>   <div class="card">
            {index}
     
     
    <button onClick={() =>Increase()}>Increase</button>
    <button onClick={() =>Decrease()}>Decrease</button>
   

    </div>
<ForecastCard 

/>
    
   
    </div>
    )
    }


