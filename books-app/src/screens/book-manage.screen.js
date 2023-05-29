
import _books from '../data/books.json';
import BookList from '../components/book-list.component';
import BookInfo from '../components/book-info.component';
 


const BookManageScreen=(props)=>{

    var books=_books;

    return (
        <div >
            <h2>Book Management Console</h2>
            <div className="row">
                <div className="col col-3">
                    <BookList books={books}/>
                </div>

                <div className="col col-9" >
                    <BookInfo book={books[0]} />
                </div>
            </div>
        </div>
    );

}

export default BookManageScreen;