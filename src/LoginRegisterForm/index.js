import React, { Component } from 'react'
import { Form, Button, Label, Grid, Header, Message } from 'semantic-ui-react'
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
      <Grid textAlign='center' style={{ height: '100vh'}} verticalalign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h1' textAlign='center' color= 'blue'>
            <Header.Content>{this.state.action} here</Header.Content>
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
          {
            this.state.action === "Register"
            &&
            <React.Fragment>
            <Label>First Name:</Label>
            <Form.Input
              fluid
              type="first_name"
              name="first_name"
              placeholder="First Name"
              value={this.state.first_name}
              onChange={this.handleChange}
              />
              <Label>Last Name:</Label>
              <Form.Input
              fluid
              type="last_name"
              name="last_name"
              placeholder="last Name"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
             <Label>Username:</Label>
             <Form.Input
              fluid
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
              fluid
              icon= 'user'
              iconPosition='left'
              type="email"
              name="email"
              placeholder="Enter a email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Label>Password:</Label>
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              type="password"
              name="password"
              placeholder="Enter a password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button color='blue' type="Submit">
              { this.state.action === "Login" ? "Log in" : "Sign up"}
            </Button>
          </Form>
          {
            this.state.action === "Login"
            ?
            <Message>
              Need an account? Sign up <span className="fake-link" onClick={this.switchForm}>here</span>.
            </Message>
            :
            <Message>
              Already have an account? Log in <span className="fake-link" onClick={this.switchForm}>here</span>.
            </Message>

          }
        </Grid.Column>
      </Grid>
      </React.Fragment>
    )
  }
}
