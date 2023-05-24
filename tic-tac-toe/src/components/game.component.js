import Status from "./status.component";
import Board from "./board.component";
import Reset from "./reset.component";
import React from 'react'
import {checkWinner} from "../services/game";

class Game extends React.Component {

    state = {
        player: 'O',
        cells: [
            null, null, null,
            null, null, null,
            null, null, null
        ]
    }

    render() {
        return (
            <div className='game'>
                <Status nextPlayer={this.state.player}/>
                <Board cells={this.state.cells} handleClick={this.handleClick}/>
                <Reset handleReset={this.handleReset}/>
            </div>
        );
    }

    handleReset = () => {
        let resetCells = [
            null, null, null,
            null, null, null,
            null, null, null
        ];
        let newPlayer = 'O';
        this.setState({player: newPlayer, cells: resetCells})
    }

    handleClick = (cellId) => {
        console.log("Cell id ", cellId);
        console.log('cells ', this.state.cells)
        if (this.state.cells[cellId] != null) {
            return;
        }

        let newCells = [...this.state.cells];
        newCells[cellId] = this.state.player;
        let nextPlayer = this.state.player === 'O' ? 'X' : 'O'
        this.setState({cells: newCells, player: nextPlayer});
        setTimeout(() => {
            let winner = checkWinner(newCells)
           if(winner === -1){
               window.alert("No moves left");
               this.handleReset();
           }
            if (winner.length > 0) {
                window.alert("Player WON :" + newCells[winner[0][0]]);
                this.handleReset();
            }
        }, 100);
    };


}

export default Game;