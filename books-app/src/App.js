import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import Header from "./components/header-app.component";
import BookListComponent from "./components/book-list.component";
import Footer from "./components/footer-app.component";
import BookManagetScreen from "./screens/BookManagetScreen";

function App() {
    return (
        <div className="App">
            <Header title="Book's Web"/>
            <div className='content'>
                <BookManagetScreen/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
