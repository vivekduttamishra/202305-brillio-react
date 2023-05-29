import Footer from './components/footer.component';
import Header from './components/header.component';

import 'bootstrap/dist/js/bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import BookListScreen from './screens/book-list-v2.screen';
import BookManageScreen from './screens/book-manage-v2.screen';

const App = ()=>{

    return (
        <div>
            <Header title="Book's Web" />
            <div className="content">
                <BookManageScreen/>
                {/* <BookListScreen/> */}
            </div>
            <Footer/>
        </div>
    )
}

export default App;