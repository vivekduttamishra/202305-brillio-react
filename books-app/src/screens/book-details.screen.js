import BookInfo from '../components/book-info.component';
import If from '../components/if.component';
import {SCREEN_BOOK_LIST} from '../consts';

import NotFound from '../components/not-found.component';


import {useParams,Link} from 'react-router-dom';
import BookService from '../services/async-book-service';




const BookDetailsScreen=()=>{

    var {isbn}=useParams();
    console.log('isbn',isbn);
    
    var service=new BookService();
    var book= service.getBookByIsbn(isbn);

    console.log('book',book);
    
    

    return (
        <div >
            <Link to="/books">Back to List</Link>

                <NotFound visible={book===undefined}
                          title="Book Not Found" 
                          errorMessage={`No Book with ISBN ${isbn} found in our system`}/>

                <BookInfo book={book} visible={book!==undefined} />

        </div>
    );
 
}

export default BookDetailsScreen;