import Header from "./header-app.component";
import React from 'react'

class BookListComponent extends React.Component {

    render() {
        return (
            <div>
                <h2>Our Recommended Books</h2>
                <p>Here you will find out favourite books</p>
                <div className='list-group'>
                    {
                        this.props.books.map((book, index) => <button
                            className='list-group-item list-group-item-action'>{book.name}</button>)
                    }
                </div>
            </div>
        );
    }
}

export default BookListComponent;