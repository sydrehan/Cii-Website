import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
  return (
    <div className="w-3/5 mx-auto pt-[8vh] pb-[8vh] text-center"> {/* Tailwind for navbar wrapper */}
      <nav>
        <Link 
          to="/" 
          className="text-black text-[20px] px-4 py-3 font-montserrat transition duration-200 ease-in-out hover:bg-gray-200"
        >
          HOME
        </Link>
        <Link 
          to="/about" 
          className="text-black text-[20px] px-4 py-3 font-montserrat transition duration-200 ease-in-out hover:bg-gray-200"
        >
          ABOUT
        </Link>
        <Link 
          to="/projects" 
          className="text-black text-[20px] px-4 py-3 font-montserrat transition duration-200 ease-in-out hover:bg-gray-200"
        >
          PROJECTS
        </Link>
        <Link 
          to="/contact" 
          className="text-black text-[20px] px-4 py-3 font-montserrat transition duration-200 ease-in-out hover:bg-gray-200"
        >
          CONTACT US
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
