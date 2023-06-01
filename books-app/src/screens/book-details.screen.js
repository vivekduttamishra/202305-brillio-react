import { useEffect, useState } from 'react';

import BookInfo from '../components/book-info.component';
import If from '../components/if.component';
import { SCREEN_BOOK_LIST } from '../consts';

import NotFound from '../components/not-found.component';


import { useParams, Link } from 'react-router-dom';
import LoadingAnimation from '../components/loading.component';
import BookService from '../services/async-book-service';




const BookDetailsScreen = () => {

    var { isbn } = useParams();
    var [book, setBook] = useState(null);
    var [error, setError] = useState(null);

    useEffect(() => {

        var service = new BookService();
        service
            .getBookByIsbn(isbn)
            .then(setBook)
            .catch(setError);

    }, [isbn]);

    if (error)
        return (

            <NotFound
                title="Book Not Found"
                errorMessage={`No Book with ISBN ${isbn} found in our system`} />

        )

    if (book === null)
        return <LoadingAnimation title={`Searching book with isbn "${isbn}"`} />


    return (
        <div >
            <Link to="/books">Back to List</Link>



            <BookInfo book={book} visible={book !== undefined} />

        </div>
    );

}

export default BookDetailsScreen;