import React from 'react';

class Cell extends React.Component {

    state = {
        value: null
    }

    render() {

        var cellStyle = {};

        if (!this.state.value) {
            // value = '-';
            cellStyle.color = "transparent";
        }

        let handleClick = () => {
            let newValue = this.state.value === 'O' ? 'X' : 'O';
            this.setState({value: newValue});
            console.log('new vale is ', newValue);
            // window.alert("");
            // if (t)
        };

        return (
            <button className='cell' style={cellStyle} onClick={handleClick}>{this.state.value??'-'}</button>
        );
    }

}

/*let Cell = ({value}) => {

    var cellStyle = {};

    if (!value) {
        value = '-';
        cellStyle.color = "transparent";
    }

    let onclick = () => {
        // window.alert("");
        // if (t)
    }

    return (
        <button className='cell' style={cellStyle} onClick={onclick}>{value}</button>
    );
}*/

export default Cell;