import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import HomestayCard from "../../components/HomestayCard";
import "../../index.css";

const Rinchenpong = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Silent Valley Homestay",
      location: "Rinchenpong, West Sikkim",
      price: "₹1,800/night",
      rating: "4.8/5",
      image: "/assets/homestay/silent_valley.png",
      description: "Quiet and peaceful retreat hidden in the forests of Rinchenpong. Perfect for meditation and nature walks.",
      amenities: ["Forest View", "Organic Food", "Meditation Spot", "Trekking"],
      contact: "+91 98765 43234"
    },
    {
      id: 2,
      name: "Himalayan View Retreat",
      location: "Upper Rinchenpong, West Sikkim",
      price: "₹2,200/night",
      rating: "4.9/5",
      image: "/assets/homestay/upper_rinchenpong.png",
      description: "Wake up to unobstructed views of the Kanchenjunga range. A luxury homestay experience in the lap of nature.",
      amenities: ["Kanchenjunga View", "Hot Water", "Parking", "Local Guide"],
      contact: "+91 98765 43235"
    }

  ];

  return (
    <div className="homestay-page">
      <section className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/gallery/Breadcrumb.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content px-4">
          <h1>Rinchenpong Homestays</h1>
          <p>Historical village with stunning Himalayan views</p>
          <div className="breadcrumb-nav">
            <Link className="breadcrumb-link" to="/">
              <i className="fas fa-home"></i> Home
            </Link>
            <i className="fas fa-angle-right breadcrumb-separator"></i>
            <span className="breadcrumb-current">Rinchenpong</span>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Rinchenpong</h2>
          <p>
            Rinchenpong is a historical village in West Sikkim, known for its 
            ancient monasteries and panoramic views of Kanchenjunga. Its pristine 
            forests and serene environment make it a top choice for travelers 
            seeking peace away from the crowds.
          </p>
        </div>
      </section>

      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays in Rinchenpong</h2>
          <div className="row g-4 justify-content-center">
            {homestays.map((stay) => (
              <div key={stay.id} className="col-12 col-md-6 col-lg-4">
                <HomestayCard 
                    stay={stay} 
                    onBook={(stay) => setSelectedHomestay(stay)} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Rinchenpong;