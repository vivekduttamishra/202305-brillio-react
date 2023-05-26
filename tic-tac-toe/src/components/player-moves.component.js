import React from 'react';
import Cell from "./cell.component";

class PlayerMoves extends React.Component {

    render() {
        if (this.props.playerMoves.length == 0) {
            return '';
        }
        return (<div className='move-list'>
                <table border='5'>
                    <thead>
                    <tr>
                        <th>Moves No</th>
                        <th>Player</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.playerMoves.map((value, index) => {
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{value.player}</td>
                            <td>{value.position + 1}</td>
                        </tr>

                    })}
                    </tbody>
                </table>
            </div>
        );

    }
}

export default PlayerMoves;