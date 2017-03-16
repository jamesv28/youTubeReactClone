/**
   Create a component that creates HTML
   Take component HTML and put it on browser
   Run npm start to start server
 **/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/searchbar';
import ytSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const api_key = "AIzaSyCPPjLDwl999rQzbqlVOBfuD3AulmAUqPM";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []

        };

        ytSearch({key: api_key, term: 'this wild life'},  (videos) => {
            this.setState({ videos });  // when key and value you can just use the term once
        });
    }

    render() {
        return (
            <div>
                <h3 className="text-center">Search youTube videos </h3>
                <Searchbar/>
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(< App />, document.querySelector('.container') );
