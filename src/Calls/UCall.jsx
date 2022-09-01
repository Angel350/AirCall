import React, {Component} from 'react';
import * as misc from '../misc.js';

class UCall extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const calls = this.props.info.calls;
        const filteredCalls = calls.filter((call)=>{
            if(call.is_archived===false){
                return true;
            }
            else{return false;}
        })
        return (
            <div className='all-calls-container'>
                {filteredCalls.map(call => (
                    <div key={call.id} className='call-root-div'>
                        <div className='call-date-div row'>
                            <p className='call-date'>{misc.standardDate(call.created_at)}</p>
                        </div>
                        <div className='call-details-div'>
                            <div className='call-details-box-space '>
                                <div className='call-details-box row'>
                                    <div className='col-2 call-type-image'>
                                        <IconCall info={call}/>
                                    </div>
                                    <div className='col-6'>
                                        <div className='call-person-name-from row'>
                                            {call.from}
                                        </div>
                                        <div className='call-person-name-to row'>
                                            tried to call on {call.to}
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        <div className='vertical-menu dropdown'>
                                            <button
                                                className="btn btn-light btn-rounded dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                data-bs-offset="-120,10"></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li>
                                                <input value="Archive" className="dropdown-item" type="button" onClick={() =>{
                                                    misc.updateType(call.id);
                                                    this.setState
                                                    }} />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        <div className='call-time'>
                                            {misc.standardTime(call.created_at)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
class IconCall extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const call = this.props.info;
        if (call.call_type === "missed") {
            return (<img src="https://img.icons8.com/material/24/000000/missed-call--v1.png"/>);
        }
        if (call.call_type === "answered" && call.direction === "outbound") {
            return (<img src="https://img.icons8.com/material/24/000000/outgoing-call.png"/>);
        }
        if (call.call_type === "answered" && call.direction === "inbound") {
            return (<img src="https://img.icons8.com/material/24/000000/incoming-call.png"/>);
        }
        if (call.call_type === "voicemail") {
            return (<img src="https://img.icons8.com/material/24/000000/voicemail--v1.png"/>);
        }
        return (
            <div></div>
        )
    }
}

export default UCall;