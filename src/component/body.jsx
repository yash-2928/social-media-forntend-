import React from 'react';
import Login from './login';
import Post  from './post';
import Job from './job';
import Profile from './profile';
import Signup from './signup';
import { BrowserRouter as Router, Route} from 'react-router-dom';


class Body extends React.Component{
    render() {
        return (
          <Router>
            <div>
              <Route exact path="/" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/post" component={Post} />
              <Route path="/job" component={Job} />
              <Route path="/profile" component={Profile} />
            </div>
          </Router>
        );
    }
}

export default Body;