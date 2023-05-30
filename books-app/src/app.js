import Footer from './components/footer.component';
import Header from './components/header.component';
import BookManageScreen from './screens/book-manage.screen';

import 'bootstrap/dist/js/bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import BookListScreen from './screens/book-list.screen';
import BookDetailsScreen from './screens/book-details.screen';

const App = ()=>{

    return (
        <div>
            <Header title="Book's Web" />
            <div className="content">
                <BookDetailsScreen/>
                
            </div>
            <Footer>

                &copy;  <a href="http://conceptarchitect.in">Concept Architect</a>
            </Footer>
        </div>
    )
}

export default App;