import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './component/header';
import Body from './component/body';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Body />
      </>  
    );
  }
}

export default App;
