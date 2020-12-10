import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import '../index.css'

export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: '',
      first_name: '',
      last_name: '',
      action: 'Login'
    }
  }

switchForm = () => {
  if(this.state.action === "Login") {
    this.setState({ action: "Register"})
  } else {
    this.setState({ action: "Login"})
  }
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`)
  console.log(this.state)

  if(this.state.action === "Register") {
    this.props.register(this.state)
  } else {
    this.props.login(this.state)
  }
}

  render() {
    return (
      <React.Fragment>
        <h2>{this.state.action} here</h2>
        <Form onSubmit={this.handleSubmit}>
        {
          this.state.action === "Register"
          &&
          <React.Fragment>
          <Label>First Name:</Label>
          <Form.Input
            type="first_name"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleChange}
          />
          <Label>Last Name:</Label>
          <Form.Input
            type="last_name"
            name="last_name"
            placeholder="last Name"
            value={this.state.last_name}
            onChange={this.handleChange}
          />
           <Label>Username:</Label>
           <Form.Input
             type="text"
             name="username"
             placeholder="Enter a username"
             value={this.state.username}
             onChange={this.handleChange}
           />
         </React.Fragment>
        }
          <Label>Email:</Label>
          <Form.Input
            type="email"
            name="email"
            placeholder="Enter a email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Label>Password:</Label>
          <Form.Input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button type="Submit">
            { this.state.action === "Login" ? "Log in" : "Sign up"}
          </Button>
        </Form>
        {
          this.state.action === "Login"
          ?
          <p>
            Need an account? Sign up <span className="fake-link" onClick={this.switchForm}>here</span>.
          </p>
          :
          <p>
            Already have an account? Log in <span className="fake-link" onClick={this.switchForm}>here</span>.
          </p>

        }
      </React.Fragment>
    )
  }
}
