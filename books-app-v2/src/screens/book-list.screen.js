
import BookTile from '../components/book-tile.component';

import withBorder from '../hoc/border.hoc';
import withVisibility from '../hoc/visibility.hoc';

import {Link} from 'react-router-dom';

import BookService from '../services/simple-book-service';

const BookListScreen=(props)=>{

    var service=new BookService();
    var books=service.getAllBooks();

    return (
        <div >
            <h2>Our Recommended {books.length} Books</h2>
            <Link to="/books/add">Add New Book</Link>
            <div className="row">
                
                {
                    books.map(book=>(
                        <div key={book.isbn}
                            className="book-info-tile-link col col-lg-2 col-md-3 col-xs-1 col-sm-4 col-6">

                            <Link to={'/books/details/'+book.isbn}>
                                <BookTile book={book} />  
                            </Link>

                        </div>
                    ))
                }

            </div>
            
        </div>
    );

}

export default withVisibility(  withBorder( BookListScreen) ) ;