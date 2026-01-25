import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "../../index.css";

const Namchi = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Char Dham View Homestay",
      location: "Namchi, South Sikkim",
      price: "₹1,500/night",
      rating: "4.4/5",
      image: "/assets/homestay/char-dham.jpg",
      description: "Stunning views of Char Dham complex and mountains",
      amenities: ["Mountain View", "Free WiFi", "Garden", "Home-cooked Meals"],
      contact: "+91 98765 43220"
    },
    {
      id: 2,
      name: "Tendong Hill Retreat",
      location: "Near Namchi, South Sikkim",
      price: "₹1,800/night",
      rating: "4.6/5",
      image: "/assets/homestay/tadong-hill.jpeg",
      description: "Peaceful retreat with panoramic hill views",
      amenities: ["Hill View", "Yoga Deck", "Organic Food", "Parking"],
      contact: "+91 98765 43221"
    },
    {
      id: 3,
      name: "Samdruptse Homestay",
      location: "Namchi, South Sikkim",
      price: "₹1,600/night",
      rating: "4.5/5",
      description: "Traditional homestay near the giant Guru Rinpoche statue",
      image: "/assets/homestay/samdrupte.avif",
      amenities: ["Temple View", "Cultural Tours", "Local Guide", "Hot Water"],
      contact: "+91 98765 43222"
    },
    {
      id: 4,
      name: "Solophok Heritage Stay",
      location: "Solophok, Namchi",
      price: "₹1,700/night",
      rating: "4.3/5",
      image: "/assets/homestay/solophok.jpg",
      description: "Experience traditional Sikkimese heritage and culture",
      amenities: ["Cultural Shows", "Traditional Meals", "Garden", "Free WiFi"],
      contact: "+91 98765 43223"
    }
  ];

  return (
    <div className="homestay-page">
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/homestay/tadong-hill.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Namchi Homestays</h1>
          <p>Experience the spiritual and cultural heart of South Sikkim</p>
           <Link className="contact-link" to="/">Home</Link>
  <i className="fa fa-angle-right "></i>
  <Link  className="contact-link" to="/homestay/south/namchi">Namchi</Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Namchi</h2>
          <p>
            Namchi, meaning "Sky High" in Sikkimese, is the capital of South Sikkim 
            district. Famous for the towering 118-foot Guru Rinpoche statue at 
            Samdruptse and the breathtaking Char Dham complex, Namchi offers a 
            perfect blend of spirituality, culture, and natural beauty.
          </p>
        </div>
      </section>

      {/* Homestays Grid */}
      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays in Namchi</h2>
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

export default Namchi;