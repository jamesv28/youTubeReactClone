/**
   Create a component that creates HTML
   Take component HTML and put it on browser
 **/
import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {
    return <h1>Hello</h1>;
};  // const is variable declaration except it is a constant

ReactDOM.render(App);
