import Slideshow from "../components/slideshow"; // Ensure the path is correct
import Card from "../components/Card"; // Import the Card component

// Importing images from src/assets/images
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import directorImage from "../assets/images/ns.jpg";
import ciiHeadImage from "../assets/images/anna.jpg";

function Homepage() {
  const offerings = [
    { title: "Benefits from Host Institute", description: "Financial Accounting and Management Services to our Incubatees", image: image1 },
    { title: "Financial Assistance to grow", description: "Various Funds to innovative and technology-related Startups", image: image2 },
    { title: "High-End Tech Support", description: "We provide a complete state of Technical Support and Fabrication Facilities", image: image3 },
    { title: "Infrastructure Facility", description: "We provide State of Art Infrastructure to our Incubatees", image: image4 },
    { title: "Mentorship & Advisory", description: "Academicians and industry leaders who provide expert mentorship", image: image5 },
    { title: "Networking & Outreach", description: "Networking to our incubatees through events and partner organizations", image: image6 },
  ];

  return (
    <div>
    
      <Slideshow />

      {/* Director's Message Section */}
      <section className="bg-blue-100 py-12 px-6 mb-10 mx-auto text-center">
        <div className="block">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Message from the Director</h2>
        </div>
        <div className="container w-[70%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-100 text-center mt-6 mr-10">
            <p className="text-lg text-gray-700 mb-4">
              GITS is a premier Institute of higher learning in the wide areas of Engineering, Technology, Management and
              associated science. Over a long and proud history, GITS have pushed the limits of knowledge and innovation,
              and carved a niche in Technical education with emphasis on quality through up-to-date latest curriculum and
              lecture delivery methods supported by strong laboratory infrastructure.
            </p>
            <p className="text-lg font-medium text-gray-700">- Dr. N.S Rathore, Director</p>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={directorImage}
              alt="Director"
              className="w-64 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CII Head's Message */}
      <section className="bg-gray-100 py-12 px-6 wb-10 mx-auto text-center">
        <div className="block">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">CII Head Message</h2>
        </div>
        <div className="container w-[70%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-100 text-center mt-6 mr-5">
            <p className="text-lg text-gray-700 mb-4">
              Welcome to our Innovation Lab at Geetanjali Institute of Technical Studies. Our mission is to foster creativity
              and turn ideas into impactful solutions. With support from CII, we aim to bridge the gap between academia and
              industry, empowering students to work on real-world challenges. Join us in shaping the future of technology
              and innovation.
            </p>
            <p className="text-lg font-medium text-gray-700">- Mr. Latif Khan, Head Of CII</p>
          </div>
          <div className="w-full flex justify-center ml-10">
            <img
              src={ciiHeadImage}
              alt="CII Head"
              className="w-64 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="mt-10 text-center p-10 bg-slate-200">
        <h2 className="text-2xl font-bold mb-4 relative inline-block">
          What We Offer
          <span className="block w-full h-1 bg-blue-500 mt-1 transition-all duration-500 transform origin-left scale-x-100" />
        </h2>
        {/* Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              title={offering.title}
              description={offering.description}
              image={offering.image} // Pass imported image directly
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
