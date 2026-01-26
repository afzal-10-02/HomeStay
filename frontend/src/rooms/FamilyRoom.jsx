import { motion } from 'framer-motion';
import HomestayRooms from './HomestayRooms';

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
const features = [
    {
      icon: '🏔️',
      title: 'Mountain Views',
      description: 'Breathtaking Himalayan landscapes from every room'
    },
    {
      icon: '🍽️',
      title: 'Local Cuisine',
      description: 'Authentic Sikkimese food made with traditional recipes'
    },
    {
      icon: '🌱',
      title: 'Sustainable Living',
      description: 'Eco-friendly practices and community support'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Atmosphere',
      description: 'Warm hospitality and homely environment'
    }
  ];

  const overlayCards = [
    { icon: 'fas fa-mountain', text: 'Himalayan Views' },
    { icon: 'fas fa-home', text: 'Cozy Stay' },
    { icon: 'fas fa-utensils', text: 'Local Cuisine' }
  ];
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

      {/* Homestay Rooms Section */}
      <div style={{ width: '100%', padding: '40px 0', backgroundColor: '#f9f9f9' }}>
        <HomestayRooms />
      </div>

  {/* Features Grid */}
       <div className="sikkim-layout1">
  {/* Main Heading */}
  <div className="sikkim-header">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <i className="fas fa-mountain"></i> Discover Sikkim's Magic
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Experience the perfect blend of Himalayan beauty, culture, and hospitality
    </motion.p>
  </div>

  {/* Main Container */}
  <div className="sikkim-container">
    
    {/* Left Column: Features */}
    <div className="features-column">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <i className="fas fa-star"></i> Why Choose Us
      </motion.h3>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-tile"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="tile-icon">{feature.icon}</div>
          <div className="tile-content">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Center Column: Image with Overlay */}
    <div className="image-column">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <i className="fas fa-camera"></i> Himalayan Views
      </motion.h3>
      <div className="image-wrapper">
        <img
          src="/assets/gallery/Mountainview.avif"
          alt="Sikkim landscape"
          loading="lazy"
        />
        
        {/* Overlay Cards - Stacked Design */}
        <div className="card-stack">
          {overlayCards.map((card, index) => (
            <motion.div
              key={index}
              className="stack-card"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              whileHover={{ x: 10 }}
              style={{ 
                transform: `translateY(${index * -15}px)`,
                zIndex: overlayCards.length - index
              }}
            >
              <i className={card.icon}></i>
              <span>{card.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Floating Badge */}
        <motion.div
          className="floating-badge"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fas fa-award"></i>
          <span>Best Homestay 2024</span>
        </motion.div>
      </div>

      {/* Bottom Testimonial */}
      <motion.div
        className="testimonial-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="testimonial-content">
          <i className="fas fa-quote-left"></i>
          <p>"Most authentic Himalayan experience we've ever had!"</p>
          <div className="guest-info">
            <span>Rahul Sharma</span>
            <span className="location">From Delhi</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Right Column: Additional Info */}
    <div className="info-column">
      <motion.h3
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <i className="fas fa-info-circle"></i> More Information
      </motion.h3>
      
      {/* Sikkim Specials */}
      <motion.div
        className="sikkim-special"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h4>Sikkim Specials</h4>
        <ul className="special-list">
          <li><i className="fas fa-leaf"></i> Organic Tea Gardens</li>
          <li><i className="fas fa-hiking"></i> Guided Mountain Treks</li>
          <li><i className="fas fa-spa"></i> Hot Spring Access</li>
          <li><i className="fas fa-pray"></i> Monastery Visits</li>
        </ul>
      </motion.div>

      {/* Weather Widget */}
      <motion.div
        className="weather-widget"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="weather-icon">⛅</div>
        <div className="weather-info">
          <span className="temp">18°C</span>
          <span className="location">Gangtok</span>
          <span className="desc">Perfect for trekking</span>
        </div>
      </motion.div>

      {/* Quick Booking */}
      <motion.div
        className="booking-prompt"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <h4>Ready to Visit?</h4>
        <p>Check availability for your Himalayan retreat</p>
        <button className="availability-btn">
          Check Availability
        </button>
      </motion.div>
    </div>
  </div>
</div>
        
    </motion.div>
  );
};

export default FamilyRoom;