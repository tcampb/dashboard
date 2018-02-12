import React, {Component} from 'react';

class GlobalActions extends Component {
    constructor(props) {
        super(props);
        this.addTarget = this.addTarget.bind(this);
    }

    render() {
        const buttonStyle = {width: '100px', fontSize: '13px', padding: '0px'};
        return <div className="global-actions-console">
            <div class="ui buttons" id="console-group">
                <button class="ui blue basic button" style={buttonStyle} onClick={this.addTarget}>New Target</button>
                <button class="ui blue basic button" style={buttonStyle}>New Contact</button>
                <button class="ui blue basic button" style={buttonStyle}>Settings</button>
                </div>
                {/* <div className="global-action" onClick={this.addTarget}><i class="fas fa-plus-square" style={plusStyle}></i></div>
                <div className="global-action"><i class="fas fa-cog" style={cogStyle}></i></div>
                <div className="global-action"><img src={companyLogo} width="32px" height="32px"/></div> */}
                    </div>
    }

    addTarget() {
        document.querySelector('body').setAttribute('style', 'position: fixed');
        document.querySelector('[data-modal-container]').classList.remove('hide');
    }
}

export default GlobalActions; 