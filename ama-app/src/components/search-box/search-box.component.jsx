import { Component } from "react";

class SearchBox extends Component {

    render() {
        const { handleSearchInput } = this.props;
        
        return(
            <input
                className={this.props.className}
                type='search' 
                placeholder={this.props.placeholder} 
                onChange={ handleSearchInput }
            >
            </input>
        )
    }
}

export default SearchBox;