import React from 'react';

class ScoreBoard extends React.Component {

    render() {
        return (<div>
            <h2> Win count</h2>
            <table border='5'>
                <tbody>
                <tr>
                    <td>total</td>
                    <td>Player X</td>
                    <td>Player O</td>
                    <td>Draws</td>
                </tr>
                <tr>
                    <td>{this.props.scoreboard.draw}</td>
                    <td>{this.props.scoreboard.playerX}</td>
                    <td>{this.props.scoreboard.playerO}</td>
                    <td>{this.props.scoreboard.draw}</td>
                </tr>
                </tbody>

            </table>
        </div>
    );

    }
    }

    export default ScoreBoard;