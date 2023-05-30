import withBorder from "../hoc/border.hoc";


const BookTile = ({book}) => {

    if(!book) return <h2>No Book</h2>;

    return (
        <div className="card book-tile" >
            <img src={book.cover} className="card-img-top" alt={book.cover}/>
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle">by {book.author}</h6>
                    <p/>
                    <div className="text-muted text-sm">
                        <p>Rating: {book.rating}/5</p>
                        <p>Price: ₹{book.price}</p>
                    </div>
                                       
                </div>
        </div>
    );

}

export default withBorder( BookTile) ;