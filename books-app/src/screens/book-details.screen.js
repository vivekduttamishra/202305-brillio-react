import BookInfo from '../components/book-info.component';
import books from '../data/books.json';


const BookDetailsScreen=(props)=>{

    var book=books[0];

    return (
        <div >
            <BookInfo book={book} />
        </div>
    );

}

export default BookDetailsScreen;