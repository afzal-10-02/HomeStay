import { Link } from "react-router-dom";
import "../../index.css";

const Rinchenpong = () => {
  return (
    <div className="homestay-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Rinchenpong Homestays</h1>
          <p>Historical village with stunning Himalayan views</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Rinchenpong</h2>
          <p>
            Rinchenpong is a historical village in West Sikkim, known for its 
            ancient monasteries and panoramic views of Kanchenjunga.
          </p>
           <Link className="contact-link" to="/">Home</Link>
  <i className="fa fa-angle-right "></i>
  <Link  className="contact-link" to="/homestay/east/nathula">Nathula</Link>
        </div>
      </section>

    </div>
  );
};

export default Rinchenpong;