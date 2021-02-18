import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './component/header';
import Body from './component/body';
import Login from './component/login';
import Signup from './component/signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { login } from './service/authService';

const CURRENT_USER = "currentUser"

class App extends React.Component {

  constructor(props) {
    super(props)

    const currentUser = localStorage.getItem(CURRENT_USER)

    this.state = {
      currentUser: currentUser && JSON.parse(currentUser)
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  handleLogin(email, password) {
    login(email, password).then(data => {
      this.setState({ currentUser: data })
      localStorage.setItem(CURRENT_USER, JSON.stringify(data))
    })
  }

  render() {
    if (this.state.currentUser) {
      return <> 
        <Header />
        <Body />
      </>
    } else {
      return <Router>
        <>
          <Route exact path="/" component={() => <Login login={this.handleLogin} />} />
          <Route path="/signup" component={Signup} />
        </>
      </Router>
    }
  }
}

export default App;
