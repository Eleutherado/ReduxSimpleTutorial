import React from 'react';

const VideoDetail = ({video}) =>{
    if(!video){
        return <div>Loading...</div>;
    }
    const videoID = video.id.videoId;
    const vidUrl= `https://www.youtube.com/embed/${videoID}`;
    return (

        // just learned alot of react, did a tic tac toe game which was great.
        // I really learned a lot from the tutorial up on the react github.
        // thanks to all those who contributed. Thank you too to the udemy
        // code instructor who is doing this great series on ReactJS
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={vidUrl}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>


    );

};

export default VideoDetail;
