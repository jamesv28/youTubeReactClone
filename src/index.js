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
import VideoDetail from './components/videoDetail';
import _ from 'lodash';

const api_key = "AIzaSyCPPjLDwl999rQzbqlVOBfuD3AulmAUqPM";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null

        };

        this.videoSearch('this wild life');
    }

    videoSearch(term) {
        ytSearch({key: api_key, term: term},  (videos) => {
            this.setState({ videos:videos,
                selectedVideo: videos[0]
            });  // when key and value you can just use the term once
        });
    }
    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300);
        return (
            <div>
                <h3 className="text-center">Search youTube videos </h3>
                <Searchbar onSearchTermChange={ videoSearch } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(< App />, document.querySelector('.container') );
