import BookInfo from '../components/book-info.component';
import {SCREEN_BOOK_LIST} from '../consts';



const BookDetailsScreen=({book})=>{


    return (
        <div >
            <button class='btn text-primary' >Back To List</button>
            <BookInfo book={book} />
        </div>
    );

}

export default BookDetailsScreen;