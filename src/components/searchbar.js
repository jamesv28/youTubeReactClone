import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };  //  only time we explicitly defined state in the constructor method
  }

  render() {

    return (
        <div>
          <input
              value={this.state.term}
              className="form-control" onChange={ event => this.setState( { term: event.target.value })}/>
        </div>
    )
  }

} //  end of searchbar

export default SearchBar;
