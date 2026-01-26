import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';
import HomestayRooms from './HomestayRooms';

const BudgetRoom = () => {
  // Local room data
  const room = {
    id: 1,
    slug: "budget",
    title: "Budget Room",
    name: "Budget Room",
    description: "Affordable and comfortable rooms perfect for budget travelers and backpackers. Clean, cozy spaces with essential amenities at unbeatable prices.",
    detailedDescription: "Our Budget Rooms are designed for travelers seeking comfort without breaking the bank. These compact, well-appointed rooms offer essential amenities including a comfortable bed, private bathroom, and window with views. Perfect for solo travelers or couples looking to maximize their travel budget while enjoying quality accommodation.",
    price: "1800",
    discountedPrice: "1500",
    discount: "₹300 off",
    size: "200 sq ft",
    maxGuests: "1-2 Adults",
    capacity: "1-2 Adults",
    bedType: "Single or Double Bed",
    category: "budget",
    features: [
      "Budget-friendly pricing",
      "Clean and comfortable",
      "Private bathroom",
      "Window with views",
      "Essential amenities",
      "Free Wi-Fi"
    ],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80"
    ],
    rating: 4.4,
    reviews: 67,
    available: true,
    facilities: ["Free Wi-Fi", "Shared Kitchen", "Lounge Area", "Laundry Service"]
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
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Best value for money in Sikkim'
    },
    {
      icon: '🌄',
      title: 'Mountain Access',
      description: 'Gateway to Himalayan adventures'
    },
    {
      icon: '🤝',
      title: 'Community Vibes',
      description: 'Meet travelers from around the world'
    },
    {
      icon: '✨',
      title: 'Clean & Cozy',
      description: 'Well-maintained budget accommodation'
    }
  ];

  const overlayCards = [
    { icon: 'fas fa-hand-holding-usd', text: 'Budget Friendly' },
    { icon: 'fas fa-door-open', text: 'Cozy Room' },
    { icon: 'fas fa-wifi', text: 'Free Wi-Fi' }
  ];

  return (
    <motion.div
      className="room-detail-page budget-room"
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
                  <strong>Category:</strong> Budget Room
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
                <span>Best Budget 2024</span>
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
                <p>"Great value for money and wonderful hospitality!"</p>
                <div className="guest-info">
                  <span>Priya Singh</span>
                  <span className="location">From Bangalore</span>
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
              <h4>Budget Travel Tips</h4>
              <ul className="special-list">
                <li><i className="fas fa-leaf"></i> Explore Local Markets</li>
                <li><i className="fas fa-hiking"></i> Free Nature Walks</li>
                <li><i className="fas fa-utensils"></i> Local Food Stalls</li>
                <li><i className="fas fa-map"></i> Budget Treks</li>
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
              <p>Book your budget stay in Sikkim now</p>
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

export default BudgetRoom;
