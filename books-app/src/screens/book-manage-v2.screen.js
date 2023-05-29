import React from 'react';
import _books from '../data/books.json';
import BookInfo from '../components/book-info.component';
import BookListScreen from './book-list-v2.screen';

const BookManageScreen = () => {

    const [selectedBook, setSelectedBook] = React.useState(null);
    const [books, updateBookList] = React.useState(_books);

    var back="<<< Book List"

    const deleteBook = isbn => {
        var remainingBooks = books.filter(b => b.isbn !== isbn);
        updateBookList(remainingBooks);
        setSelectedBook(remainingBooks[0] || null);
    }

    const backHandler=()=>{
        setSelectedBook(null)
    }


    return (
        <div >
            {!selectedBook && <div className="bookList">
                <BookListScreen
                    books={books}
                    onSelect={setSelectedBook}
                />
            </div>}

            {selectedBook && <div className="bookDetails" >
                <BookInfo
                    book={selectedBook}
                    onDelete={deleteBook}
                />
                <span className='backClick' onClick={()=>{backHandler()}}>{back}</span>
            </div>}
        </div>
    );

}



export default BookManageScreen;