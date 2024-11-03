import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Header2 from './components/Header-2';
import Navbar from './components/Navbar';
import Home from './pages/homepage'; // Import your pages
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import SocialIcon from './components/Socialicons'; // Import the SocialIcon component
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Header2 />
      <Navbar />
      
      {/* Social media icons */}
      <SocialIcon />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
