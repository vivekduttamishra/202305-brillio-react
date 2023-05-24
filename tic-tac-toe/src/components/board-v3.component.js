import {Component} from 'react';
import Cell from './cell.component';

class Board extends Component {

    constructor(props) {
        super(props);

        this.state={
            cells:[
                    null,null,null,
                    null,null,null,
                    null,null,null,
                ],

            player:"O"

        };
    }

    handleCellClick=(cellId)=>{

        if(this.state.cells[cellId]!==null)
            return;
        
        var newCells = [... this.state.cells];

        newCells[cellId]= this.state.player;

        var nexPlayer = this.state.player==='O'?'X':'O';

        this.setState({player: nexPlayer, cells: newCells});
        
    }



    render=()=>{

        var cells=[];

        for(var i=0;i<9;i++){
            cells.push(
                <Cell id={i} 
                    value={this.state.cells[i]}
                    onCellClicked={this.handleCellClick}
                />
            );
        }
    
        return (
            <div className='board'>
               {cells}    
            </div>
        );
    }
}


export default Board;