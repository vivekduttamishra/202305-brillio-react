import AppHeader from './components/app-header.component';
import Game from './components/game.component';
import './app.css';

function App(){

    return (
            <div className="app">
                <AppHeader title="Tic Tac Toe" />
                <Game/>
            </div>
        );
}

export default App;