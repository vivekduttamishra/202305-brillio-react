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
    
        return (
            <div className='board'>
               {
                this.state.cells.map((value,index)=>(
                    <Cell id={index} 
                        key={index}
                    value={this.state.cells[index]}
                    onCellClicked={this.handleCellClick}
                    />
                ))
               }
    
            </div>
        );
    }
}


export default Board;