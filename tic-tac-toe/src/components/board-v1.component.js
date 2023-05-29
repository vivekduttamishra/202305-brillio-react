import Cell from './cell.component';

let Board=(props)=>{

    return (
        <div className='board'>
           <Cell value="O"/>
           <Cell value="X"/>
           <Cell />
           
           <Cell />
           <Cell />
           <Cell value="X"/>
           
           <Cell value="O"/>
           <Cell />
           <Cell value="O"/>
           

        </div>
    );
}

export default Board;