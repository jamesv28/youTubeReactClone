import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>  {

    const videoItems = props.videos.map((video) => {
        return <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
    });
    return (
        <ul className="list-group col-md-4 col-sm-12">
            {videoItems}
        </ul>
    )
};  //  end of video list

export default VideoList;