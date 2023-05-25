import React from 'react';

class Cell extends React.Component {

    render() {
        var cellStyle = {};
        if (!this.props.cellValue.value) {
            // value = '-';
            cellStyle.color = "transparent";
        } else {
            if(this.props.cellValue.value === 'X')
                cellStyle.background = "green"
            else
                cellStyle.background = "yellow"
        }
        return (
            <button className='cell' style={cellStyle}
                    disabled={!this.props.cellValue.isEnabled}
                    onClick={() => this.props.handleClick(this.props.id)}>{this.props.cellValue.value ?? '-'}</button>
        );
    }

}
export default Cell;