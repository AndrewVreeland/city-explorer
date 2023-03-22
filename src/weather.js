import React from 'react'

class WeatherData extends React.Component{
  render(){
    return(
      <section>
<p>{this.props.cityWeatherData}</p>

      </section>
    )
  }
}




export default WeatherData