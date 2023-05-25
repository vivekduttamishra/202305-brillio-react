import React from 'react';
import Cell from "./cell.component";

class Board extends React.Component {


    render() {
        console.log('cells values', this.props.cellValues);
        return (
            <div className='board'>
                {
                    this.props.cellValues.map((cellValue, index) => {
                        return <Cell id={index}
                                     key={index}
                                     cellValue={cellValue}
                                     handleClick={this.props.handleClick}/>
                    })
                }
            </div>
        );
    }


}

export default Board;