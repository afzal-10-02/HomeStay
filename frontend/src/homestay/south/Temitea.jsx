import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import HomestayCard from "../../components/HomestayCard";
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
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/gallery/Breadcrumb.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content  px-4">
          <h1>Temi Tea Garden Homestays</h1>
          <p>Experience Sikkim's only tea estate with breathtaking views</p>
            <Link className="contact-link text-white text-decoration-none fw-medium" to="/">
      Home
    </Link>
    <i className="fas fa-angle-right opacity-75"></i>
    <Link
      className="contact-link text-white text-decoration-none fw-medium opacity-75"
      to="/homestay/east/temitea"
    >
    Temi-tea
    </Link>
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
          <div className="row g-4 justify-content-center">
            {homestays.map((stay) => (
              <div key={stay.id} className="col-12 col-md-6 col-lg-4">
                <HomestayCard 
                    stay={stay} 
                    onBook={(stay) => setSelectedHomestay(stay)} 
                />
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