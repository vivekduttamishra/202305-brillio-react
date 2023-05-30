import { useState } from 'react';
import Footer from './components/footer.component';
import Header from './components/header.component';
import BookManageScreen from './screens/book-manage.screen';
import BookListScreen from './screens/book-list.screen';
import BookAddScreen from './screens/book-add.screen';
import AuthorListScreen from './screens/author-list.screen';
import AuthorAddScreen from './screens/author-add.screen';
import AuthorDetailsScreen from './screens/author-details.screen';
import UserLoginScreen from './screens/user-login.screen';
import UserRegisterScreen from './screens/user-reigsteration.screen';
import HomeScreen from './screens/home.screen';


import 'bootstrap/dist/js/bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import BookDetailsScreen from './screens/book-details.screen';

import * as Screens from './consts';


const App = () => {

    const [screen, changeScreen] = useState(Screens.SCREEN_BOOK_LIST);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleSelectedBook = book => {
        setSelectedBook(book);
        changeScreen(Screens.SCREEN_BOOK_DETAILS);
    }


    return (
        <div>
            <Header title="Book's Web" />
            <div className="content">

                {screen === Screens.SCREEN_HOME && <HomeScreen />}

                {screen === Screens.SCREEN_BOOK_LIST &&
                    <BookListScreen onSelect={handleSelectedBook} />}

                {screen === Screens.SCREEN_BOOK_DETAILS &&
                    <BookDetailsScreen book={selectedBook} navigate={changeScreen} />}


                {screen === Screens.SCREEN_BOOK_ADD && <BookAddScreen />}


            </div>
            <Footer>

                &copy;  <a href="http://conceptarchitect.in">Concept Architect</a>
            </Footer>
        </div>
    )
}

export default App;