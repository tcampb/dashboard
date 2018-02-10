import React, {Component} from 'react';

class GlobalActions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="global-actions-console">
                <div className="global-action"><i class="fas fa-plus-square"></i></div>
                <div className="global-action"><i class="fas fa-cog"></i></div>
                <div className="global-action"><i class="fas fa-user"></i></div>
                    </div>
    }
}

export default GlobalActions; 