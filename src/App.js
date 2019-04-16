import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Basic from "./table/trackertable";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

class App extends Component {


  render() {
  function activateLasers() {
    Swal.fire('Hello world!')
  }
  
    return (

      <div className="App">

        <header className="App-header">
         <Basic/>
         <Button onClick={activateLasers} variant="info">Add Expense</Button>
  
        </header>
 
      </div>
    );
  }
}

export default App;
