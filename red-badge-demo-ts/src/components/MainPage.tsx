import * as React from 'react';
import { Component } from 'react';
import Dice from './Dice';

export interface MainPageProps {
    
}
 
export interface MainPageState {
    winnerStatus: string;
}
 
class MainPage extends React.Component<MainPageProps, MainPageState> {
    constructor(props: MainPageProps) {
        super(props);
        this.state = { 
            winnerStatus: '' ,
        };
    }
    render() { 
        return ( 
            <div><p>{this.state.winnerStatus}</p>
            <Dice playerName='Player1' diceRoll={4}/>
            <Dice playerName='Player2' diceRoll={3}/>
            </div>
            
         );
    }
}
 
export default MainPage;