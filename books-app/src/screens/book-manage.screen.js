import React from 'react';
import _books from '../data/books.json';
import BookInfo from '../components/book-info.component';

const BookManageScreen = ()=>{

    const [selectedBook, setSelectedBook ]= React.useState(null);
    const [books, updateBookList] = React.useState(_books);

    const deleteBook= isbn =>{

        var remainingBooks = books.filter(b=>b.isbn!==isbn);
        updateBookList(remainingBooks);
        setSelectedBook( remainingBooks[0] || null);
    }
    

    return (
        <div >
            <h2>Book Management Console</h2>
            <div className="row">
                <div className="col col-3">
                    <BookList
                        books={books}
                        selectedBook={selectedBook}
                        onSelect={setSelectedBook}
                    />
                </div>

                <div className="col col-9" >
                    <BookInfo
                        book={selectedBook}
                        onDelete={deleteBook}
                    />
                </div>
            </div>
        </div>
    );

}

export default BookManageScreen;