import React from 'react';
import Cell from "./cell.component";

class Board extends React.Component {


    render() {
        console.log('cells ', this.props.cells)
        return (
            <div className='board'>
                {
                    this.props.cells.map((value, index) => {
                        return <Cell id={index}
                                     value={this.props.cells[index]}
                                     handleClick={this.props.handleClick}/>
                    })
                }
            </div>
        );
    }


}

export default Board;