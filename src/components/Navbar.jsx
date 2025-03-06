import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
  return (
    <div className="w-3/5 mx-auto pt-[8vh] pb-[8vh] text-center"> {/* Tailwind for navbar wrapper */}
      <nav className="flex justify-center space-x-4">
        <Link 
          to="/" 
          className="text-black text-lg px-4 py-2 font-sans transition duration-200 ease-in-out hover:bg-gray-200 rounded-md"
        >
          HOME
        </Link>
        <Link 
          to="/about" 
          className="text-black text-lg px-4 py-2 font-sans transition duration-200 ease-in-out hover:bg-gray-200 rounded-md"
        >
          ABOUT
        </Link>
        <Link 
          to="/projects" 
          className="text-black text-lg px-4 py-2 font-sans transition duration-200 ease-in-out hover:bg-gray-200 rounded-md"
        >
          PROJECTS
        </Link>
        <Link 
          to="/contact" 
          className="text-black text-lg px-4 py-2 font-sans transition duration-200 ease-in-out hover:bg-gray-200 rounded-md"
        >
          CONTACT US
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
