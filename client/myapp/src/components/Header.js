import React, {Component} from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';
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
                    {/* <SearchBar /> */}
                    <button>Add Target</button>
                    </div>
                    <div className="header-bottom">
                    <RollUpSummary />
                    </div>
                    </header>
    }
}

export default Header; 