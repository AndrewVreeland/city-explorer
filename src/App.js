
import React from 'react';
import axios from 'axios'
import CityExplorerForm from './CityExplorerForm.js'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  // ** async/await - handle our async code 
  getCityData = async (event) => {
    event.preventDefault()

    //TODO: use axiopus to get the dat from locationIQ - using city in state 
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

    let cityDataFromAxio = await axios.get(url);

    console.log(cityDataFromAxio.data[0]);
    //TODO: set state with the data that comes back from axios 
    this.setState({
      cityData: cityDataFromAxio.data[0]
    })
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <CityExplorerForm
          city={this.state.city}
          cityData={this.state.cityData}
          getCityData={this.getCityData}
          handleCityInput={this.handleCityInput}
        />
        {this.state.cityData.display_name ?
          <p>
            {this.state.cityData.display_name}
          </p>

          : null
        }
        {this.state.cityData.lat &&
          <p>
            Longitutde:{this.state.cityData.lat}
          </p>
        }

        {this.state.cityData.lon &&
          <p>
            Latitude:{this.state.cityData.lat}
          </p>
        }
      </div>
    )
  }

}

export default App;








// {
//   super(props);
//   this.state = {
//     pokemonData: [],
//   }
// }

// **async/await - handle asynchronous code 
// async is a labeler that lets JS know about asynchronous code
// ** GET POKEMON DATA

// handleGetPokemonData = async (event)=>{
// event.preventDefault();

// TODO : USE AXIOS TO MAKE A CALL OUT TO THE POKEMON API 
// await tells js which line of code is slow because of .get() function
// let pokemonData = await axios.get('https://pokeapi.co/api/v2/pokemon/');
// ** .data - where axios stores the info
// ** .reuslts - where the api stores the actual pokemon infomation 
// console.log(pokemonData.data.results);

// //TODO: SET THAT DATA INTO STATE 
// this.setState({
//   pokemonData:pokemonData.data.results
// })


// }


// <form>
//         <button type = 'submit' onClick={this.handleGetPokemonData}>Gotta Catch them all!</button>
//       </form>
//       <ul>
//         {this.state.pokemonData.map((pokemon, idx) => <li key = {idx}>{pokemon.name}</li> )}
//       </ul>