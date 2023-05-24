import { Component } from 'react';
import Cell from './cell.component';

const Board = ({cells, onCellClick}) => {

    return (
        <div className='board'>
            {
                cells.map((value, index) => (
                    <Cell id={index}
                        key={index}
                        value={value}
                        onCellClicked={onCellClick}
                    />
                ))
            }

        </div>
    );
}



export default Board;