import { Link } from "react-router-dom";
import "../../index.css";

const SouthSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Namchi",
      description: "Spiritual capital with Char Dham and giant Buddha statue",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/south/namchi"
    },
    {
      id: 2,
      name: "Ravangla",
      description: "Peaceful town with Buddha Park and mountain views",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/south/ravangla"
    },
    {
      id: 3,
      name: "Temi Tea Garden",
      description: "Sikkim's only tea estate with organic tea production",
      image: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/homestay/south/temitea"
    }
  ];

  return (
    <div className="region-page">
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>South Sikkim Homestays</h1>
          <p>Experience spirituality and natural beauty in perfect harmony</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Explore South Sikkim</h2>
          <p>
            South Sikkim is known as the spiritual heart of the state, home to 
            magnificent religious sites like the Char Dham complex and the 
            118-foot Guru Rinpoche statue. With its pleasant climate, tea gardens, 
            and panoramic views, South Sikkim offers a peaceful and rejuvenating 
            experience for travelers.
          </p>
        </div>
      </section>

      <section className="destinations-section">
        <div className="container">
          <h2>Popular Destinations in South Sikkim</h2>
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
          <h2>Why Choose South Sikkim?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🙏 Spiritual Retreat</h3>
              <p>Major religious sites and peaceful atmosphere</p>
            </div>
            <div className="feature-card">
              <h3>🌤️ Pleasant Climate</h3>
              <p>Moderate temperatures year-round</p>
            </div>
            <div className="feature-card">
              <h3>🍵 Tea Experiences</h3>
              <p>Visit Sikkim's only tea estate</p>
            </div>
            <div className="feature-card">
              <h3>🚗 Easy Access</h3>
              <p>Well-connected by road from Siliguri and Gangtok</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Experience South Sikkim's Serenity</h2>
          <p>Book your homestay for a spiritual and rejuvenating experience</p>
          <div className="cta-buttons">
            <button className="primary-button">
              <Link to="/contact">Book Spiritual Retreat</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SouthSikkim;