import React, { Component } from 'react';
import './Game.css'
import Key from './Key';
import TriesLeft from './TriesLeft';
import {qwerty, matchIndicies, replaceWithLetter} from './Keyboard'
import Letter from './Letter'

class Game extends Component {
    static defaultProps = {
        word: 'cactus' 
    };
    constructor(props) {
        super(props);
        this.state = { 
            currentWord: Array.from('_'.repeat(this.props.word.length)),
            tries: 7
         }
        this.geuss = this.geuss.bind(this);
    }
    geuss(value) {
        if(this.props.word.includes(value)){
             this.setState(st => ({
                currentWord: replaceWithLetter(matchIndicies(this.props.word, value), value, st.currentWord)
             }));
        }
        else{
            this.setState(st =>({
                tries: st.tries - 1
            }));
        }
    }

    render() { 
        let keys = qwerty.map((k, idx) =>{
            return<Key value ={k} guess = {this.geuss} key = {idx}/>
        })
        return (  
            <div className = 'game'>
                <h1>Hang Man!</h1>
                <h2>{this.state.currentWord}</h2>
                <TriesLeft tries = {this.state.tries}/>
                <div className = 'keyboard'>
                    {keys}
                </div>
            </div>
        );
    }
}
 
export default Game;