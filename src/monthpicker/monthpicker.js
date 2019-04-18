import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import moment from 'moment';
import { CSVLink } from "react-csv";

class Monthpicker extends Component {
    constructor(props) {
        super(props);
        this.CSVLink = React.createRef()
	    this.state = {
	        date: new Date(),
	        data: []
	    }
    }

    onChange(value){
    	moment(value[0]).format('YYYY-MM-DD HH:mm:ss')
		axios.post('https://devchallengebe.herokuapp.com/api/expenses/bydate',{
			    startDate: moment(value[0]).format('YYYY-MM-DD HH:mm:ss'),
			    endDate: moment(value[1]).format('YYYY-MM-DD HH:mm:ss')
						})
		  .then(response => {
		  	this.setState({
              data: response.data
            });
			this.CSVLink.current.link.click()
			this.props.context.hideCalendar(this.props.context)
		  })
    }
    render () {
	    return (
	      <div>
	        <Calendar 
	          selectRange={true}
	          onChange={this.onChange.bind(this)}
	          value={this.state.date}
	        />
	        	<CSVLink ref={this.CSVLink} className="hidden" data={this.state.data}>Download me</CSVLink>;   
	      </div>

	    );
    }
}
export default Monthpicker;