import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import "../../index.css";

const Yuksom = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Dzongri Trek Base Homestay",
      location: "Yuksom, West Sikkim",
      price: "₹1,900/night",
      rating: "4.6/5",
      image: "/assets/homestay/dzongri-trek.webp",
      description: "Perfect base for Dzongri & Goecha La treks with mountain views",
      amenities: ["Trekking Guide", "Bonfire", "Hot Water", "Local Meals"],
      contact: "+91 98765 43290"
    },
    {
      id: 2,
      name: "Norbugang Heritage Stay",
      location: "Norbugang Park, Yuksom",
      price: "₹2,000/night",
      rating: "4.7/5",
      image: "/assets/homestay/norbu.jpg",
      description: "Traditional homestay near the coronation throne & sacred sites",
      amenities: ["Heritage View", "Garden", "Cultural Tours", "Parking"],
      contact: "+91 98765 43291"
    }
  ];

  return (
    <div className="homestay-page">

      {/* Hero Section – consistent with Gangtok, Lachen, etc. */}
      <section
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
                       url(/assets/gallery/Breadcrumb.png) center/cover no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content px-4">
          <h1>Yuksom Homestays</h1>
          <p>Historical first capital & gateway to Dzongri & Goecha La treks</p>

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mt-3">
            <Link className="text-white text-decoration-none fw-medium" to="/">
              Home
            </Link>
            <i className="fas fa-angle-right opacity-75 mx-2"></i>
            <Link
              className="text-white text-decoration-none fw-medium opacity-75"
              to="/homestay/west/yuksom"
            >
              Yuksom
            </Link>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-section py-5">
        <div className="container">
          <h2>Welcome to Yuksom</h2>
          <p>
            Yuksom is the historical first capital of Sikkim and the sacred coronation site of the first Chogyal (king). It is the starting point for famous treks like Dzongri, Goecha La, and Khangchendzonga National Park. Surrounded by ancient monasteries, lush forests, and rivers, Yuksom offers a perfect blend of history, spirituality, and Himalayan adventure.
          </p>
        </div>
      </section>

      {/* Homestays – same grid style as Gangtok, Lachen, Lachung */}
      <section className="homestay-listings py-5 bg-light">
        <div className="container">
          <h2>Available Homestays in Yuksom</h2>

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

                  <div className="amenities">
                    <h4>Amenities:</h4>
                    <ul>
                      {stay.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </div>

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

      {/* Booking Modal – same as Gangtok, Lachen, etc. */}
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

export default Yuksom;