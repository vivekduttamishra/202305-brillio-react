

const BookList=({books, onSelect, selectedBook}) => {

    const getClasses=(currentBook)=>{
        var coreClasses="list-group-item list-group-item-action";

        if(currentBook===selectedBook)
            coreClasses+=" active";

        return coreClasses
        
    }

    return (
        <div >
            
            <div className='list-group'>
                {
                    books.map(book=>(
                        <button key={book.isbn}  
                            className={getClasses(book)}
                            onClick={()=>onSelect(book)}
                        >
                            {book.title}
                        </button>
                    ))
                }
            </div>
        </div>
    );

}

export default BookList;