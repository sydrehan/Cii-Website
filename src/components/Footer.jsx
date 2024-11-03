import ciiImage from '../Assets/Images/cii-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import social media icons
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center space-x-8">
            {/* Left section - Logo and Text content */}
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="flex-shrink-0 pr-10">
                <img src={ciiImage} alt="Innovation Logo" className="h-20 w-auto rounded-lg shadow-lg" /> {/* Added rounded corners and shadow for a polished look */}
              </div>
              {/* Text content next to the logo */}
              <div className="pr-10">
                <h1 className="text-3xl font-bold text-gray-200">Innovation & Incubation</h1>
                <p className="text-sm text-gray-400">© 2024 All Rights Reserved</p>
              </div>
            </div>

            {/* Address section */}
            <div className="text-left pr-10">
              <h1 className="text-2xl font-semibold text-gray-200">Address</h1>
              <p className="text-sm text-gray-400">
                Geetanjali Institute of Technical Studies NH 76,<br />
                Airport Road, Dabok, Rajasthan 313022
              </p>
            </div>

            {/* Right section - Social Media Icons */}
            <div className="flex space-x-6">
              <motion.a
                href="https://www.facebook.com/gitsudr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-500 hover:text-white" />
              </motion.a>

              <motion.a
                href="https://x.com/gitsudr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400 hover:text-white" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/gitsudr/p/DAV6H8AsNDj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-600 hover:text-white" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/school/geetanjali-institute-of-technical-studies-udaipur/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-600 hover:text-white" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Light gradient bar under the Footer */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 py-3 text-center shadow-lg">
        <p className="text-sm tracking-wider">Copyrights © 2024 All Rights Reserved | Innovation & Incubation</p>
      </div>
    </>
  );
};

export default Footer;
