import Status from "./status.component";
import Board from "./board.component";
import Reset from "./reset.component";
import React from 'react'
import {checkWinner} from "../services/game";
import PlayerMoves from "./player-moves.component";
import Timer from "./timer.component";

class Game extends React.Component {

    state = {}

    constructor(props) {
        super(props);
        // this.state = ;
        this.state = {...this.initiateNewGameState()};
    }

    initiateNewGameState() {
        console.log('Reset Game');
        let newState = {
            // player: 'O',
            cells: [
                {value: null, isDisabled: false, isWinner: false}, {
                    value: null,
                    isDisabled: false,
                    isWinner: false
                }, {value: null, isDisabled: false, isWinner: false},
                {value: null, isDisabled: false, isWinner: false}, {
                    value: null,
                    isDisabled: false,
                    isWinner: false
                }, {value: null, isDisabled: false, isWinner: false},
                {value: null, isDisabled: false, isWinner: false}, {
                    value: null,
                    isDisabled: false,
                    isWinner: false
                }, {value: null, isDisabled: false, isWinner: false}
            ],
            gameStatus: "Player Turn : ",
            currentPlayer: "O",
            playerMoves: []
        }
        return newState;
    }


    render() {
        console.log('this.state.gameStatus : ', this.state.gameStatus)
        return (
            <div className='game'>
                <Status gameStatus={this.state.gameStatus} currentPlayer={this.state.currentPlayer}/>
                <div className='left'>
                    <Board cellValues={this.state.cells} handleClick={this.handleClick}/>
                    <Reset handleReset={this.handleReset}/>
                </div>
                <div className='right'>
                    <table>
                        <thead>
                        <tr>
                            <td>Player O</td>
                            <td>Player X</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Timer/></td>
                            <td><Timer/></td>
                        </tr>
                        </tbody>
                    </table>
                    <PlayerMoves playerMoves={this.state.playerMoves}/>
                </div>
            </div>
        );
    }

    handleReset = () => {
        this.setState(this.initiateNewGameState());
    }

    handleClick = (cellId) => {
        console.log("Cell id ", cellId);
        console.log('cells ', this.state.cells);

        if (this.state.cells[cellId].value != null) {
            return;
        }

        let newPlayerMoves = [...this.state.playerMoves];
        newPlayerMoves.push({player: this.state.currentPlayer, position: cellId});
        this.setState({playerMoves: newPlayerMoves});


        let newCells = [...this.state.cells];
        newCells[cellId].value = this.state.currentPlayer;

        this.setState({cells: newCells});
        setTimeout(() => {
            let winner = checkWinner(newCells)
            if (winner === -1) {
                let gameStatus = 'No more moves left. Game Draw'
                this.setState({gameStatus: gameStatus})
                for (let newCell of newCells) {
                    newCell.isDisabled = true;
                }
                this.props.updateScoreBoard();

            } else if (winner.length > 0) {
                let gameStatus = "Player WON :" + newCells[winner[0][0]].value;
                this.setState({gameStatus: gameStatus});
                for (let i = 0; i < newCells.length; i++) {
                    let newCell = newCells[i];
                    if (winner[0].includes(i)) {
                        newCell.isWinner = true;
                    }
                    newCell.isDisabled = true;
                }
                this.props.updateScoreBoard(newCells[winner[0][0]].value);
            } else {
                let nextPlayer = this.state.currentPlayer === 'O' ? 'X' : 'O';
                this.setState({currentPlayer: nextPlayer});
            }
        }, 100);
    };


}

export default Game;