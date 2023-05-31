import { useState } from 'react';

const BookAddScreen = (props) => {


    const [book, setBook] = useState({
        title: "Untitled",
        author: "Unknown",
        isbn: "???"
    });


    const handleChange = (event) => {
        var newBook={...book};
        newBook[event.target.id] = event.target.value;
        setBook(newBook)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //don't send form to the server
        console.log('saving', book);
    }



   

    return (
        <div >
            <h2>Add New Book</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='isbn'>ISBN</label>
                    <input className="form-control" id="isbn" value={book.isbn} onChange={handleChange} placeholder="ISBN" />
                    <small className="form-text text-muted">Enter ISBN number</small>
                </div>
                <div className="form-group">
                    <label htmlFor='isbn'>Title</label>
                    <input className="form-control" id="title" value={book.title} onChange={handleChange} placeholder="Title" />
                    <small className="form-text text-muted">Enter Book Title</small>
                </div>
                <div className="form-group">
                    <label htmlFor='isbn'>Author</label>
                    <input className="form-control" id="author" value={book.author} onChange={handleChange} placeholder="Author" />
                    <small className="form-text text-muted">Enter Author Name</small>
                </div>

                <button type="submit" className="btn btn-primary">Save Book</button>
            </form>
        </div>
    );

}

export default BookAddScreen;