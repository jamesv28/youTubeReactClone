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
              className=" col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2"
              onChange={ event => this.onInputChange(event.target.value)}
          />
        </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

} //  end of searchbar

export default SearchBar;
