import { Link } from "react-router-dom";
import "../../index.css";

const Yuksom = () => {
  return (
    <div className="homestay-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Yuksom Homestays</h1>
          <p>Historical capital and gateway to Dzongri Trek</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Yuksom</h2>
          <p>
            Yuksom is the historical first capital of Sikkim and the starting 
            point for the famous Dzongri and Goecha La treks.
          </p>
           <Link className="contact-link" to="/">Home</Link>
  <i className="fa fa-angle-right "></i>
  <Link  className="contact-link" to="/homestay/west/yuksom">Yuksom</Link>
        </div>
      </section>

    </div>
  );
};

export default Yuksom;