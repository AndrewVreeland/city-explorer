
import React from 'react';
import axios from 'axios'
import CityExplorerForm from './CityExplorerForm.js'
import WeatherData from './weather.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      errorMessage: '',
      cityWeatherData: {},
      city_name: ''
    }
  }




handleGetWeather = async() => {

  try {

    //TODO: use axiopus to get the dat from locationIQ - using city in state 
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

    let cityDataFromAxio = await axios.get(url);

    console.log(cityDataFromAxio.data[0]);
    //TODO: set state with the data that comes back from axios 
    this.setState({
      cityData: cityDataFromAxio.data[0],
      error: false
    })
  } catch (error) {
    console.log(error.message)
    this.setState({
      errorMessage: false,

    })
  }
  

}

  handleSubmit = async (e) => {
    e.preventDefault();

    // //TODO: USE AXIOS TO HIT THE API(BACKEND)
    // //TODO: SET THAT INFO TO STATE 
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.city_name}`

      let cityWeatherDataFromAxio = await axios.get(url)

      this.setState({
        cityWeatherData: cityWeatherDataFromAxio,
        error: false
      })
      this.handleGetWeather();
    } catch (error) {
      console.log(error.messgae)
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  // ** async/await - handle our async code 
  // ** try/catch - handle our errors - TRY ressolves our successful promises & CATCH rejected promise 
  getCityData = async (event) => {
    event.preventDefault()

    






    //   //TODO: use axiopus to get the dat from locationIQ - using city in state 
    //   let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

    //   let cityDataFromAxio = await axios.get(url);

    //   console.log(cityDataFromAxio.data[0]);
    //   //TODO: set state with the data that comes back from axios 
    //   this.setState({
    //     cityData: cityDataFromAxio.data[0]

  }



  render() {
    console.log(this.state)
    return (
      <section>
        <CityExplorerForm
          city={this.state.city}
          cityData={this.state.cityData}
          getCityData={this.getCityData}
          handleCityInput={this.handleCityInput}
        />
        {this.state.cityData.display_name &&
          <div id='idText'>
            <p>
              {this.state.cityData.display_name}
            </p>
          </div>
        }
        {this.state.error
          ? <p>{this.state.errorMessage}</p>
          : Object.keys(this.state.cityData).length > 0 &&
          <div id='dataContainer'> <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`} alt='map of current city'></img>
            <div id='textContainer'> <div id='lat'>
              <p>Latitude:{this.state.cityData.lat}</p>
            </div>
              <div>
                <p id='lon'>Longitutde:{this.state.cityData.lon}</p>
              </div>
            </div>
          </div>
        }
        <WeatherData
        cityWeatherData={this.state.cityWeatherData}
        city_name={this.state.city_name}
        getCityData={this.getCityData}
        />
      </section>
    )
  }

}

export default App;






