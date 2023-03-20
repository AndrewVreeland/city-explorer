import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
class CityExplorerForm extends React.Component{

  render() {
    return(
      
    <Form onSubmit={this.props.getCityData} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City Finder</Form.Label>
        <Form.Control type="text" onChange={this.props.handleCityInput} placeholder="Enter City" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Explore!
      </Button>
    </Form>
    
    )
  }
}

export default CityExplorerForm