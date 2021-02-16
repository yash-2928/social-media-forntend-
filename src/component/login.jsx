import React from 'react';
import "../style/login.css";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      enrollmentNo: "",
      password: ""
    }

    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleTextChange = this.handleNumberChange.bind(this);
   
  }

  handleTextChange(value, field) {
    this.setState({[field]: value})
  }

  handleNumberChange(value, field) {
    this.setState({[field]: value})
  }

  render() {
    return (
      <div className="main">
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Id</Form.Label>
            <Form.Control value={this.state.enrollmentNo} onChange={e => this.handleNumberChage(e.target.value, "enrollmentNo")} type="number" placeholder="Enter your EnrollmentNo" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={this.state.password} onChange={e => this.handleNumberChange(e.target.value, "password")} type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit" >Submit</Button>
          <Form.Text>New User? <Link to="signup">Register here</Link></Form.Text> 
        </Form>
      </div>  
      );
  }
}

export default Login;