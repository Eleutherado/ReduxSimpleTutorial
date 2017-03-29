import React from "react";

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state = { term: "" };
    }
    render(){
        return(
            <div className="row search-bar">
                <div className="col-md-8">
                    <input className="form-control"
                    value={this.state.term}
                    onInput={(event) => this.setState({term: event.target.value})} />
                </div>
                <div className="col-md-1">
                    <input className="btn btn-default" type="submit" value="search"
                        onClick={()=> this.props.onSearchReq(this.state.term)}/>
                </div>
            </div>
        );
    }
}

export default SearchBar;
