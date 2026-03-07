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
      rating: "4.7",
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
      rating: "4.8",
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
      rating: "4.6",
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
      rating: "4.9",
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
          url(/assets/gallery/Breadcrumb.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content px-4">
          <h1>Gangtok Homestays</h1>
          <p>Experience Sikkim's capital city with local hospitality</p>
          <div className="breadcrumb-nav">
            <Link className="breadcrumb-link" to="/">
              <i className="fas fa-home"></i> Home
            </Link>
            <i className="fas fa-angle-right breadcrumb-separator"></i>
            <span className="breadcrumb-current">Gangtok</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
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

      {/* Homestays Listings */}
      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays in Gangtok</h2>

          <div className="homestay-grid">
            {homestays.map((stay) => (
              <div key={stay.id} className="homestay-card">
                <div className="homestay-image">
                  <img 
                    src={stay.image} 
                    alt={stay.name}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=Homestay+Image";
                    }}
                  />
                  <span className="price-badge">{stay.price}</span>
                  <span className="rating-badge">★ {stay.rating}</span>
                </div>

                <div className="homestay-content">
                  <h3>{stay.name}</h3>
                  <p className="location">
                    <i className="fas fa-map-marker-alt"></i> {stay.location}
                  </p>
                  <p className="description">{stay.description}</p>

                  <div className="amenities">
                    <h4>Amenities</h4>
                    <ul>
                      {stay.amenities.map((a, i) => (
                        <li key={i}>
                          <i className="fas fa-check"></i> {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="homestay-footer">
                    <p className="contact">
                      <i className="fas fa-phone-alt"></i> {stay.contact}
                    </p>
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

      {/* Attractions Section */}
      <section className="attractions-section">
        <div className="container">
          <h2>Nearby Attractions</h2>
          <div className="attractions-grid">
            <div className="attraction-card">
              <h3>MG Marg</h3>
              <p>Main pedestrian street with shops, cafes, and entertainment</p>
            </div>
            <div className="attraction-card">
              <h3>Rumtek Monastery</h3>
              <p>One of the largest and most significant monasteries in Sikkim</p>
            </div>
            <div className="attraction-card">
              <h3>Tsomgo Lake</h3>
              <p>Beautiful glacial lake at 12,400 feet elevation</p>
            </div>
            <div className="attraction-card">
              <h3>Nathula Pass</h3>
              <p>Historic mountain pass on the Indo-China border</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Experience Gangtok?</h2>
          <p>Book your stay now and immerse yourself in the beauty of the Himalayas</p>
          <div className="cta-buttons">
            <button className="primary-button">Browse All Homestays</button>
            <button className="secondary-button">Contact Us</button>
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