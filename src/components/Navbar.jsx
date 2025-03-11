import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const Navbar = () => {
  const location = useLocation(); // Get current path

  return (
    <div className="w-3/5 mx-auto pt-[2vh] pb-[2vh] mt-[5vh] text-center text-2xl">
      <nav className="flex justify-center space-x-4">
        <Link 
          to="/" 
          className={`px-6 py-4 font-sans transition duration-200 ease-in-out hover:bg-gray-200 
          ${location.pathname === '/' ? 'bg-gray-200' : 'text-black'}`}
        >
          HOME
        </Link>
        <Link 
          to="/about" 
          className={`px-6 py-4 font-sans transition duration-200 ease-in-out hover:bg-gray-200 
          ${location.pathname === '/about' ? 'bg-gray-200' : 'text-black'}`}
        >
          ABOUT
        </Link>
        <Link 
          to="/projects" 
          className={`px-6 py-4 font-sans transition duration-200 ease-in-out hover:bg-gray-200 
          ${location.pathname === '/projects' ? 'bg-gray-200' : 'text-black'}`}
        >
          PROJECTS
        </Link>
        <Link 
          to="/contact" 
          className={`px-6 py-4 font-sans transition duration-200 ease-in-out hover:bg-gray-200 
          ${location.pathname === '/contact' ? 'bg-gray-200' : 'text-black'}`}
        >
          CONTACT US
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
