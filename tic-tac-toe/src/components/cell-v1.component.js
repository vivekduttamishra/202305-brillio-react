

let Cell=({value})=>{

    value=null;
   

    var cellStyle={

    };

    if(!value){
        value="_";
        cellStyle.color="transparent";
    }

    const handleClick=()=>{

        value= value==='O'?'X':'O';

        console.log('value changed to',value);
        
    }

    return (
        <button className='cell' style={cellStyle}       
            onClick={handleClick}
        >
           {value}
        </button>
    );
}

export default Cell;