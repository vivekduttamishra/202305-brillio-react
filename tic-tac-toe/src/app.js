import React from 'react';
import AppHeader from './components/app-header.component';
import Game from './components/game.component';
import Clock from './components/clock.component';
import './app.css';

class App extends React.Component {

    state = {
        showClock: true
    }

    handleToggle=()=>{
        this.setState({showClock: !this.state.showClock});
    }

    render() {
        return (
            <div className="app">
                <AppHeader title="Tic Tac Toe" />
                <div>
                    { this.state.showClock && <Clock /> }
                    <button onClick={this.handleToggle} >Toggle Clock</button>
                </div>
                <Game />
            </div>
        );
    }
}

export default App;