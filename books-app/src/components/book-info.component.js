

const BookInfo = ({book}) => {
    
    var style={
        width: "100%"
    }


    return (
        <div className="card" style={style} >
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">by {book.author}</h6>
                <div className='row'>
                    <div className='col-6 details-info-column'>

                        <ul>
                            <li>Price: ₹{book.price}</li>
                            <li>Rating: {book.rating} ({book.votes} votes)</li>
                            <li>Pages: {book.pages}</li>
                        </ul>

                    </div>
                    <div className='col-6 details-image-column'>
                        <img src={book.cover} alt={book.title} title={book.title} className='details-image' />
                        <a href="#" className="card-link text-danger">Delete</a>
                    </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                
                <p className="card-text">{book.description}</p>
                
                
            </div>
        </div>
    );

}

export default BookInfo;