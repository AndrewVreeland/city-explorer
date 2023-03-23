import React from 'react'


class WeatherData extends React.Component{
  render(){
    
    return(
      <>

<section>{this.props.cityWeatherData.map(forecast => <h2>{forecast.date}</h2>)}
        { this.props.cityWeatherData.map(forecast => <p>{forecast.description}</p>)}
</section>
      </>
    )
  }
}




export default WeatherData