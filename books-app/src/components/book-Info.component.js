const BookInfoComponent = (props) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{props.book.name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{props.book.author}</h6>

                <div className='row'>
                    <div className='col-6 detail-info-column'>
                        <ul>
                            <li>Price : {props.book.price}</li>
                            <li>Rating : {props.book.rating}</li>
                            <li>Pages : {props.book.pages}</li>
                        </ul>
                    </div>
                    <div className='col-6 detail-image-column'>
                        <img className='detail-image' src={props.book.cover} alt={props.book.name}
                             title={props.book.name}/>
                        <a href='#' className='card-link text-danger align-center'>Delete</a>
                    </div>
                </div>

                <h6 className='card-subtitle mb-2 text-muted'>Description</h6>
                <p className='card-text'>{props.book.description}</p>
            </div>

        </div>
    )
}

export default BookInfoComponent