import React, {Component} from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';
import GlobalActions from './GlobalActions';
import RollUpSummary from './RollUpSummary';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: this.props.records,
            onChangeHandler: this.props.onChangeHandler
        }

    }

    render() {
        return     <header className="header">
                    <div className="header-top">
                    <Filter />
                    <SearchBar onChangeHandler={this.state.onChangeHandler}/>
                    <GlobalActions />
                    </div>
                    <div className="header-bottom">
                    <RollUpSummary totalRecords={this.state.records.length}/>
                    </div>
                    </header>
    }
}

export default Header; 