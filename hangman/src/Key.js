import React, { Component } from 'react';
import './Key.css'
class Key extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected: false
         }
    }
    render() { 
        return (  
            <div className = 'key'>
                {this.props.value}
            </div>
        );
    }
}
 
export default Key;