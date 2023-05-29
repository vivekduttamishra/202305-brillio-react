
const BookListScreen = ({books, onSelect}) => {
    var style = {
        width: "28%",
        margin:'2%',
        // alignItems: 'center'
    }

    var classDivStyle={
        display:'flex',
        flexWrap:'wrap'
    }

    return (
        <div >
            <h2>Books List</h2>
            <div className='listDiv' style={classDivStyle}>
            {
                books.map(book => (
                    <button key={book.isbn} style={{
                        width : 'fit-content',
                        display: 'contents'}}
                        onClick={()=>onSelect(book)}>
                        <div className="card" style={style} >
                            <div className="card-body">
                                <div>
                                    <img src={book.cover} alt={book.title} title={book.title} className='details-image' />
                                </div>
                                <div>
                                    <h5 className="card-title">{book.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">by {book.author}</h6>
                                </div>
                            </div>
                        </div>
                    </button>
                ))
            }
            </div>

        </div>
    );

}

export default BookListScreen;