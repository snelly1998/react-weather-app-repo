import axios from 'axios'
import React, { useEffect, useState } from 'react';
const Pollution = (props) => {
    var aqiColor = "green";
    const [pollData, setPollData] = useState([]);
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${props.Latitude}&lon=${props.Longitude}&appid=${props.API}`).then((res)=>{
      
      setPollData(res.data);
        })
        .catch((err) =>{
      console.log(err);
        } )
      
      }, [props.Latitude])
      if (pollData.length !== 0){
      console.log(pollData);
        if (pollData.list['0'].main.aqi == 2){
            aqiColor = "YellowGreen";
        } else  if (pollData.list['0'].main.aqi == 3){
            aqiColor = "Yellow";
        } else  if (pollData.list['0'].main.aqi == 4){
            aqiColor = "Orange";
        } else  if (pollData.list['0'].main.aqi == 5){
            aqiColor = "Red";
        }

      return(
        <div className='Pollution'>
              <div className='pollution-header'>
                   <h2>Current Pollution</h2>
                   </div>
            <div className='pollution-wrapper'>
            <div className='pollution-header flex-row'>
            <h2>Air Quality Index: {pollData.list['0'].main.aqi}</h2>                  
            <div className='dot' style={{backgroundColor: aqiColor}}></div>
                   </div>

               <div className='grid-2 pollution-wrapper'>
                <div className='column-row'>
<div className='pollution-container flex-row flex-center'>
    <p>Carbon Monoxide:<br/>{pollData.list['0'].components.co} μg/m3 </p>
</div>
                </div>
                <div className='column-row'>
                    <div className='pollution-container'>

                    </div>
                </div>
               </div>
                </div>
        </div>
      );
      }
}

export default Pollution;