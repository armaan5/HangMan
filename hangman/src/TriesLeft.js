import React, { Component } from 'react';

class TriesLeft extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tries: 7
         }
    }
    render() { 
        return ( 
            <div>
                Tries left: {this.state.tries}
            </div>
         );
    }
}
 
export default TriesLeft;