
import React from 'react';
import Movie from './Movie'
import Accordion from 'react-bootstrap/Accordion'

class MovieData extends React.Component {
  render() {
    console.log(this.props.cityMovieData)
    return (

      <> 
      <section>
        <Accordion id='acc'>
          {this.props.cityMovieData.map((movie, idx) =>

            <Movie
              movie={movie}
              idx={idx}
            />

          )}
        </Accordion>
        </section>
      </>
    )
  }
}




export default MovieData