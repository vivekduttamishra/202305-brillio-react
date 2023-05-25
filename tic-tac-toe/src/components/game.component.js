import Status from "./status.component";
import Board from "./board.component";
import Reset from "./reset.component";
import React from 'react'
import {checkWinner} from "../services/game";

class Game extends React.Component {

    state = {}

    constructor(props) {
        super(props);
        this.state = this.initiateNewGameState()
    }

    initiateNewGameState() {
        console.log('Reset Game');
        let newState = {
            // player: 'O',
            cells: [
                {value : null, isEnabled : true}, {value : null, isEnabled : true}, {value : null, isEnabled : true},
                {value : null, isEnabled : true}, {value : null, isEnabled : true}, {value : null, isEnabled : true},
                {value : null, isEnabled : true}, {value : null, isEnabled : true}, {value : null, isEnabled : true}
            ],
            gameStatus: "Player Turn : ",
            currentPlayer : "O"
        }
        return newState;
    }


    render() {
        console.log('this.state.gameStatus : ', this.state.gameStatus)
        return (
            <div className='game'>
                <Status gameStatus={this.state.gameStatus} currentPlayer={this.state.currentPlayer} />
                <Board cellValues={this.state.cells} handleClick={this.handleClick}/>
                <Reset handleReset={this.handleReset}/>
            </div>
        );
    }

    handleReset = () => {
        this.setState(this.initiateNewGameState());
    }

    handleClick = (cellId) => {
        console.log("Cell id ", cellId);
        console.log('cells ', this.state.cells);
        debugger;
        if (this.state.cells[cellId].value != null) {
            return;
        }
        let newCells = [...this.state.cells];
        debugger
        newCells[cellId].value = this.state.currentPlayer;

        this.setState({cells: newCells});
        setTimeout(() => {
            let winner = checkWinner(newCells)
            if (winner === -1) {
                let gameStatus = 'No more moves left. Game Draw'
                this.setState({gameStatus : gameStatus})
                for (let newCell of newCells) {
                    newCell.isEnabled = false;
                }
            } else if (winner.length > 0) {
                let gameStatus = "Player WON :" + newCells[winner[0][0]].value;
                this.setState({gameStatus : gameStatus});
                for (let newCell of newCells) {
                    newCell.isEnabled = false;
                }
            } else {
                let nextPlayer = this.state.currentPlayer === 'O' ? 'X' : 'O';
                this.setState({currentPlayer: nextPlayer});
            }
        }, 100);
    };


}

export default Game;