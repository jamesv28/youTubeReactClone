/**
   Create a component that creates HTML
   Take component HTML and put it on browser
   Run npm start to start server
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/searchbar';

const api_key = "AIzaSyCPPjLDwl999rQzbqlVOBfuD3AulmAUqPM";


const App =  () => {
    //  ^this arrow function replaces an anonymous function
    //  it does change the definition of this however

    return (
        <div>
            <h1 className="text-center">Who run it </h1>
            <Searchbar/>
        </div>
    )
};  // const is variable declaration except it is a constant

ReactDOM.render(< App />, document.querySelector('.container') );
