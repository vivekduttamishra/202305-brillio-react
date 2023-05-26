
import books from '../data/books.json';
 


const BookListScreen=(props)=>{

    return (
        <div >
            <h2>Our Recommended {books.length} Books</h2>

            <ul>
                {
                    books.map(book=>(
                            <li key={book.isbn}>{book.title}</li>
                            ))
                }
            </ul>
            
        </div>
    );

}

export default BookListScreen;