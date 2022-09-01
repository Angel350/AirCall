import React, {Component} from 'react';
import UCall from './UCall.jsx';
import AlCall from './AlCall.jsx';
import ArCall from './ArCall.jsx';

class CContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const calls = this.props.info;
        return (
            <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="all-calls-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#all-calls"
                            type="button"
                            role="tab"
                            aria-controls="all-calls"
                            aria-selected="true">All Calls</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="inbox-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#inbox"
                            type="button"
                            role="tab"
                            aria-controls="inbox"
                            aria-selected="false">Inbox</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="archived-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#archived"
                            type="button"
                            role="tab"
                            aria-controls="archived"
                            aria-selected="false">Archived</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="all-calls"
                        role="tabpanel"
                        aria-labelledby="all-calls-tab"><AlCall info={calls}/></div>
                    <div
                        className="tab-pane fade"
                        id="inbox"
                        role="tabpanel"
                        aria-labelledby="inbox-tab"><UCall info={calls}/></div>
                    <div
                        className="tab-pane fade"
                        id="archived"
                        role="tabpanel"
                        aria-labelledby="archived-tab"><ArCall info={calls}/></div>
                </div>
            </div>
        );
    }
}

export default CContainer;