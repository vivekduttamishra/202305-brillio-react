import React from 'react';
import _books from '../data/books.json';
import BookList from '../components/book-list.component';
import BookInfo from '../components/book-info.component';
 
class BookManageScreen extends React.Component{
    state={
        selectedBook:null
    }
    selectBook= book=>{
        this.setState({selectedBook:book});
    }

    render(){

        var books=_books;

        return (
            <div >
                <h2>Book Management Console</h2>
                <div className="row">
                    <div className="col col-3">
                        <BookList 
                            books={books}
                            selectedBook={this.state.selectedBook}
                            onSelect={this.selectBook}
                            />
                    </div>
    
                    <div className="col col-9" >
                        <BookInfo 
                            book={this.state.selectedBook} 
                        />
                    </div>
                </div>
            </div>
        );       

    }
}



export default BookManageScreen;