
import BookTile from '../components/book-tile.component';
import books from '../data/books.json';
import withBorder from '../hoc/border.hoc';
import withVisibility from '../hoc/visibility.hoc';

import {Link} from 'react-router-dom';



const BookListScreen=(props)=>{

    return (
        <div >
            <h2>Our Recommended {books.length} Books</h2>
            <Link to="/books/add">Add New Book</Link>
            <div className="row">
                
                {
                    books.map(book=>(
                        <div key={book.isbn}
                            className="col col-lg-2 col-md-3 col-xs-1 col-sm-4 col-6">
                            <BookTile book={book} />  
                        </div>
                    ))
                }

            </div>
            
        </div>
    );

}

export default withVisibility(  withBorder( BookListScreen) ) ;