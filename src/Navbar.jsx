import { Link } from "react-router-dom";
import './styles.css'
const Navbar = () => {

  return (
    <nav className="navbar">
        <h1>Machanical Industries</h1>
        <div>
          <Link to="/">Projects</Link>
          <Link to="/Industries served ">Industries Served</Link>
          <Link to="service">Service</Link>
 
        </div>
      </nav>
  );
};

export default Navbar;
