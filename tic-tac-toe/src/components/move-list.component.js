

const MoveList=({moves})=>{

    return (
        <div className='move-list'>
            <h2>Move List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Move#</th>
                        <th>Player</th>
                        <th>Cell</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        moves.map((move,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{move.player}</td>
                                <td>{move.position}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default MoveList;