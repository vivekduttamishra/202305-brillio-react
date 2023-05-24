import React from 'react';



function Cell({id,value,onCellClicked}) {

    var cellStyle = {};

    if (!value) {
        cellStyle.color = "transparent";
    }

    return (
        <button className="cell" style={cellStyle}
            onClick={() => onCellClicked(id)}
        >
            {value ?? "_"}
        </button>
    )

}




export default Cell;