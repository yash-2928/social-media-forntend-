import React from 'react';
import "../style/login.css";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password)
  }

  handleTextChange(value, field) {
    this.setState({ [field]: value })
  }

  render() {
    return (
      <div className="main">
        <Form className="form" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Id</Form.Label>
            <Form.Control value={this.state.email} onChange={e => this.handleTextChange(e.target.value, "email")} type="email" placeholder="Enter your Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={this.state.password} onChange={e => this.handleTextChange(e.target.value, "password")} type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" >Submit</Button>
          <Form.Text>New User? <Link to="signup">Register here</Link></Form.Text>
        </Form>
      </div>
    );
  }
}

export default Login;