import React from 'react';

const VideoList = (props) =>  {

    return (
        <ul className="col-md-4 col-sm-4 list-group">
            {props.videos.length}
        </ul>
    )
};  //  end of video list

export default VideoList;