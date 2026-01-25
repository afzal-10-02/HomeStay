import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "../../index.css";

const Nathula = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Nathula Pass View Homestay",
      location: "Near Nathula Pass, East Sikkim",
      price: "₹2,500/night",
      rating: "4.6/5",
      image: "/assets/homestay/Nathula.jpg",
      description: "Closest homestay to Nathula Pass with breathtaking border views",
      amenities: ["Border View", "Heating", "Oxygen", "Guided Tours"],
      contact: "+91 98765 43260"
    },
    {
      id: 2,
      name: "Baba Harbhajan Singh Retreat",
      location: "14th Mile, Nathula Route",
      price: "₹2,200/night",
      rating: "4.7/5",
      image: "/assets/homestay/harbhajan.png",
      description: "Peaceful retreat near Baba Harbhajan Singh Mandir",
      amenities: ["Temple Access", "Hot Water", "Traditional Meals", "Parking"],
      contact: "+91 98765 43261"
    }
  ];

  return (
    <div className="homestay-page">

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
          url(/assets/homestay/Nathula.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1>Nathula Pass Homestays</h1>
          <p>Experience life near the Indo–China border at 14,140 feet</p>
           <Link className="contact-link" to="/">Home</Link>
  <i className="fa fa-angle-right "></i>
  <Link  className="contact-link" to="/homestay/east/nathula">Nathula</Link>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Nathula Pass</h2>
          <p>
            Nathula Pass, at an altitude of 14,140 feet, is one of the highest
            motorable roads in the world and a historic Indo–China border pass.
            Once part of the ancient Silk Route, it now offers breathtaking
            Himalayan views and a unique high-altitude experience.
          </p>
        </div>
      </section>

      {/* Homestays */}
      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays Near Nathula</h2>

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

export default Nathula;
