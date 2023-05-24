import Status from "./status.component";
import Board from "./board.component";
import Reset from "./reset.component";
import React from 'react'

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
            let winner = this.checkWinner(newCells)
            if (winner.length > 0) {
                debugger
                window.alert("Player WON :" + newCells[winner[0][0]]);
                this.handleReset();
            }
        }, 100);

        // console.log('new vale is ', newValue);
        // window.alert("");
        // if (t)
    };

    checkWinner(cells) {
        let winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2],
        ]
        let winnerCells = [];
        for (const element of winner) {
            let matrix = element;
            let temp = cells[matrix[0]];
            if (temp != null) {
                if (temp === cells[matrix[1]] && temp === cells[matrix[2]]) {
                    winnerCells.push(matrix)
                }
            }
        }
        return winnerCells;

    }

}

export default Game;