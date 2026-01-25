import { Link } from "react-router-dom";
import "../../index.css";

const EastSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Gangtok",
      description: "Capital city with stunning views and vibrant culture",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/east/gangtok"
    },
    {
      id: 2,
      name: "Nathula Pass",
      description: "Historic Indo-China border at 14,140 feet",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/east/nathula"
    },
    {
      id: 3,
      name: "Tsomgo Lake",
      description: "Sacred glacial lake at 12,400 feet altitude",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/east/tsomgo"
    }
  ];

  return (
    <div className="region-page">
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>East Sikkim Homestays</h1>
          <p>Experience the cultural and political heart of Sikkim</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Explore East Sikkim</h2>
          <p>
            East Sikkim is the most developed and culturally rich region of 
            Sikkim. Home to the capital city Gangtok, this region offers a 
            perfect blend of urban sophistication and natural beauty. From 
            high-altitude passes to sacred lakes and ancient monasteries, 
            East Sikkim has something for every traveler.
          </p>
        </div>
      </section>

      <section className="destinations-section">
        <div className="container">
          <h2>Popular Destinations in East Sikkim</h2>
          <div className="destinations-grid">
            {destinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <img src={destination.image} alt={destination.name} />
                <div className="destination-content">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <Link to={destination.link} className="explore-button">
                    Explore Homestays
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>Why Choose East Sikkim?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🏙️ Urban Comfort</h3>
              <p>Best infrastructure with modern amenities</p>
            </div>
            <div className="feature-card">
              <h3>🚗 Accessibility</h3>
              <p>Well-connected by road and best transport options</p>
            </div>
            <div className="feature-card">
              <h3>🍽️ Food Variety</h3>
              <p>Wide range of restaurants and local cuisine</p>
            </div>
            <div className="feature-card">
              <h3>🛍️ Shopping</h3>
              <p>Best markets for souvenirs and local products</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Start Your East Sikkim Journey</h2>
          <p>Choose your destination and book your authentic homestay experience</p>
          <div className="cta-buttons">
            <button className="primary-button">
              <Link to="/contact">Need Help Booking?</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EastSikkim;