import './Header.css';
import {Link} from 'react-router-dom';

const Header = (props)=>{
    return(
        <div className="header">
            <Link to="/" className="logo">Home</Link>
            <div className="header-right">
                <Link className="active" to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/privacy">Privacy Policies</Link>
            </div>
        </div>
    );
};

export default Header;