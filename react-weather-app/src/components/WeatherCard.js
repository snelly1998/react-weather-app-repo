import React, { Component } from 'react'

const WeatherCard = ({temperature, city, humidity, sunrise, sunset, timezone, curTime, icon}) => (
        <div class="ui card">
        <div class="content ">

        </div>
        <div class="content">
          <h4 class="ui sub header">{city}</h4>
          <div className='icon-container'>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
          </div>
          <div class="ui small feed">
            <div class="event">
              <div class="content">
                    <h5 className='weather-card-child'>Time: {curTime}</h5>
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
                    Sunrise: {new Date(sunrise * 1000).toLocaleTimeString('en-US')}
                     </div>
                     <div className='weather-card-child'>
                    Sunset: {new Date(sunset * 1000).toLocaleTimeString('en-US')}
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
export default WeatherCard