import ciiHeadImage from "../assets/images/anna.jpg";

function About() {
  const boardMembers = [
    { name: "Mr. Latif Khan", position: "Head Director", image: ciiHeadImage },
    { name: "Dr. director", position: "Director", image: "https://via.placeholder.com/200" },
    { name: "Dr. HOD", position: "Hod ece", image: "https://via.placeholder.com/200" },
  ];

  const teamMembers = [
    { name: "Rehan Raza", domain: "Web", image: "https://via.placeholder.com/200" },
    { name: "MD Furqan", domain: "App", image: "https://via.placeholder.com/200" },
    { name: "Rizwan Shah", domain: "Robotics", image: "https://via.placeholder.com/200" },
    { name: "Rajdeep", domain: "Hardware", image: "https://via.placeholder.com/200" },
    { name: "Mugdh Mathur", domain: "IoT", image: "https://via.placeholder.com/200" },
    { name: "Pratap", domain: "Blockchain", image: "https://via.placeholder.com/200" },
    { name: "", domain: "Cloud Computing", image: "https://via.placeholder.com/200" },
    { name: "loc", domain: "AI/ML", image: "https://via.placeholder.com/200" },
  ];

  const galleryImages = [
    "https://via.placeholder.com/800x400", 
    "https://via.placeholder.com/800x400", 
    "https://via.placeholder.com/800x400", 
    "https://via.placeholder.com/800x400", 
    "https://via.placeholder.com/800x400"
  ];

  return (
    <div className="bg-[#f9f7f3] text-gray-800 min-h-screen pt-20">
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold mb-6">About CII Lab</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to our CII Lab, a hub of innovation and collaboration where ideas come
            to life. Our mission is to foster creativity, encourage research, and empower
            students and entrepreneurs to develop cutting-edge solutions for real-world
            challenges. We work closely with industry experts and academic leaders to ensure
            that every project receives the guidance and resources it needs to succeed.
          </p>
        </div>
      </section>


      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-8">Our Board Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="bg-white p-10 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-auto h-[210px] mx-auto object-cover rounded-full mb-3" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-500">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-200">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto object-cover rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-500">{member.domain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
          <div className="overflow-hidden relative w-full h-96">
            <div className="w-full h-full flex animate-slide">
              {galleryImages.map((image, idx) => (
                <img key={idx} src={image} alt={`Gallery ${idx+1}`} className="w-full h-full object-cover" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;