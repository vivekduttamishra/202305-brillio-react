import {Link} from 'react-router-dom';

const Header = ({title}) => {
    const style={
        backgroundColor:"darkred",
        
    };

    return (
        <nav className="navbar navbar-dark   navbar-expand-lg bg-body-tertiary" style={style} data-bs-theme="dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/books">Books</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/books/add">Add Book</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Authors</a>
                        </li>
                        
                        
                       
                    </ul >
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    
                    <ul className="navbar-nav   mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Membership
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/user/register">Register</a></li>
                                    <li><a className="dropdown-item" href="/user/login">Login</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item disabled" href="#">Logout</a></li>
                                </ul>
                            </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );

}

export default Header;