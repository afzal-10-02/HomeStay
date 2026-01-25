import { Link } from "react-router-dom";
import "../../index.css";

const NorthSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Lachen",
      description: "Base for Gurudongmar Lake, traditional village life",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/north/lachen"
    },
    {
      id: 2,
      name: "Lachung",
      description: "Gateway to Yumthang Valley, beautiful apple orchards",
      image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/north/lachung"
    }
  ];

  return (
    <div className="region-page">
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1516496636080-14fb876e029d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>North Sikkim Homestays</h1>
          <p>Experience the raw, untouched beauty of the Himalayas</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Explore North Sikkim</h2>
          <p>
            North Sikkim is the most remote and breathtaking region of the state, 
            offering some of the most spectacular Himalayan landscapes. From the 
            sacred Gurudongmar Lake to the flower-filled Yumthang Valley, this 
            region is perfect for adventure seekers and nature lovers. Due to 
            its sensitive border location, special permits are required.
          </p>
        </div>
      </section>

      <section className="destinations-section">
        <div className="container">
          <h2>Popular Destinations in North Sikkim</h2>
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
          <h2>Important Information</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>🛂 Permits Required</h3>
              <p>Protected Area Permit (PAP) mandatory for all visitors</p>
            </div>
            <div className="tip-card">
              <h3>🚗 Travel Restrictions</h3>
              <p>Only registered vehicles allowed. No self-driving.</p>
            </div>
            <div className="tip-card">
              <h3>🏔️ High Altitude</h3>
              <p>Acclimatize properly. Carry medicines for altitude sickness.</p>
            </div>
            <div className="tip-card">
              <h3>🧥 Extreme Cold</h3>
              <p>Carry heavy woolens, even in summer. Temperatures drop below freezing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Start Your North Sikkim Adventure</h2>
          <p>Book your permits and homestays in advance for this unique experience</p>
          <div className="cta-buttons">
            <button className="primary-button">
              <Link to="/contact">Get Permit Assistance</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NorthSikkim;