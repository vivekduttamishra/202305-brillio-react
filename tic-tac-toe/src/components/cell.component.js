import React from 'react';

class Cell extends React.Component {

    render() {
        var cellStyle = {};
        if (!this.props.cellValue.value) {
            // value = '-';
            cellStyle.color = "transparent";
        } else {
            if (this.props.cellValue.isWinner) {
                cellStyle.background = 'red';
                // cellStyle.animation = "blinkingBackground 2s infinite";
            } else if (this.props.cellValue.value === 'X')
                cellStyle.background = "green"
            else {
                cellStyle.background = "yellow"
            }
        }
        return (
            <button style={cellStyle}
                    disabled={this.props.cellValue.isDisabled}
                    onClick={() => this.props.handleClick(this.props.id)}
                    className={'cell ' + this.props.borders[this.props.id]}
            >
                {this.props.cellValue.value ?? '-'}
            </button>
        );
    }

}

export default Cell;