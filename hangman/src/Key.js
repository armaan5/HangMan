import React, { Component } from 'react';
import './Key.css'
class Key extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected: false
         }
         this.handleGuess = this.handleGuess.bind(this);
    }

    handleGuess() {
        this.props.guess(this.props.value);
    }

    render() { 
        return (  
            <div className = 'key' onClick = {this.handleGuess}>
                {this.props.value}
            </div>
        );
    }
}
 
export default Key;