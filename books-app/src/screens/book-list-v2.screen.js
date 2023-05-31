import {useState,Component} from 'react';
import BookTile from '../components/book-tile.component';

import withBorder from '../hoc/border.hoc';
import withVisibility from '../hoc/visibility.hoc';

import {Link} from 'react-router-dom';

import BookService from '../services/async-book-service';


class BookListScreen extends Component {

    state={
        books:null
    }

    componentDidMount= ()=>{
        var service=new BookService();
        console.log('fetching the books');
        service
            .getAllBooks()
            .then(books=>this.setState({books}));
    }

    render=()=>{

        
        var {books}= this.state;

        console.log('rendering book list screen...',books);

        if(!books){
            return <h4>Please wait while we load the books...</h4>;
        }
    
        return (
            <div >
                <h2>Our Recommended {books.length} Books</h2>
                <Link to="/books/add">Add New Book</Link>
                <div className="row">
                    
                    {
                        books.map(book=>(
                            <div key={book.isbn}
                                className="book-info-tile-link col col-lg-2 col-md-3 col-xs-1 col-sm-4 col-6">
    
                                <Link to={'/books/details/'+book.isbn}>
                                    <BookTile book={book} />  
                                </Link>
    
                            </div>
                        ))
                    }
    
                </div>
                
            </div>
        );
    }

}


export default withVisibility(  withBorder( BookListScreen) ) ;