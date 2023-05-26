import logo from './logo.svg';
import './App.css';
import Game from "./components/game.component";
import AppHeader from "./components/app-header";
import ScoreBoard from "./components/scoreboard.component";
import React from "react";

class App extends React.Component {

    state = {
        scoreboard: {
            playerX: 0,
            playerO: 0,
            draw: 0
        }
    }

    render() {
        return (
            <div className="App">
                <AppHeader title='Tic Tac Toe'/>
                <div>
                    <ScoreBoard scoreboard={this.state.scoreboard}/>
                </div>
                <div>
                    <Game scoreboard={this.state.scoreboard}
                          updateScoreBoard={this.updateScoreBoard}/>
                </div>

            </div>
        );
    }

    updateScoreBoard = (state) => {

        let newScoreBoard = this.state.scoreboard;
        if (state === 'X') {
            newScoreBoard.playerX++;
        } else if (state === 'O') {
            newScoreBoard.playerO++;
        } else {
            newScoreBoard.draw++;
        }
        this.setState({scoreboard: newScoreBoard});

    }
}

export default App;
