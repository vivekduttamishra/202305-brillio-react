import Board from './board.component';
import Status from './status.component';
import Reset from './reset.component';

let Game = (props)=>{

    return (
        <div className='game'>
            <Status/>
            <Board/>
            <Reset/>
        </div>
    )
}

export default Game;