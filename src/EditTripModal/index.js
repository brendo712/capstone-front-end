import React, { Component } from 'react'
import { Form, Button, Label, Modal, Header } from 'semantic-ui-react'
import '../index.css'

export default class EditTripModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.tripToEdit.title,
      trip_length: props.tripToEdit.trip_length,
      image: props.tripToEdit.image
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateTrip(this.state)
  }

  render() {
    return(
      <Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
        <Header>
          <h3>Enter new info</h3>
        </Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Enter new title"
              onChange={this.handleChange}
            />
            <Label>Trip Length:</Label>
            <Form.Input
              type="text"
              name="trip_length"
              value={this.state.trip_length}
              placeholder="Update length of trip"
              onChange={this.handleChange}
            />
            <Label>Edit Image:</Label>
            <Form.Input
              type="text"
              name="image"
              value={this.state.image}
              placeholder="Edit cover photo"
              onChange={this.handleChange}
            />
            <Modal.Actions>
              <Button type="Submit">Update Trip</Button>
            </Modal.Actions>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}
