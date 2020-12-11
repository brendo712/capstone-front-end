import React, { Component } from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'

export default class NewTripForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      trip_length: '',
      image: ''
    }
  }

  handleChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createTrip(this.state)

    this.setState({
      title: '',
      trip_length: '',
      author: '',
      image: '',
    })
  }

  render()  {
    return (
      <React.Fragment>
      <Grid textAlign='center' style={{ height: '100vh'}} verticalalign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <h4> Add new trip:</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="What do you want to call this trip?"
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            name="trip_length"
            value={this.state.trip_length}
            placeholder="How many days?"
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            name="image"
            value={this.state.image}
            placeholder="Insert image url"
            onChange={this.handleChange}
          />
          <Button color='blue' type="Submit">Create Trip</Button>
        </Form>
        </Grid.Column>
      </Grid>
      </React.Fragment>
    )
  }
}
