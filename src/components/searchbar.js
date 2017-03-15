import React, { Component } from 'react';

class SearchBar extends Component {
  render() {

    return <input className="form-control" onChange={this.onInputChange}/>;

  }

  onInputChange(e) {
    console.log(e.target.value);
  }
}

export default SearchBar;
