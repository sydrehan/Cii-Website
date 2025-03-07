import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
  return (
    <div className="w-3/5 mx-auto pt-[2vh] pb-[2vh] mt-[5vh] text-center text-2xl"> {/* Tailwind for navbar wrapper */}
      <nav className="flex justify-center space-x-4">
        <Link 
          to="/" 
          className="text-black  px-6 py-4 font-sans transition duration-200 ease-in-out hover:bg-gray-200 "
        >
          HOME
        </Link>
        <Link 
          to="/about" 
          className="text-black  px-6 py-4 font-sans transition duration-200 ease-in-out hover:bg-gray-200 "
        >
          ABOUT
        </Link>
        <Link 
          to="/projects" 
          className="text-black  px-6 py-4 font-sans transition duration-200 ease-in-out hover:bg-gray-200 "
        >
          PROJECTS
        </Link>
        <Link 
          to="/contact" 
          className="text-black  px-6 py-4 font-sans transition duration-200 ease-in-out hover:bg-gray-200 "
        >
          CONTACT US
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
