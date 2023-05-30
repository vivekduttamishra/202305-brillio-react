import BookInfo from '../components/book-info.component';
import {SCREEN_BOOK_LIST} from '../consts';



const BookDetailsScreen=({book,navigate})=>{


    return (
        <div >
            <button class='btn text-primary' 
            onClick={()=>navigate(SCREEN_BOOK_LIST)}>Back To List</button>
            <BookInfo book={book} />
        </div>
    );

}

export default BookDetailsScreen;