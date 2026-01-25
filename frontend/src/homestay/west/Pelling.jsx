import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "../../index.css";

const Pelling = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Kanchenjunga View Homestay",
      location: "Pelling, West Sikkim",
      price: "₹1,800/night",
      rating: "4.7/5",
      image: "/assets/homestay/kanchenjunga.jpg",
      description: "Breathtaking views of Mt. Kanchenjunga from your room",
      amenities: ["Mountain View", "Balcony", "Free WiFi", "Hot Water"],
      contact: "+91 98765 43250"
    }
  ];

  return (
    <div className="homestay-page">
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/homestay/kanchenjunga.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Pelling Homestays</h1>
          <p>Closest view of the majestic Mt. Kanchenjunga</p>
           <Link className="contact-link" to="/">Home</Link>
            <i className="fa fa-angle-right "></i>
            <Link  className="contact-link" to="/homestay/west/pelling">Pelling</Link>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Pelling</h2>
          <p>
            Pelling is a beautiful hill station in West Sikkim, famous for its 
            spectacular views of the world's third highest peak, Mt. Kanchenjunga. 
            With ancient monasteries, waterfalls, and trekking trails, Pelling 
            offers a perfect Himalayan getaway.
          </p>
        </div>
      </section>

      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays in Pelling</h2>
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

export default Pelling;