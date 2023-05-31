import { useState, useEffect } from 'react';
import BookTile from '../components/book-tile.component';

import withBorder from '../hoc/border.hoc';
import withVisibility from '../hoc/visibility.hoc';

import { Link } from 'react-router-dom';
import If from '../components/if.component';
import LoadingAnimation from '../components/loading.component';

import BookService from '../services/async-book-service';

const BookListScreen = (props) => {


    const [books, setBooks] = useState(null);
    const [bookFetched, setBookFetched] = useState(false);

    useEffect(() => {

        console.log(new Date().toLocaleTimeString(), "use effect called...");

        async function getAllBooks() {
            var service = new BookService();
            var books = await service.getAllBooks();
            setBooks(books);
        }

        getAllBooks();


    }, [bookFetched]);

    console.log(new Date().toLocaleTimeString(), 'list screen rendered with books=', books);

    if(!books){
        return <LoadingAnimation />;
    }


    return (
        <div >

            <If condition={books!==null} >
                <>
                    <h2>Our Recommended {books.length} Books</h2>
                    <Link to="/books/add">Add New Book</Link>
                    <div className="row">

                        {
                            books.map(book => (
                                <div key={book.isbn}
                                    className="book-info-tile-link col col-lg-2 col-md-3 col-xs-1 col-sm-4 col-6">

                                    <Link to={'/books/details/' + book.isbn}>
                                        <BookTile book={book} />
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                </>
            </If>

        </div >
    );


}

export default withVisibility(withBorder(BookListScreen));