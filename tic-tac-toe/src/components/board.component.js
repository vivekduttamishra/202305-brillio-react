import React from 'react';
import Cell from "./cell.component";

class Board extends React.Component {


    render() {
        var borders = [
            "b_right b_bottom",
            "b_left b_right b_bottom",
            "b_left b_bottom",

            "b_top b_right b_bottom",
            "b_left b_top b_right b_bottom",
            "b_left b_top b_bottom",

            "b_right b_top",
            "b_right b_left b_top",
            "b_left b_top",
        ]

        console.log('cells values', this.props.cellValues);
        return (
            <div className='board'>
                {
                    this.props.cellValues.map((cellValue, index) => {
                        return <Cell id={index}
                                     key={index}
                                     cellValue={cellValue}
                                     handleClick={this.props.handleClick}
                                    borders = {borders}
                        />
                    })
                }
            </div>
        );
    }


}

export default Board;