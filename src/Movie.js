import React from 'react'
class Movie extends React.Component {
  render() {
    return (
      <>
        <p>
          {this.props.movie.description}
        </p>
      </>
    )
  }
}


export default Movie