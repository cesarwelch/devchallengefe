import React, { useState, Component } from 'react';
import Calendar from 'react-calendar';

class Monthpicker extends Component {
    constructor(props) {
        super(props);
	    this.state = {
	        date: new Date(),
	    }
    }

    onChange(value){
    	console.log(value)
    	this.props.context.showCalendar(this.props.context)
    }
    render () {
	    return (
	      <div>
	        <Calendar 
	          selectRange={true}
	          onChange={this.onChange.bind(this)}
	          value={this.state.date}
	        />
	      </div>
	    );
    }
}
export default Monthpicker;