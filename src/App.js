import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Expensetable from "./table/trackertable";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          data: []
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
           '<input id="detail-input3" placeholder="amount" class="swal2-input">',
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
          var stateCopy = this.state.data;
          stateCopy.push({
              expense: formValues.expense,
              type: formValues.type,
              amount: formValues.amount
          });
          this.setState({
              data: stateCopy
          });
      }
  }

  render() {
    return (
    <div className="App">
        <header className="App-header">
            <Expensetable data={this.state.data}/>
                <Button onClick={this.addExpense.bind(this)} variant="info">
                    Add Expense
                </Button>
        </header>
    </div>
    );
  }
}

export default App;
