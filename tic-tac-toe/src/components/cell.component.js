

let Cell=({value})=>{

    var cellStyle={

    };

    if(!value){
        value="_";
        cellStyle.color="transparent";
    }

    return (
        <button className='cell' style={cellStyle} >
           {value}
        </button>
    );
}

export default Cell;