// src/components/RegionPage.jsx
import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { homestayData } from "./data.js"; // Import your JSON data


const RegionPage = () => {
  const { region } = useParams(); // Gets 'east', 'west', etc.
  const data = homestayData[region];

  if (!data) return <Navigate to="/" />; // Redirect if region doesn't exist

  return (
    <div className="region-page">
      {/* Dynamic Hero Section */}
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${data.heroImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
        </div>
      </section>

      {/* Dynamic Intro */}
      <section className="intro-section">
        <div className="container">
          <h2>{data.introHeading}</h2>
          <p>{data.introText}</p>
        </div>
      </section>


      {/* Destinations List */}
      <section className="destinations-section">
        <div className="container">
          <h2>Popular Destinations in {data.title.replace(' Homestays', '')}</h2>
          <div className="destinations-grid">
            {data.destinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <div className="card-image-wrapper">
                  <img src={destination.image} alt={destination.name} />
                </div>
                <div className="destination-content">
                  <h3>{destination.name}</h3>
                  <p className="destination-description">{destination.description}</p>
                  <Link to={destination.link} className="explore-button">
                    Explore Homestays
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="info-section">
        <div className="container">
          <h2>Why Choose {data.title.replace(' Homestays', '')}?</h2>
          <div className="features-grid">
            {data.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature.icon} {feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Start Your Journey</h2>
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

export default RegionPage;