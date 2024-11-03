import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css'; // Optional: Create a CSS file for styles

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT US</Link>
      </nav>
    </div>
  );
};

export default Navbar;
