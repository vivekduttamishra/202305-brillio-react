import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
import BookDetailsScreen from './screens/book-details.screen';


import 'bootstrap/dist/js/bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import NotFound from './components/not-found.component';


const App = () => {

    return (
        <Router>
            <div>
                <Header title="Book's Web" />
                <div className="content">


                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/books" element={<BookListScreen />} />
                        <Route path="/books/add" element={<BookAddScreen />} />

                        <Route path="/books/details/:isbn" element={<BookDetailsScreen />} />
                        
                        <Route path="/user/login" element={<UserLoginScreen />} />
                        <Route path="/user/register" element={<UserRegisterScreen />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>

                </div>
                <Footer>

                    &copy;  <a href="http://conceptarchitect.in">Concept Architect</a>
                </Footer>
            </div>
        </Router>
    )
}

export default App;