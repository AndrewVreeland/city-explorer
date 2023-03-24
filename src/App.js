
import React from 'react';
import axios from 'axios'
import CityExplorerForm from './CityExplorerForm.js'
import WeatherData from './weather.js';
import MovieData from './Movies.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      errorMessage: '',
      cityWeatherData: [],
      cityMovieData: [],
    }
  }




  getCityData = async (e) => {
    e.preventDefault();
    try {
      //TODO: use axiopus to get the dat from locationIQ - using city in state 
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      let cityDataFromAxio = await axios.get(url);
      let lat = cityDataFromAxio.data[0].lat
      let lon = cityDataFromAxio.data[0].lon

      //TODO: set state with the data that comes back from axios 
      this.setState({
        cityData: cityDataFromAxio.data[0],
        errorMessage: false
      })

      this.handleGetWeather(lat, lon);
    } catch (error) {
      this.setState({
        errorMessage: false,
      })
    }
  }

  getMovieData = async () => {
    console.log('inside getMovies')
    try {
      let movieUrl = `${process.env.REACT_APP_SERVER}/movie?searchQuery=${this.state.city}`
      let movieDataFromAxios = await axios.get(movieUrl)
      console.log(movieDataFromAxios.data);

      this.setState({
        cityMovieData: movieDataFromAxios.data
      })
    } catch (error) {
      this.setState({
        errorMessage: false,
      })
    }
  }





  handleGetWeather = async (lat, lon) => {


    // //TODO: USE AXIOS TO HIT THE API(BACKEND)
    // //TODO: SET THAT INFO TO STATE 
    try {
      let Weatherurl = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}&lat=${lat}&lon=${lon}`;

      let cityWeatherDataFromAxio = await axios.get(Weatherurl)

      let weatherArr = cityWeatherDataFromAxio.data.map((forecast, key) => {
        return forecast

      })

      this.getMovieData();
      this.setState({
        cityWeatherData: weatherArr,
        error: false
      })



    } catch (error) {
      this.setState({
        errorMessage: false,
      })
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  // ** async/await - handle our async code 
  // ** try/catch - handle our errors - TRY ressolves our successful promises & CATCH rejected promise 




  render() {


    return (
      <section>
        <CityExplorerForm
          city={this.state.city}
          cityData={this.state.cityData}
          getCityData={this.getCityData}
          handleCityInput={this.handleCityInput}
        />
        
        
        {this.state.error
          ? <p>{this.state.errorMessage}</p>
          : Object.keys(this.state.cityData).length > 0 &&
          <div id='dataContainer'>
            <h1>
              {`Map of ${this.state.city}`}
            </h1>
            <section id='textContainer'>
              <div>
                <p>Latitude:{this.state.cityData.lat}</p>
              </div>
              <div>
                <p>Longitutde:{this.state.cityData.lon}</p>
              </div>
            </section>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`} alt='map of current city'></img>
              <h1>
            <WeatherData
            cityWeatherData={this.state.cityWeatherData}
          />
              {`Top Movies of ${this.state.city}`}
            </h1>
          </div>
        }
        <MovieData
          cityMovieData={this.state.cityMovieData}
          />
      </section>
    )
  }

}

export default App;






