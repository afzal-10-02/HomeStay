import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "../../index.css";

const Lachung = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Yumthang Valley Homestay",
      location: "Lachung, North Sikkim",
      price: "₹2,000/night",
      rating: "4.6/5",
      image: "/assets/homestay/yumthang.jpg",
      description: "Beautiful homestay with valley views and traditional architecture",
      amenities: ["Valley View", "Free WiFi", "Hot Water", "Traditional Food"],
      contact: "+91 98765 43214"
    },
    {
      id: 2,
      name: "Snow Lion Cottage",
      location: "Lachung Village, North Sikkim",
      price: "₹1,900/night",
      rating: "4.5/5",
      image: "/assets/homestay/snow-cottage.avif",
      description: "Cozy cottage with modern amenities in traditional setting",
      amenities: ["Mountain View", "Heating", "Private Bath", "Garden"],
      contact: "+91 98765 43215"
    },
    {
      id: 3,
      name: "Zero Point Retreat",
      location: "Near Lachung, North Sikkim",
      price: "₹2,300/night",
      rating: "4.8/5",
      image: "/assets/homestay/zero_lachung.webp",
      description: "Perfect for adventure seekers visiting Yumthang Valley",
      amenities: ["Adventure Tours", "Bonfire", "Oxygen", "Hot Water 24/7"],
      contact: "+91 98765 43216"
    },
    {
      id: 4,
      name: "Rhododendron Haven",
      location: "Lachung Valley, North Sikkim",
      price: "₹2,100/night",
      rating: "4.7/5",
      image: "/assets/homestay/rhodhodendron_lach.jpeg",
      description: "Surrounded by rhododendron forests with river views",
      amenities: ["River View", "Forest Trekking", "Home-cooked Meals", "Parking"],
      contact: "+91 98765 43217"
    }
  ];

  return (
    <div className="homestay-page">

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url(/assets/homestay/yumthang.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1>Lachung Homestays</h1>
          <p>Experience the Valley of Flowers from traditional Lachung homestays</p>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Lachung</h2>
          <p>
            Lachung is a scenic mountain village in North Sikkim famous for apple
            orchards, waterfalls, and proximity to Yumthang Valley.
          </p>
        </div>
      </section>

      {/* Homestays */}
      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays</h2>

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
                  <p>{stay.description}</p>

                  <ul>
                    {stay.amenities.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>

                  <div className="homestay-footer">
                    <p>📞 {stay.contact}</p>
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

export default Lachung;
