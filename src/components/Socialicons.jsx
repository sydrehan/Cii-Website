import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import social media icons
import { motion } from 'framer-motion';

const SocialIcons = () => {
  const iconVariants = {
    hover: {
      scale: 1.2,  // Scale effect on hover
      rotate: 15,   // Optional rotation effect
      transition: {
        duration: 0.3, // Duration of the hover animation
      },
    },
  };

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
      <motion.a
        href="https://www.facebook.com"
        target="https://www.facebook.com/gitsudr/"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-md transition-transform duration-300"
        whileHover="hover" // Apply hover animation
        variants={iconVariants} // Use the defined variants
      >
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </motion.a>
      <motion.a
        href="https://www.twitter.com"
        target="https://x.com/gitsudr"
        rel="noopener noreferrer"
        className="bg-blue-400 text-white p-3 rounded-md transition-transform duration-300"
        whileHover="hover"
        variants={iconVariants}
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </motion.a>
      <motion.a
        href="https://www.instagram.com"
        target="https://www.instagram.com/gitsudr/p/DAV6H8AsNDj/"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 rounded-md transition-transform duration-300"
        whileHover="hover"
        variants={iconVariants}
      >
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com"
        target="https://www.linkedin.com/school/geetanjali-institute-of-technical-studies-udaipur/?originalSubdomain=in"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-3 rounded-md transition-transform duration-300"
        whileHover="hover"
        variants={iconVariants}
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </motion.a>
    </div>
  );
};

export default SocialIcons;
