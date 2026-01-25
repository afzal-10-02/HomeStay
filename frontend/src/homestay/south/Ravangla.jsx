import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "../../index.css";

const Ravangla = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Buddha Park View Homestay",
      location: "Ravangla, South Sikkim",
      price: "₹1,600/night",
      rating: "4.5/5",
      image: "/assets/homestay/temple-statue.avif",
      description: "Beautiful views of the Buddha Park and surrounding hills",
      amenities: ["Park View", "Garden", "Home-cooked Food", "Free WiFi"],
      contact: "+91 98765 43230"
    },
    {
      id: 2,
      name: "Maenam Hill Retreat",
      location: "Ravangla, South Sikkim",
      price: "₹1,800/night",
      rating: "4.7/5",
      image: "/assets/homestay/MAENAM-HILL-TREK.jpeg",
      description: "Perfect base for Maenam Wildlife Sanctuary treks",
      amenities: ["Trekking Guide", "Bonfire", "Mountain View", "Hot Water"],
      contact: "+91 98765 43231"
    }
  ];

  return (
    <div className="homestay-page">
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/homestay/MAENAM-HILL-TREK.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Ravangla Homestays</h1>
          <p>Experience tranquility in the heart of South Sikkim</p>
           <Link className="contact-link" to="/">Home</Link>
  <i className="fa fa-angle-right "></i>
  <Link  className="contact-link" to="/homestay/south/ravangla">Ravangla</Link>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Ravangla</h2>
          <p>
            Ravangla is a picturesque town in South Sikkim, famous for the 
            magnificent 130-foot Buddha statue at the Buddha Park. Surrounded by 
            tea gardens and offering panoramic views of the Himalayas, it's a 
            perfect destination for peace seekers and nature lovers.
          </p>
        </div>
      </section>

      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays in Ravangla</h2>
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

export default Ravangla;