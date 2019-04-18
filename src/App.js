import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Expensetable from "./table/trackertable";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var _ = require('lodash');

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          data: []
      }
  }
  componentDidMount() {
      axios.get('https://devchallengebe.herokuapp.com/api/expenses')
          .then(response => {
            var result = this.formatTableInput(response.data);
            this.setState({
              data: result
            });
          })
  }
  formatTableInput(value){
    if (_.isArray(value)) {
      var result = [];
      value.map(x => {
        x.amount = "$ " + x.amount
        result.push(x)
      })
      return result;
    } else {
      return false;
    }
  }
  async addExpense() {
      const {
          value: formValues
      } = await Swal.fire({
          title: 'Expense detail',
          inputPlaceholder: 'test',
          html: '<input id="detail-input1" placeholder="Expense name" class="swal2-input">' +
           '<select id="detail-input2" class="swal2-input" style="display: flex;">    <option value="">        Select an expense category    </option>    <option value="leisure">        Leisure    </option>    <option value="saving">        Saving    </option>    <option value="payment">        Payment    </option></select>' +
           '<input type="number" id="detail-input3" placeholder="amount" class="swal2-input inumber">',
          focusConfirm: false,
          preConfirm: () => {
              var e = document.getElementById("detail-input2");
              var detailInput2 = e.options[e.selectedIndex].value
              return {
                  expense: document.getElementById('detail-input1').value,
                  type: detailInput2,
                  amount: parseInt(document.getElementById('detail-input3').value),
              }
          }
      });
      if (formValues) {
          axios.post('https://devchallengebe.herokuapp.com/api/expenses',formValues)
              .then(res => {
                  var stateCopy = this.state.data;
                  stateCopy.push({
                      expense: formValues.expense,
                      type: formValues.type,
                      amount: "$ " + formValues.amount
                  });
                  this.setState({
                      data: stateCopy
                  }); 
                  var flag=0;
                  this.state.data.map(data=>((data.type === 'leisure') ? flag+=data.amount : 'major'))
                  if (flag > 1000) {
                    toast("spending too much money on " + formValues.expense + "… as always.");
                  } 
              });
      }
  }

  createReport(){

  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
          <Expensetable data={this.state.data}/>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-3">
                      <Button onClick={this.addExpense.bind(this)} variant="info">
                          Add Expense
                      </Button>
                  </div>
                  <div class="col-3">
                      <Button onClick={this.createReport.bind(this)} variant="info">
                          Create Report
                      </Button>
                  </div>
              </div>
          </div>
      </header>
      <ToastContainer />
    </div>
    );
  }
}

export default App;
