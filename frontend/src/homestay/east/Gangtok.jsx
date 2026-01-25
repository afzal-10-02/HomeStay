import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "../../index.css";

const Gangtok = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "MG Marg Heritage Homestay",
      location: "MG Marg, Gangtok",
      price: "₹1,800/night",
      rating: "4.7/5",
      image: "/assets/homestay/heritage_gangtok.jpg",
      description: "Centrally located with views of Gangtok town",
      amenities: ["City View", "Free WiFi", "Kitchen", "Balcony"],
      contact: "+91 98765 43280"
    },
    {
      id: 2,
      name: "Rumtek Monastery View Stay",
      location: "Near Rumtek, Gangtok",
      price: "₹2,000/night",
      rating: "4.8/5",
      image: "/assets/homestay/rumtek_gangtok.jpg",
      description: "Peaceful stay with monastery views",
      amenities: ["Monastery View", "Garden", "Yoga Deck", "Traditional Meals"],
      contact: "+91 98765 43281"
    },
    {
      id: 3,
      name: "Enchey Monastery Homestay",
      location: "Enchey, Gangtok",
      price: "₹1,900/night",
      rating: "4.6/5",
      image: "/assets/homestay/enchey_gangtok.jpeg",
      description: "Traditional homestay near ancient monastery",
      amenities: ["Temple Access", "Cultural Tours", "Home Food", "Parking"],
      contact: "+91 98765 43282"
    },
    {
      id: 4,
      name: "Hanuman Tok View Cottage",
      location: "Hanuman Tok, Gangtok",
      price: "₹2,200/night",
      rating: "4.9/5",
      image: "/assets/homestay/hanuman_gangtok.jpeg",
      description: "Panoramic views of Gangtok and Kanchenjunga",
      amenities: ["Mountain View", "Sunrise View", "Private Garden", "Guided Tours"],
      contact: "+91 98765 43283"
    }
  ];

  return (
    <div className="homestay-page">

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url(/assets/homestay/mg_marg2.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1>Gangtok Homestays</h1>
          <p>Experience Sikkim's capital city with local hospitality</p>
           <Link className="contact-link" to="/">Home</Link>
  <i className="fa fa-angle-right "></i>
  <Link  className="contact-link" to="/homestay/east/gangtok">Gangtok</Link>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Gangtok</h2>
          <p>
            Gangtok, the capital city of Sikkim, is a beautiful hill station
            nestled in the Eastern Himalayas. Known for its clean streets,
            vibrant culture, and breathtaking views of Mt. Kanchenjunga,
            Gangtok offers the perfect blend of urban comfort and natural beauty.
          </p>
        </div>
      </section>

      {/* Homestays */}
      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays in Gangtok</h2>

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

export default Gangtok;
