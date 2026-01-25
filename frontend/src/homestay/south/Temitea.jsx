import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "../../index.css";

const TemiTea = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Temi Tea Garden Bungalow",
      location: "Temi Tea Garden, South Sikkim",
      price: "₹2,000/night",
      rating: "4.8/5",
      image: "/assets/homestay/temi-bungalow1.webp",
      description: "Stay amidst Sikkim's only tea garden with panoramic views",
      amenities: ["Tea Garden View", "Tea Tasting", "Garden", "Traditional Meals"],
      contact: "+91 98765 43240"
    }
  ];

  return (
    <div className="homestay-page">
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/homestay/temi-bungalow1.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Temi Tea Garden Homestays</h1>
          <p>Experience Sikkim's only tea estate with breathtaking views</p>
           <Link className="contact-link" to="/">Home</Link>
  <i className="fa fa-angle-right "></i>
  <Link  className="contact-link" to="/homestay/south/temitea">Temi Tea</Link>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Temi Tea Garden</h2>
          <p>
            Temi Tea Garden is Sikkim's only tea estate, producing some of the 
            finest organic tea in India. Spread over 440 acres, this beautiful 
            garden offers stunning views of the Himalayan ranges and a unique 
            opportunity to experience tea cultivation and processing.
          </p>
        </div>
      </section>

      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays in Temi Tea Garden</h2>
          <div className="homestay-grid">
            {homestays.map((homestay) => (
              <div key={homestay.id} className="homestay-card">
                <div className="homestay-image">
                  <img src={homestay.image} alt={homestay.name} />
                  <span className="price-badge">{homestay.price}</span>
                  <span className="rating-badge">{homestay.rating}</span>
                </div>
                <div className="homestay-content">
                  <h3>{homestay.name}</h3>
                  <p className="location">{homestay.location}</p>
                  <p className="description">{homestay.description}</p>
                  
                  <div className="amenities">
                    <h4>Amenities:</h4>
                    <ul>
                      {homestay.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="homestay-footer">
                    <p className="contact">Contact: {homestay.contact}</p>
                    <button 
                      className="book-button"
                      onClick={() => setSelectedHomestay(homestay)}
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

export default TemiTea;