import Footer from './components/footer.component';
import Header from './components/header.component';
import BookListScreen from './screens/book-list.screen';

import 'bootstrap/dist/js/bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = ()=>{

    return (
        <div>
            <Header title="Book's Web" />
            <div className="content">
                <BookListScreen/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;