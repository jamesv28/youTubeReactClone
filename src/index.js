/**
   Create a component that creates HTML
   Take component HTML and put it on browser
   Run npm start to start server
 **/
import React from 'react';
import ReactDOM from 'react-dom';

const App =  () => {
    //  ^this arrow function replaces an anonymous function
    //  it does change the definition of this however
    
    return <h1>Hello</h1>;
};  // const is variable declaration except it is a constant

ReactDOM.render(< App />, document.querySelector('.container') );
