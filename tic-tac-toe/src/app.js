import React from 'react';
import AppHeader from './components/app-header.component';
import Game from './components/game.component';
import Clock from './components/clock.component';
import './app.css';
import ScoreBoard from './components/scrore-board.component';

class App extends React.Component {

    state={
        matches:0,
        O:0,
        X:0,
        draw:0
    }

    handleGameOver=(winner)=>{
        var {matches, O, X, draw }=this.state;

        matches++;
        if(winner==='O')
            O++;
        else if (winner==='X')
            X++;
        else
            draw++;

        this.setState({matches,O,X,draw});
    }

    render() {
        

        return (
            <div className="app">
                <AppHeader title="Tic Tac Toe" />
                <ScoreBoard
                   {...this.state}
                />              
                <Game 
                    onGameOver={this.handleGameOver}
                />
            </div>
        );
    }
}

export default App;