import React from 'react';
import _books from '../data/books.json';
import BookList from '../components/book-list.component';
import BookInfo from '../components/book-info.component';
 
class BookManageScreen extends React.Component{
    state={
        selectedBook:null,
        books:_books
    }

    selectBook= book=>{
        this.setState({selectedBook:book});
    }

    deleteBook= (isbn) =>{
        var remainingBooks = this.state.books.filter(b=>b.isbn!==isbn);
        var selectedBook= remainingBooks[0] || null;
        this.setState({selectedBook, books:remainingBooks});
    }

    render(){

        var books=_books;

        return (
            <div >
                <h2>Book Management Console</h2>
                <div className="row">
                    <div className="col col-3">
                        <BookList 
                            books={this.state.books}
                            selectedBook={this.state.selectedBook}
                            onSelect={this.selectBook}
                            />
                    </div>
    
                    <div className="col col-9" >
                        <BookInfo 
                            book={this.state.selectedBook} 
                            onDelete={this.deleteBook}
                        />
                    </div>
                </div>
            </div>
        );       

    }
}



export default BookManageScreen;