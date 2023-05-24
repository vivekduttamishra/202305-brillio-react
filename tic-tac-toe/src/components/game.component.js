import React from 'react';
import Board from './board.component';
import Status from './status.component';
import Reset from './reset.component';

import {checkGame} from '../services/tic-tac-toe';

let _Game = (props)=>{

    return (
        <div className='game'>
            <Status/>
            <Board/>
            <Reset/>
        </div>
    )
}

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state=this.getNewGameState();
    }

    getNewGameState(){
        return {
            cells:[
                    null,null,null,
                    null,null,null,
                    null,null,null,
                ],

            player:"O",
            status:'Next Move : "O"'

        };
    }

    handleCellClick=(cellId)=>{

        if(this.state.cells[cellId]!==null)
            return;
        
        var cells = [...this.state.cells];
        cells[cellId]= this.state.player;
        this.setState({cells});


        var result=checkGame(cells);
        let status='';
        
        if(!result.completed){            

            var nextPlayer = this.state.player==='O'?'X':'O'; 
            this.setState({player:nextPlayer});
            status=`Next Move: "${nextPlayer}"`  
                     
            
        } else if(result.winner){                        
            status=`"${result.winner}" Wins!`;            
        } else{ 

            status=`Games Ends in Draw!`;
        }
        
        this.setState({status});

        
    }

    handleReset = ()=>{
        this.setState(this.getNewGameState());
    }

    render(){
        return (
            <div className='game'>
                <Status message={this.state.status}/>
                <Board 
                        cells={this.state.cells} 
                        onCellClick={this.handleCellClick}
                        />
                <Reset onClick={this.handleReset} />
            </div>
        )
    }

}

export default Game;