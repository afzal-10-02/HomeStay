// src/components/DestinationPage.jsx
import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { homestayData } from "./data.js"; // Import your JSON
import BookingForm from "../components/BookingForm";

const DestinationPage = () => {
  const { region, destinationId } = useParams(); // Gets 'east' and 'gangtok'
  const [selectedHomestay, setSelectedHomestay] = useState(null);
  
  // 1. Find the Region Data
  const regionData = homestayData[region];

  // 2. Find the Specific Destination Data (e.g., Gangtok object)
  // We compare the URL param (destinationId) with the end of the 'link' property or name
  const destinationData = regionData?.destinations.find(dest => {
    // Logic: Clean the link path to match the destinationId
    // e.g., "/homestay/east/gangtok" becomes "gangtok"
    const slug = dest.link.split('/').pop(); 
    return slug.toLowerCase() === destinationId.toLowerCase();
  });

  // Safety: If data isn't found, redirect or show error
  if (!regionData || !destinationData) {
    return <div className="container">Destination not found</div>;
  }

  return (
    <div className="homestay-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url(${destinationData.image})`, // Uses the destination's main image
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1>{destinationData.name} Homestays</h1>
          <p>{destinationData.description}</p>
          
          {/* Dynamic Breadcrumbs */}
          <div className="breadcrumbs">
            <Link className="contact-link" to="/">Home</Link>
            <i className="fa fa-angle-right" style={{margin: "0 10px"}}></i>
            <Link className="contact-link" to={`/homestay/${region}`}>
               {regionData.title.replace(" Homestays", "")}
            </Link>
            <i className="fa fa-angle-right" style={{margin: "0 10px"}}></i>
            <span>{destinationData.name}</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-section">
        <div className="container">
          <h2>Welcome to {destinationData.name}</h2>
          <p>{destinationData.description}. Choose from our curated selection of homestays below.</p>
        </div>
      </section>

      {/* Homestay Listings */}
      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays in {destinationData.name}</h2>

          <div className="homestay-grid">
            {/* Check if homestays exist, then map */}
            {destinationData.homestays && destinationData.homestays.length > 0 ? (
              destinationData.homestays.map((stay) => (
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

                    <ul>
                      {stay.amenities.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>

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
              ))
            ) : (
              <p>No homestays currently listed for this location.</p>
            )}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
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

export default DestinationPage;