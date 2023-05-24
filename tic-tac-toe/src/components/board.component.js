import Cell from "./cell.component";

let Board = (props) => {
    return (
        <div className='board'>
            <Cell value="O"/>
            <Cell/>
            <Cell/>

            <Cell/>
            <Cell/>
            <Cell/>

            <Cell/>
            <Cell/>
            <Cell/>
        </div>
    );

}

export default Board;