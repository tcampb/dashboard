import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            inputFocus: false,
            onChangeHandler: this.props.onChangeHandler
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    render() {
        const iconStyle = {fontSize: '.8125rem', color: '#b0adab'};
        const divStyle = {paddingBottom: '3px'};
        return <div className="searchbar-wrapper">
                <div className="searchbar">
                    <input type="text" placeholder="Search..." onFocus={this.clickHandler} onBlur={this.clickHandler} onChange={this.searchHandler} />
                </div>
                <div style={divStyle}><i className="fas fa-search" style={iconStyle}></i></div>
                <div className="searchbar-dropdown hide" data-dropdown>Company Name</div>
                </div>
    }

    clickHandler(event) {
        const e = document.querySelector('[data-dropdown]');
        event.type === 'focus' ? e.classList.remove('hide')
                               : e.classList.add('hide');
    }

    searchHandler(event) {
        const input = event.target.value;
        this.state.onChangeHandler(input);
    }
}

export default SearchBar;