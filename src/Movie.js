import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Movie.css';
class Movie extends React.Component {
  render() {
    return (
      <>

        < Accordion.Item id='accItem' eventKey={this.props.idx} defaultActiveKey="0">
          <Accordion.Header class='accText'>{this.props.movie.title}</Accordion.Header>
          <Accordion.Body class='accText'>

          {this.props.movie.description}
          
          </Accordion.Body>
        </Accordion.Item>
        <p>
        </p>
      </>
    )
  }
}


export default Movie