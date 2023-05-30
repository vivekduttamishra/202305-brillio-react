
import BookTile from '../components/book-tile.component';
import books from '../data/books.json';
 


const BookListScreen=(props)=>{

    return (
        <div >
            <h2>Our Recommended {books.length} Books</h2>

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

export default BookListScreen;