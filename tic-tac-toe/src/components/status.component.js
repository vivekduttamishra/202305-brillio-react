let Status = (props) => {
    let message = '';
    console.log('Game status is ', props.gameStatus);
    if (props.gameStatus === 'Player Turn : ') {
        message = props.gameStatus + props.currentPlayer
    } else {
        message = props.gameStatus;
    }
    return (
        <div className='status'>
            <h2>{message}</h2>
        </div>
    );

}

export default Status;