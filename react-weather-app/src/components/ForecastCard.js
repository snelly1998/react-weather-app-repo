import React, { Component } from 'react'

const ForecastCard = ({time, temperature, humidity, icon, precipitation}) => (
  <div class="ui card">
  <div class="content ">
    <div class="header weather-card-child"></div>
  </div>
  <div class="content">
    <h4 class="ui sub header"></h4>
    <div className='icon-container'>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
    </div>
    <div class="ui small feed">
      <div class="event">
        <div class="content">
              <h5 className='weather-card-child'>Time: {time}</h5>
         <div class="weather-card">
              <div className='weather-card-child'>
              Temperature: {temperature}℃
               </div>
               <div className='weather-card-child'>
              Humidity: {humidity} %
               </div>
       </div>
       <div class="weather-card">
              <div className='weather-card-child'>
              Rain: {precipitation} mm
               </div>
               <div className='weather-card-child'>
              
               </div>
       </div>
      </div>

      </div>
    </div>
  </div>
  <div class="extra content">
  
  </div>
</div>
)
export default ForecastCard