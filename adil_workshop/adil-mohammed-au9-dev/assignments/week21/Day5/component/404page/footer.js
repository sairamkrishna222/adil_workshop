import "./footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <div className="footer" >
      <div className="row">
        <div className="col">
          
        </div>
        <div className="col col1">
          <Link to="/">Why Us</Link><br></br>
          <Link to="/">Contact</Link>
        </div>
        
        <div className="col col2">
          <Link to="/privacypolicy">privacy policies</Link>
          
        </div>
        <div className="col">
          
          
        </div>
      </div>
      <div className="rights">© 2002 - 2020 All rights reserved</div>
      <hr></hr>
      <div className="policy">
        Legal information, legal templates and legal policies are not legal
        advice, <Link to="/privacypolicy">Please read the disclaimer</Link>
      </div>
    </div>
    
  );
};

export default Footer;
