import withVisibility from "../hoc/visibility.hoc";


const NotFound=({title="Not Found",errorMessage="Resource Not Found"})=>{

    return (
        <div className='not-found'>
            <h2 className="text-danger">{title}</h2>
            <img src="/images/404.png" title="Not Found" alt="Not Found" 
                    className="not-found-image" />
            <p className="text-danger">{errorMessage}</p>
        </div>
    );

}

export default withVisibility( NotFound );