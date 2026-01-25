import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "../../index.css";

const Tsomgo = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Tsomgo Lake View Cottage",
      location: "Near Tsomgo Lake, East Sikkim",
      price: "₹2,300/night",
      rating: "4.8/5",
      image: "/assets/homestay/tsomgo.webp",
      description: "Stunning views of the sacred Tsomgo Lake",
      amenities: ["Lake View", "Heating", "Guided Tours", "Traditional Food"],
      contact: "+91 98765 43270"
    },
    {
      id: 2,
      name: "Changu Lake Homestay",
      location: "Tsomgo Lake Area, East Sikkim",
      price: "₹2,100/night",
      rating: "4.5/5",
      image: "/assets/homestay/changu.jpeg",
      description: "Traditional homestay with yak rides and local experiences",
      amenities: ["Yak Rides", "Hot Water", "Local Guide", "Parking"],
      contact: "+91 98765 43271"
    }
  ];

  return (
    <div className="homestay-page">

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url(/assets/homestay/tsomgo_lake.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1>Tsomgo Lake Homestays</h1>
          <p>Stay near the sacred glacial lake at 12,400 feet</p>
           <Link className="contact-link" to="/">Home</Link>
  <i className="fa fa-angle-right "></i>
  <Link  className="contact-link" to="/homestay/east/tsomgo">Tsomgo</Link>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Tsomgo Lake</h2>
          <p>
            Tsomgo Lake, also known as Changu Lake, is a sacred glacial lake
            situated at an altitude of 12,400 feet. It changes colors with
            seasons and is surrounded by rugged Himalayan mountains.
          </p>
        </div>
      </section>

      {/* Homestays */}
      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays Near Tsomgo Lake</h2>

          <div className="homestay-grid">
            {homestays.map((stay) => (
              <div key={stay.id} className="homestay-card">
                <div className="homestay-image">
                  <img src={stay.image} alt={stay.name} />
                  <span className="price-badge">{stay.price}</span>
                  <span className="rating-badge">{stay.rating}</span>
                </div>

                <div className="homestay-content">
                  <h3>{stay.name}</h3>
                  <p className="location">{stay.location}</p>
                  <p className="description">{stay.description}</p>

                  <ul>
                    {stay.amenities.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>

                  <div className="homestay-footer">
                    <p className="contact">📞 {stay.contact}</p>
                    <button 
                      className="book-button" 
                      onClick={() => setSelectedHomestay(stay)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Attractions */}
      <section className="attractions-section">
        <div className="container">
          <h2>Lake Experiences</h2>
          <div className="attractions-grid">
            <div className="attraction-card">
              <h3>🛶 Yak Rides</h3>
              <p>Traditional yak rides around the lake (seasonal)</p>
            </div>
            <div className="attraction-card">
              <h3>📸 Photography</h3>
              <p>Capture stunning reflections of mountains in the lake</p>
            </div>
            <div className="attraction-card">
              <h3>🙏 Worship</h3>
              <p>Participate in traditional worship ceremonies</p>
            </div>
            <div className="attraction-card">
              <h3>🚶‍♂️ Walking</h3>
              <p>Walk around the lake (1 km circumference)</p>
            </div>
          </div>
        </div>
      </section>

      {selectedHomestay && (
        <BookingForm 
          homestayName={selectedHomestay.name}
          homestayId={selectedHomestay.id}
          onClose={() => setSelectedHomestay(null)}
        />
      )}
    </div>
  );
};

export default Tsomgo;
