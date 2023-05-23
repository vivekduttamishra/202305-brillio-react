import Status from "./status.component";
import Board from "./board.component";
import Reset from "./reset.component";

let Game = (props) => {
    return (
        <div className='game'>
            <Status/>
            <Board/>
            <Reset/>
        </div>
    );

}

export default Game;