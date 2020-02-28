import React, { Component } from 'react';
import './Game.css'
import Key from './Key';
import TriesLeft from './TriesLeft';

class Game extends Component {
    static defaultProps = {
        word: 'cactus' 
    };
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const qwerty = [
            'q','w','e','r','t','y','u','i','o','p',
            'a','s','d','f','g','h','j','k','l',
            'z','x','c','v','b','n','m'
        ];
        let keys = qwerty.map(k =>{
            return<Key value ={k}/>
        })
        return (  
            <div className = 'game'>
                <h1>Hang Man!</h1>
                <h2>Word: {this.props.word}</h2>
                <TriesLeft/>
                <div className = 'keyboard'>
                    {keys}
                </div>
            </div>
        );
    }
}
 
export default Game;