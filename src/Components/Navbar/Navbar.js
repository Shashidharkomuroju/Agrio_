import "./Navbar.css"
import Logo from "../../assets/Logo.png"
import {Link} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";

const Navbar = () => {

  return (
    <nav>
        <div>   
            <img src={Logo} alt="Logo" />
        </div>
        <div className="menu">
            <Link to="/agrio">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>
            <Link>Project</Link>
            <Link>News</Link>
            <Link>Shop</Link>
            <Link>Contact</Link>
        </div>
        <div className="cart">
        <Link to="/cart"><FaShoppingCart size={25}/></Link>
        </div>
    </nav>
  )
}

export default Navbar