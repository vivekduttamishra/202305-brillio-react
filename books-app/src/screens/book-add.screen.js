import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


import Input from '../components/input.component';
import {delay} from '../utils/delay';
import BookService from '../services/async-book-service';



var service=new BookService();
 
const BookAddScreen = (props) => {


    const [book, setBook] = useState({
        title: "",
        author: "",
        isbn: "",
        price: "",
        cover: "",
        rating:"",
        description: "",
        tags: ""
    });

    const [message, setMessage]=useState("");
    const [errors, setErrors]=useState([]);

    var navigate = useNavigate(); //get a navigatore



    
    


    const validate = ()=>{
        var errors=[];
        if(!book.isbn)
            errors.push("ISBN Required");
        if(!book.title)
            errors.push("Title Required");
        if(!book.author)
            errors.push("Author Required");
        if(book.price && book.price<0)
            errors.push("Price must not be negative");
        if(book.rating && (book.rating<1 || book.rating>5))
            errors.push("Rating must be between 1 and 5");

        setErrors(errors);
        if(errors.length)
            setMessage("There are validation errors");

        return errors;
        
    }


    const handleSubmit = async (event) => {
        event.preventDefault(); //don't send form to the server
        setMessage("Adding the book");
        //run a basic validation
        
        var _errors=validate();
        if(_errors.length)
            return ; //no need to save
        try{

            await service.addBook(book)
            setMessage("Book Added");
            // var books= await service.getAllBooks();
            // console.log('books',books);
            navigate("/books");
            
        } catch(e){
           setMessage(e.message) ;
           setErrors([e.message]);
        }
    }

    const handleChange = (value, id) => {
        setBook({
            ...book,
            [id]: value
        });
    }





    return (
        <div >
            <h2>Add New Book</h2>

            <ul className="text-danger">
                {
                    errors.map((error,i)=><li key={i}>{error}</li> )
                }
            </ul>

            <form onSubmit={handleSubmit}>

                <Input id="isbn" value={book.isbn} onChange={handleChange}
                    label="ISBN" />

                <Input id="title" value={book.title} onChange={handleChange}
                    label="Title" />

                <Input id="author" value={book.author} onChange={handleChange}
                    label="Author Name" />

                <Input id="cover" value={book.cover} onChange={handleChange}
                    label="Cover Page URL" />

                <div className="row">
                    <div className="col col-6">
                        <Input id="price" value={book.price} onChange={handleChange}
                            label="Price" />
                    </div>
                    <div className="col col-6">
                        <Input id="rating" value={book.rating} onChange={handleChange}
                            label="Rating" />
                    </div>
                </div>

                <Input id="description" value={book.description} onChange={handleChange}
                    label="Description" />


                <button type="submit" className="btn btn-primary">Save Book</button>
                <span className="message"> {message}</span>
            </form>
        </div>
    );

}

export default BookAddScreen;