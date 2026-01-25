import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "../../index.css";

const Lachen = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Snow Peak Homestay",
      location: "Lachen, North Sikkim",
      price: "₹1,800/night",
      rating: "4.5/5",
      image: "/assets/homestay/snow_lachen.jpg",
      description: "Traditional Sikkimese homestay with beautiful mountain views and warm hospitality",
      amenities: ["Free WiFi", "Hot Water", "Home-cooked Meals", "Garden"],
      contact: "+91 98765 43210"
    },
    {
      id: 2,
      name: "Thangu Valley Retreat",
      location: "Near Lachen, North Sikkim",
      price: "₹2,200/night",
      rating: "4.7/5",
      image: "/assets/homestay/thangu_lachen.webp",
      description: "Cozy retreat perfect for nature lovers seeking tranquility",
      amenities: ["Mountain View", "Bonfire", "Guided Tours", "Parking"],
      contact: "+91 98765 12345"
    },
    {
      id: 3,
      name: "River View Homestay",
      location: "Lachen, North Sikkim",
      price: "₹2,000/night",
      rating: "4.6/5",
      image: "/assets/homestay/river_lachen.jpg",
      description: "Relax by the river with peaceful surroundings and scenic beauty",
      amenities: ["River View", "Free WiFi", "Hot Water", "Local Food"],
      contact: "+91 98765 67890"
    },
    {
      id: 4,
      name: "Gurudongmar Stay",
      location: "Near Gurudongmar Lake, North Sikkim",
      price: "₹2,500/night",
      rating: "4.8/5",
      image: "/assets/homestay/gurudongmar_lachen.jpg",
      description: "High-altitude stay close to Gurudongmar Lake with breathtaking views",
      amenities: ["Heater", "Guide Assistance", "Parking", "Meals Included"],
      contact: "+91 98765 54321"
    }
  ];

  return (
    <div className="homestay-page">

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url(/assets/homestay/snow_lachen.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1>Lachen Homestays</h1>
          <p>Experience authentic mountain hospitality in the scenic Lachen valley</p>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Lachen</h2>
          <p>
            Lachen is a pristine mountain village in North Sikkim known for its
            pristine natural beauty, rhododendron forests, and gateway to Gurudongmar Lake.
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

export default Lachen;
