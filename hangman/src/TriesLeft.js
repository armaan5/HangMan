import React, { Component } from 'react';
import './Tries.css'
class TriesLeft extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <div className = 'tries'>
                {this.props.tries === 0 ? window.location.reload(): 'Tries left:' + this.props.tries}
            </div>
         );
    }
}
 
export default TriesLeft;