import React from 'react';
import Board from './board.component';
import Status from './status.component';
import StartButton from './start-button.component';
import MoveList from './move-list.component';

import { checkGame } from '../services/tic-tac-toe';
import Stopwatch from './auto-stop-wtach.component';


let _Game = (props) => {

    return (
        <div className='game'>
            <Status />
            <Board />
            <StartButton />
        </div>
    )
}

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getNewGameState();
        this.state.completed=true;
        this.state.status="Press Start!";

        this.stopWatchO=React.createRef();
        this.stopWatchX=React.createRef();
    }

    getNewGameState() {
        return {
            cells: [
                null, null, null,
                null, null, null,
                null, null, null,
            ],

            player: null,
            status: 'Next Move : "O"',
            winner: null,
            completed: false,
            winningCombo: [],
            moves: []
        };
    }

    handleCellClick = (cellId) => {
        console.log('handleCellClick called');
        if (this.state.cells[cellId] !== null)
            return;

        var cells = [...this.state.cells];
        cells[cellId] = this.state.player;
        this.setState({ cells });

        var moves = [...this.state.moves, //take all current moves
        //and add a new move
        {
            player: this.state.player,
            position: cellId
        }];

        this.setState({ moves });



        var result = checkGame(cells);
        let status = '';

        if (!result.completed) {

            var nextPlayer = this.state.player === 'O' ? 'X' : 'O';
            this.setState({ player: nextPlayer });
            status = `Next Move: "${nextPlayer}"`


        } else {

          
            
            this.props.onGameOver(result.winner);

            this.setState({
                winner: result.winner,
                completed: true,
                winningCombo: result.winningCombo
            });

            if (result.winner) {
                status = `"${result.winner}" Wins!`;
            } else {
                status = `Games Ends in Draw!`;
            }
        }

        this.setState({ status });


    }

    handleStart = () => {

        this.stopWatchO.current.reset();
        this.stopWatchX.current.reset();


        var player= this.state.player==='O'?'X':'O';

        var game={
            ...this.getNewGameState(),
            player,
            status:`Next Move: ${player}`
        };
        
        this.setState(game);

        


    }

    render() {
        return (
            <div className='game'>
                <div className="left">
                    <Status message={this.state.status} />
                    <Board
                        completed={this.state.completed}
                        cells={this.state.cells}
                        onCellClick={this.handleCellClick}
                        winningCombo={this.state.winningCombo}

                    />
                    <StartButton 
                            disabled={!this.state.completed}
                            onClick={this.handleStart} 
                    />
                </div>
                <div className="right">
                    <div className="row">
                        <Stopwatch ref={this.stopWatchO}
                         name="O" run={!this.state.completed && this.state.player==='O'} />
                        <Stopwatch ref={this.stopWatchX}
                            name="X" run={!this.state.completed && this.state.player==='X'} />
                    </div>
                    
                    <MoveList moves={this.state.moves} />
                </div>
            </div>
        )
    }

}

export default Game;