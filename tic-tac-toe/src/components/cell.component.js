import React from 'react';

class Cell extends React.Component {

    render() {
        console.log('Rendering cell ', this.props.id);
        console.log('hadnleClick : ', this.props.handleClick);
        var cellStyle = {};

        if (!this.props.value) {
            // value = '-';
            cellStyle.color = "transparent";
        } else {
            if(this.props.value === 'X')
                cellStyle.background = "green"
            else
                cellStyle.background = "yellow"
        }
        return (
            <button className='cell' style={cellStyle}
                    onClick={() => this.props.handleClick(this.props.id)}>{this.props.value ?? '-'}</button>
        );
    }

}
export default Cell;