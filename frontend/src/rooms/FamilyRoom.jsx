import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';

const FamilyRoom = () => {
  // Local room data
  const room = {
    id: 2,
    slug: "family",
    title: "Family Room",
    name: "Family Room",
    description: "Comfortable and spacious rooms ideal for families, with extra beds and privacy. Perfect for families traveling together, offering ample space and child-friendly amenities.",
    detailedDescription: "Our Family Rooms are designed with families in mind, featuring two comfortable double beds and space for an extra rollaway bed. The room includes a separate seating area where the family can relax together after a day of exploring Sikkim. Special attention has been given to safety and convenience for guests with children.",
    price: "3800",
    discountedPrice: "3500",
    discount: "₹300 off",
    size: "450 sq ft",
    maxGuests: "4 Adults + 1 Child",
    capacity: "4 Adults + 1 Child",
    bedType: "2 Double Beds",
    category: "family",
    features: [
      "Spacious for family of 4-5",
      "Child safety features installed",
      "Separate seating area",
      "Extra bedding available",
      "Soundproof walls",
      "Baby crib on request"
    ],
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80"
    ],
    rating: 4.7,
    reviews: 94,
    available: true,
    facilities: ["Free Parking", "Free Wi-Fi", "Family Restaurant", "Play Area", "Laundry Service"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="room-detail-page family-room"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section
        className="room-hero"
        style={{ backgroundImage: `url(${room.images[0]})` }}
        variants={itemVariants}
      >
        <div className="room-hero-overlay">
          <div className="room-hero-content">
            <h1>{room.title}</h1>
            <div className="price-container">
              {room.discountedPrice && (
                <span className="original-price">₹{room.price}/night</span>
              )}
              <span className="room-price">₹{room.discountedPrice || room.price}/night</span>
              {room.discount && (
                <span className="discount-badge">{room.discount}</span>
              )}
            </div>
            <p className="room-description">{room.description}</p>
            <div className="room-stats">
              <span className="stat-item">
                <i className="fas fa-users"></i> {room.capacity}
              </span>
              <span className="stat-item">
                <i className="fas fa-expand-arrows-alt"></i> {room.size}
              </span>
              <span className="stat-item">
                <i className="fas fa-bed"></i> {room.bedType}
              </span>
              <span className="stat-item">
                <i className="fas fa-star"></i> {room.rating} ({room.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Room Details */}
      <section className="room-details-section">
        <div className="container">
          <motion.div className="room-details-grid" variants={itemVariants}>
            <div className="room-info">
              <h2>Room Overview</h2>
              <p className="room-full-description">{room.detailedDescription}</p>
              
              <div className="room-meta">
                <span className="meta-item">
                  <i className="fas fa-users"></i>
                  <strong>Capacity:</strong> {room.capacity}
                </span>
                <span className="meta-item">
                  <i className="fas fa-expand-arrows-alt"></i>
                  <strong>Size:</strong> {room.size}
                </span>
                <span className="meta-item">
                  <i className="fas fa-bed"></i>
                  <strong>Bed Type:</strong> {room.bedType}
                </span>
                <span className="meta-item">
                  <i className="fas fa-door-open"></i>
                  <strong>Category:</strong> Family Room
                </span>
              </div>

              <div className="section-divider">
                <h3>Room Features</h3>
                <ul className="features-list">
                  {room.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="section-divider">
                <h3>Additional Facilities</h3>
                <div className="facilities-list">
                  {room.facilities.map((facility, index) => (
                    <span key={index} className="facility-tag">
                      <i className="fas fa-check"></i> {facility}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="room-gallery">
              <h3>Room Gallery</h3>
              <div className="gallery-grid">
                {room.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`gallery-item ${index === 0 ? 'main-image' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <div className="image-overlay">
                      <span className="image-number">{index + 1}/{room.images.length}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="gallery-note">Click on images to view in full size</p>
            </div>
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
};

// Simple Room Services Component (placed outside FamilyRoom but in same file)
const SimpleRoomServices = () => {
  const services = [
    { id: 1, name: "24/7 Room Service", price: "₹200", icon: "🍽️", category: "dining" },
    { id: 2, name: "Spa & Massage", price: "₹1500", icon: "💆", category: "wellness" },
    { id: 3, name: "Airport Transfer", price: "₹2500", icon: "🚗", category: "transport" },
    { id: 4, name: "Baby Sitting", price: "₹500/hour", icon: "👶", category: "family" },
    { id: 5, name: "Laundry Service", price: "₹300", icon: "👕", category: "wellness" },
    { id: 6, name: "Guided Tour", price: "₹4000", icon: "🗺️", category: "transport" },
    { id: 7, name: "Business Center", price: "Free", icon: "💼", category: "business" },
    { id: 8, name: "Special Occasion Setup", price: "₹2000", icon: "🎉", category: "dining" },
  ];

  return (
    <div className="room-services">
      <div className="services-header">
        <h3>Enhance Your Stay with Our Premium Services</h3>
        <p>Choose from a variety of additional services to make your stay more comfortable</p>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <div className="service-info">
              <h4>{service.name}</h4>
              <p>Professional service delivered to your room</p>
              <div className="service-meta">
                <span className={`service-category ${service.category}`}>
                  {service.category}
                </span>
                <span className="service-price">
                  {service.price}
                </span>
                <span className="service-duration">
                  <i className="fas fa-clock"></i> 24/7 Available
                </span>
              </div>
              <button className="service-book-btn">
                <i className="fas fa-plus"></i> Add Service
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="services-note">
        <p><i className="fas fa-info-circle"></i> All services can be booked through our concierge. Charges will be added to your final bill.</p>
      </div>
    </div>
  );
};

export default FamilyRoom;