import React, {Component} from 'react';
import logo from './logo.png';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            inputFocus: false,
            onChangeHandler: this.props.onChangeHandler,
            filteredList: this.props.filteredList
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    render() {
        const listItemInfoStyle = {margin: '0px', paddingBottom: '3px'};
        const iconStyle = {fontSize: '.8125rem', color: '#b0adab'};
        const divStyle = {paddingBottom: '3px'};
        const listItems = this.state.filteredList.map(record => <li><div><img src={logo} width="36px" height="36px" /></div> 
        <div><h4 style={listItemInfoStyle}>{record.company}</h4><h6 style={listItemInfoStyle}>{record.objectType}</h6></div></li>)
        return <div className="searchbar-wrapper">
                <div className="searchbar">
                    <input type="text" placeholder="Search..." onFocus={this.clickHandler} onBlur={this.clickHandler} onChange={this.searchHandler} />
                </div>
                <div style={divStyle}><i className="fas fa-search" style={iconStyle}></i></div>
                <div className="searchbar-dropdown hide" data-dropdown>
                <ul>
                    {listItems}
                </ul>
                    </div>
                </div>
    }

    // Display dropdown menu if searchbar in focus
    clickHandler(event) {
        const e = document.querySelector('[data-dropdown]');
        event.type === 'focus' ? e.classList.remove('hide')
                               : e.classList.add('hide');
    }

    // Update SearchBar state when input value changes
    searchHandler(event) {
        const input = event.target.value;
        this.state.onChangeHandler(input, (filteredList) => {
            this.setState({
                filteredList
            })
        })
    }
}

export default SearchBar;