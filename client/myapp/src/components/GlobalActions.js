import React, {Component} from 'react';
import companyLogo from './companylogo.png';

class GlobalActions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const plusStyle = {color: '#00a3fa'};
        const cogStyle = {color: '#AEAEAE'};
        return <div className="global-actions-console">
                <div className="global-action"><i class="fas fa-plus-square" style={plusStyle}></i></div>
                <div className="global-action"><i class="fas fa-cog" style={cogStyle}></i></div>
                <div className="global-action"><img src={companyLogo} width="32px" height="32px"/></div>
                    </div>
    }
}

export default GlobalActions; 