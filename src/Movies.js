
import React from 'react';
import Movie from './Movie';
import Accordion from 'react-bootstrap/Accordion';

class MovieData extends React.Component {
  render() {
    // console.log(this.props.cityMovieData)
    return (
      
      // <>
        <Accordion>
          {this.props.cityMovieData.map((movie, idx) => 
          
            < Accordion.Item eventKey="idx" >
              <Accordion.Header>{movie.title}</Accordion.Header>
              <Accordion.Body>
                <Movie
                  movie={movie}
                  idx={idx}
                />
                <p>{movie.title}</p>
              </Accordion.Body>
            </Accordion.Item>
          )}
        </Accordion>
      // </>
    )
  }
}




export default MovieData