import React, {Component} from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';
import GlobalActions from './GlobalActions';
import RollUpSummary from './RollUpSummary';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return     <header className="header">
                    <div className="header-top">
                    <Filter />
                    <SearchBar />
                    <GlobalActions />
                    </div>
                    <div className="header-bottom">
                    <RollUpSummary />
                    </div>
                    </header>
    }
}

export default Header; 