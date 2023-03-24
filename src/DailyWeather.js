import React from 'react'
import Card from 'react-bootstrap/Card';
import './DailyWeather.css';
class DailyWeather extends React.Component {
  render() {
    return (
      <>
      
        <Card id='cardContainer'>
        <Card.Title class='cardInfo'>{this.props.forecast.date}</Card.Title>
      <Card.Body class='cardInfo'>{this.props.forecast.description}</Card.Body>
      </Card>
      
      </>
    )
  }
}


export default DailyWeather