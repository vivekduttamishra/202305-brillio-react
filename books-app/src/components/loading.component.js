import withVisibility from "../hoc/visibility.hoc";


const LoaderAnimation=({loadingImage='/images/loading.gif',
                        title="please wait..."})=>{

    return (
        <div className='loading'>
           <img src={loadingImage} alt={title} title={title}/>
           <span>{title}</span>
        </div>
    );

}

export default withVisibility(LoaderAnimation);