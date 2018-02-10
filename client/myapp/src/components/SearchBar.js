import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    render() {
        const iconStyle = {fontSize: '.8125rem', color: '#b0adab'};
        const divStyle = {paddingBottom: '3px'};
        return <div className="searchbar-wrapper">
                <div className="searchbar">
                    <input type="text" placeholder="Search..." />
                </div>
                <div style={divStyle}><i className="fas fa-search" style={iconStyle}></i></div>
                </div>
    }
}

export default SearchBar;