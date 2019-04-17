import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Expensetable from "./table/trackertable";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        data: [{ expense: 'Water', type: 'need', amount: 100},{ expense: 'video games', type: 'leisure', amount: 60}]
      }
  }

    async addExpense () {
    var k;
    const {value: formValues} = await Swal.fire({
      title: 'Expense detail',
      inputPlaceholder: 'test',
      html:
        '<input id="detail-input1" placeholder="Expense name" class="swal2-input">' +
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
          // tableData: { id: data.length}
        }
      }
    })
    var stateCopy = this.state.data;
    stateCopy.push({ expense: 'Water', type: 'need', amount: 100});
    this.setState({data: stateCopy});
    // data.push(formValues);
    // console.log(data);
    if (formValues) {
      var stateCopy = this.state.data;
      stateCopy.push({ expense: 'Water', type: 'need', amount: 100});
      this.setState({data: stateCopy});
    }
  }

  render() {
  function getState() {
    return this.state.data;
  }

  const REACT_VERSION = React.version;


    return (

      <div className="App">
     {REACT_VERSION}
        <header className="App-header">
         <Expensetable data={this.state.data}/>
         <Button onClick={this.addExpense} variant="info">Add Expense</Button>
  
        </header>
 
      </div>
    );
  }
}

export default App;
