import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import HomestayCard from "../../components/HomestayCard";
import "../../index.css";

const Jorethang = () => {
  const [selectedHomestay, setSelectedHomestay] = useState(null);

  const homestays = [
    {
      id: 1,
      name: "Rangeet Riverview Homestay",
      location: "Jorethang, South Sikkim",
      price: "₹1,800/night",
      rating: "4.7/5",
      image: "/assets/homestay/teesta_rafting.png",
      description: "Beautiful homestay on the banks of Rangeet River with a peaceful environment. Ideal for nature lovers and those seeking tranquility.",
      amenities: ["River View", "Fishing", "Free WiFi", "Traditional Meals"],
      contact: "+91 98765 43232"
    },
    {
      id: 2,
      name: "Jorethang Garden Stay",
      location: "Near Jorethang Market, South Sikkim",
      price: "₹1,500/night",
      rating: "4.5/5",
      image: "/assets/homestay/south.jpg",
      description: "Cozy stay with a beautiful garden and easy access to the local market. Experience genuine local hospitality in a green setting.",
      amenities: ["Garden", "Parking", "Hot Water", "Home-cooked Food"],
      contact: "+91 98765 43233"
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
          <h1>Jorethang Homestays</h1>
          <p>Gateway to West and South Sikkim along the scenic Rangeet River</p>
          <div className="breadcrumb-nav">
            <Link className="breadcrumb-link" to="/">
              <i className="fas fa-home"></i> Home
            </Link>
            <i className="fas fa-angle-right breadcrumb-separator"></i>
            <span className="breadcrumb-current">Jorethang</span>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Jorethang</h2>
          <p>
            Jorethang is a major town in South Sikkim located on the banks of the Rangeet River. 
            Known as the gateway to West Sikkim, it is famous for its mild climate and the 
            vibrant Maghey Mela organized every January. It's a perfect stop for travelers 
            looking to experience the bustling local culture alongside peaceful river views.
          </p>
        </div>
      </section>

      <section className="homestay-listings">
        <div className="container">
          <h2>Available Homestays in Jorethang</h2>
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

export default Jorethang;
