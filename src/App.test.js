import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var mockApp = new App("test");
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
    ReactDOM.unmountComponentAtNode(div);
});
it('gets the same format of expenses everytime', () => {
    const input = [{
        expense: "Pizza",
        type: "leisure",
        amount: 15,
    }, {
        expense: "Payment on house",
        type: "payment",
        amount: 150,
    }, {
        expense: "Saving from my job",
        type: "saving",
        amount: 2000,
    }];
    const result = [{
        expense: "Pizza",
        type: "leisure",
        amount: "$ 15",
    }, {
        expense: "Payment on house",
        type: "payment",
        amount: "$ 150",
    }, {
        expense: "Saving from my job",
        type: "saving",
        amount: "$ 2000",
    }];
    expect(mockApp.formatTableInput(input)).toEqual(result)
});