import { useState } from 'react';
import Input from '../components/input.component';

const BookAddScreen = (props) => {


    const [book, setBook] = useState({
        title: "",
        author: "",
        isbn: "",
        price:"",
        cover:"",
        description:"",
        tags:""
    });


   
    const handleSubmit = (event) => {
        event.preventDefault(); //don't send form to the server
        console.log('saving', book);
    }

    const handleChange=(value,id)=>{
        setBook({...book, 
            [id]:value
        });
    }
    


   

    return (
        <div >
            <h2>Add New Book</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='isbn'>ISBN</label>
                    <input className="form-control" id="isbn" value={book.isbn} onChange={_handleChange} placeholder="ISBN" />
                    <small className="form-text text-muted">Enter ISBN number</small>
                </div>
                <div className="form-group">
                    <label htmlFor='isbn'>Title</label>
                    <input className="form-control" id="title" value={book.title} onChange={_handleChange} placeholder="Title" />
                    <small className="form-text text-muted">Enter Book Title</small>
                </div>
                <div className="form-group">
                    <label htmlFor='isbn'>Author</label>
                    <input className="form-control" id="author" value={book.author} onChange={_handleChange} placeholder="Author" />
                    <small className="form-text text-muted">Enter Author Name</small>
                </div>

                <Input id="price" label="Price" value={book.price} onChange={handleChange} />

                <button type="submit" className="btn btn-primary">Save Book</button>
            </form>
        </div>
    );

}

export default BookAddScreen;