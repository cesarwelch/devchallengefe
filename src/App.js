import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Basic from "./table/trackertable";
import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
  
    return (

      <div className="App">

        <header className="App-header">
         <Basic />
         <Button variant="primary">Primary</Button>
        </header>
 
      </div>
    );
  }
}

export default App;
