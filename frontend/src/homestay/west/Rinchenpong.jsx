import { Link } from "react-router-dom";
import "../../index.css";

const Rinchenpong = () => {
  return (
    <div className="homestay-page">
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/gallery/Breadcrumb.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content  px-4">
           <h1>Rinchenpong Homestays</h1>
          <p>Historical village with stunning Himalayan views</p>
             <Link className="contact-link text-white text-decoration-none fw-medium" to="/">
      Home
    </Link>
    <i className="fas fa-angle-right opacity-75"></i>
    <Link
      className="contact-link text-white text-decoration-none fw-medium opacity-75"
      to="/homestay/east/rinchenpong"
    >
    Rinchenpong
    </Link>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Rinchenpong</h2>
          <p>
            Rinchenpong is a historical village in West Sikkim, known for its 
            ancient monasteries and panoramic views of Kanchenjunga.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Rinchenpong;