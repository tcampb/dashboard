import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    render() {
        return <input type="text" />
    }
}

export default SearchBar;