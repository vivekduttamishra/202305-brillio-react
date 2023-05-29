
const ScoreBoard=({matches,O,X,draw})=>{

    return (
        <div className="scoreboard">
            <h2>Score Board</h2>    
            <table>
                <thead>
                    <tr>
                        <th>Matches</th>
                        <th>O Wins</th>
                        <th>X Wins</th>
                        <th>Draw</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{matches}</td>
                    <td>{O}</td>
                    <td>{X}</td>
                    <td>{draw}</td>
                    </tr>
                </tbody>
            </table>       
        </div>
    );

}

export default ScoreBoard;