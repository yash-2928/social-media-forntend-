import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

class Header extends React.Component{
    render() {
        return (
          <>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/post">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/post">Post</Nav.Link>
                <Nav.Link href="/job">Job</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
          </>    
        );
    }
}

export default Header;