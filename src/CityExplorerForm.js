import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
class CityExplorerForm extends React.Component{

  render() {
    return(
      <div>
        <h1>Are You Ready For An Adventure?</h1>
    <Form onSubmit={this.props.getCityData} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Group id='enterCityContainer'>
        <Form.Control id='textInput' type="text" onChange={this.props.handleCityInput} placeholder="Enter City" />
      <Button id='cityExplorerButton' variant="success" type="submit">
        Explore!
      </Button>
      </Form.Group>
      </Form.Group>
    </Form>
    </div>
    
    )
  }
}

export default CityExplorerForm