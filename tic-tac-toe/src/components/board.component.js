import { Component } from 'react';
import Cell from './cell.component';

const Board = ({cells,winningCombo, completed, onCellClick}) => {

    

    return (
        <div className='board'>
            {
                cells.map((value, id) => (
                    <Cell id={id}
                        key={id}
                        value={value}
                        completed={completed}
                        winner={winningCombo.includes(id)}
                        onCellClicked={onCellClick}
                    />
                ))
            }

        </div>
    );
}



export default Board;