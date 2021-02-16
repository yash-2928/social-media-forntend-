import React from 'react';
import '../style/signup.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addUser } from '../service/userService';

class Signup extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      enrollmentNo: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "MALE",
      dateOfBirth: "",
      password: ""
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    addUser({...this.state})
  }

  handleTextChange(value, field) {
    this.setState({[field]: value})
  }

  handleNumberChange(value, field) {
    this.setState({[field]: value})
  }

  handleDateChange(value, field) {
    this.setState({[field]: value})
  }

  hendleGenderChange(value, field) {
      this.setState({[field]: value})
  }
  
  render() {
      return (
          <div className="main">
          <Form className="card" onSubmit={this.handleSubmit}>
            
              <Form.Group controlId="formBasicText">
                <Form.Label>Enrollment No</Form.Label>
              <Form.Control
                value={this.state.enrollmentNo}
                onChange={e => this.handleNumberChange(e.target.value, "enrollmentNo")} type="number" placeholder="Enter Enrollment No" />
              </Form.Group>
            
              <Form.Group controlId="formBasicText">
                <Form.Label>First Name</Form.Label>
                <Form.Control value={this.state.firstName} onChange={e => this.handleTextChange(e.target.value, "firstName")} type="text" placeholder="Enter First Name" />
              </Form.Group>
                  
              <Form.Group controlId="formBasicText">
                <Form.Label>Last Name</Form.Label>
                <Form.Control value={this.state.lastName} onChange={e => this.handleTextChange(e.target.value, "lastName")} type="text" placeholder="Enter Last Name" />
              </Form.Group>   
              
              <Form.Group controlId="formBasicText">
                <Form.Label>Date of Birth</Form.Label>
              <Form.Control value={this.state.dateOfBirth} onChange={e => this.handleDateChange(e.target.value, "dateOfBirth")} type="date" placeholder="Enter your Date of Birth" />
              </Form.Group>
    
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={this.state.email} onChange={e => this.handleTextChange(e.target.value, "email")} type="email" placeholder="Enter email" />
              </Form.Group>
            
              <Form.Group controlId="formBasicText">
                <Form.Label>Phone No</Form.Label>
              <Form.Control
                value={this.state.phoneNumber}
                onChange={e => this.handleNumberChange(e.target.value, "phoneNumber")}
                type="number"
                placeholder="Enter your Phone No" />
              </Form.Group>
            
              <Form.Group controlId="formBasicText">
              <Form.Label>Gender</Form.Label>
              <input
                type="radio"
                checked={this.state.gender === "MALE"} 
                name="gender" 
                value="MALE"
                onClick={e => this.handleTextChange(e.target.value, "gender")} />{''} Male
                <input 
                type="radio"
                checked={this.state.gender === "FEMALE"}
                name="gender"
                value="FEMALE"
                onClick={e => this.handleTextChange(e.target.value, "gender")} /> Female
              </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.password}
                onChange={e => this.handleTextChange(e.target.value, "password")}
                type="password" placeholder="Password" />
            </Form.Group>
        
            <Button variant="primary" type="submit" >Submit</Button>
            <Form.Text>Already registared? <Link to="/">Login here</Link></Form.Text> 
        </Form>
      </div>  
      );
  }
}

export default Signup;