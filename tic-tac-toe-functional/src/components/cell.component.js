import React from 'react';



function Cell({id,value, winner, completed, onCellClicked}) {

    var borders=[
        "b_right b_bottom",
        "b_left b_right b_bottom",
        "b_left  b_bottom",

        "b_top b_right  b_bottom",
        "b_left b_top b_right b_bottom",
        "b_left b_top b_bottom",

        "b_top b_right",
        "b_left b_top b_right",
        "b_left b_top",
        
    ];

    var cellClasses="cell "+borders[id];


    var cellStyle = {};

    if(winner)
    cellStyle.backgroundColor = "lime";


    var eventHandler=null;

    if(value || completed){
        cellStyle.cursor="not-allowed";
        eventHandler=null;
    } else {
       
        cellStyle.cursor="pointer";
        eventHandler=() => onCellClicked(id);
    } 

    if(!value)
        cellStyle.color = "transparent";

   
    return (
        <button className={cellClasses} style={cellStyle}
            onClick={eventHandler}
            
        >
            {value ?? "_"}
        </button>
    )

}




export default Cell;