import React from 'react'

import DailyWeather from './DailyWeather'

class WeatherData extends React.Component{
  render(){
    
    return(
      <>
      <h1>Weekly Forecast</h1>
<section id='parentContainer'>
{this.props.cityWeatherData.map((forecast, idx) => <DailyWeather
forecast = {forecast}
idx = {idx}
/>
)}
</section>
      </>
    )
  }
}




export default WeatherData