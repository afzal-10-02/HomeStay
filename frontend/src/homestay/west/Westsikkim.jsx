import { Link } from "react-router-dom";
import "../../index.css";

const WestSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Pelling",
      description: "Closest view of Mt. Kanchenjunga, ancient monasteries",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/west/pelling"
    },
    {
      id: 2,
      name: "Rinchenpong",
      description: "Historical village with stunning Himalayan views",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/west/rinchenpong"
    },
    {
      id: 3,
      name: "Yuksom",
      description: "Historical capital and gateway to Dzongri Trek",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/west/yuksom"
    }
  ];

  return (
    <div className="region-page">
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>West Sikkim Homestays</h1>
          <p>Experience history, adventure, and majestic mountain views</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Explore West Sikkim</h2>
          <p>
            West Sikkim is a region of historical significance and natural 
            beauty. As the site of Sikkim's first capital at Yuksom, it's rich 
            in history and culture. The region offers the closest views of 
            Mt. Kanchenjunga from Pelling and serves as the starting point for 
            famous treks like Dzongri and Goecha La.
          </p>
        </div>
      </section>

      <section className="destinations-section">
        <div className="container">
          <h2>Popular Destinations in West Sikkim</h2>
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
          <h2>Adventure Opportunities</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🥾 Trekking</h3>
              <p>Gateway to Dzongri and Goecha La treks</p>
            </div>
            <div className="feature-card">
              <h3>📸 Photography</h3>
              <p>Best views of Kanchenjunga range</p>
            </div>
            <div className="feature-card">
              <h3>🏛️ History</h3>
              <p>Ancient monasteries and historical sites</p>
            </div>
            <div className="feature-card">
              <h3>🌊 Waterfalls</h3>
              <p>Beautiful waterfalls like Kanchenjunga Falls</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Start Your West Sikkim Journey</h2>
          <p>Book your homestay for historical exploration and mountain adventures</p>
          <div className="cta-buttons">
            <button className="primary-button">
              <Link to="/contact">Book Adventure Stay</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WestSikkim;