import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from './components/search_bar';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const YT_API_KEY= **REMOVED**

// React is a js library that generates html to be shown to a user.
// Here we create a new component that generates some html


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            videos: [],
            selectedVideo: null};

        this.videoSearch("dub FX")
    }

    videoSearch(term){
        YTSearch({key: YT_API_KEY, term: term},
            (videos)=> {
                this.setState({
                    videos:videos,
                    selectedVideo:videos[0]
                });
            });
    }
    render(){
        return (
            <div>
                <SearchBar onSearchReq={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's html and put on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));
