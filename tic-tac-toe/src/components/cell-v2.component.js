import React from 'react';


class Cell extends React.Component {
    state={
        value:null
    }

    handleClick=()=>{

        var newValue= this.state.value==='O'?'X':'O';

        this.setState({value:newValue});

        console.log('this.state.value',this.state.value);
        console.log('newValue',newValue);
    }

    render(){

        var cellStyle={};
        
        if(!this.state.value){        
            cellStyle.color="transparent";
        }

        return (
            <button className="cell" style={cellStyle}
                onClick={this.handleClick}
            >
                {this.state.value??"_"}
            </button>
        )
        
    }

    
}



export default Cell;