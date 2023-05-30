import Header from "../components/header-app.component";
import React from 'react'
import BookListComponent from "../components/book-list.component";
import BookInfoComponent from "../components/book-Info.component";

class BookListScreen extends React.Component {

    state = {
        books: [
            {
                name: 'book 1',
                price: 400,
                rating: 4.5,
                description: "This will be the overview",
                pages : 100
            },
            {
                name: 'book 2',
                price: 400,
                rating: 4.5,
                description: "This will be the overview",
                pages : 100
            },
            {
                name: 'book 2',
                price: 400,
                rating: 4.5,
                description: "This will be the overview",
                pages : 100
            },
            {
                name: 'book 2',
                price: 400,
                rating: 4.5,
                description: "This will be the overview",
                pages : 100
            },
            {
                name: 'book 5',
                price: 400,
                rating: 4.5,
                description: "This will be the overview",
                pages : 100
            }
        ]
    }

    render() {
        return (
            <div>
                <h2>Book Management Console</h2>
                <div className='row'>
                    <div className='col col-3'>
                        <BookListComponent books={this.state.books}/>
                    </div>

                    <div className='col col-9'>
                        <BookInfoComponent book={this.state.books[0]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookListScreen;