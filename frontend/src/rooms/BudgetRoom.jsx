import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { roomsData } from '../data/roomsData';
import BookingForm from '../components/BookingForm';
import RoomServices from '../components/RoomServices';

const BudgetRoom = () => {
  const [activeImage, setActiveImage] = useState(0);
  const room = roomsData.find(room => room.id === 'budget');

  if (!room) {
    return (
      <motion.div
        className="room-not-found"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1>Room Not Found</h1>
          <p>The room you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    );
  }

  const galleryImages = [
    room.image,
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
        style={{ backgroundImage: `url(${room.image})` }}
        variants={itemVariants}
      >
        <div className="room-hero-overlay">
          <div className="room-hero-content">
            <h1>{room.name}</h1>
            <p className="room-price">₹{room.price}/night</p>
            <p className="room-description">{room.description}</p>
          </div>
        </div>
      </motion.section>
    
    <motion.div
      className="room-detail-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Hero Section */}
      <motion.section
        className="room-hero"
        variants={itemVariants}
      >
        <div className="hero-background">
          <img src={galleryImages[activeImage]} alt={room.name} />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <motion.div className="hero-header" variants={itemVariants}>
            <div className="room-badge">
              <span className="badge-text">Budget Friendly</span>
            </div>
            <h1 className="room-title">{room.name}</h1>
            <div className="room-price-tag">
              <span className="price">₹{room.price}</span>
              <span className="per-night">/night</span>
            </div>
            <p className="room-description">{room.description}</p>
          </motion.div>

          {/* Thumbnail Gallery */}
          <motion.div className="thumbnail-gallery" variants={itemVariants}>
            {galleryImages.map((image, index) => (
              <motion.button
                key={index}
                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={image} alt={`View ${index + 1}`} />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Room Details Section */}
      <section className="room-details-section">
        <div className="container">
          <div className="room-details-grid">
            {/* Room Information */}
            <motion.div className="room-info-card" variants={cardVariants}>
              <div className="card-header">
                <h2>Room Overview</h2>
                <div className="room-stats">
                  <div className="stat">
                    <i className="fas fa-users"></i>
                    <span>Max {room.maxGuests} guests</span>
                  </div>
                  <div className="stat">
                    <i className="fas fa-expand-arrows-alt"></i>
                    <span>{room.size}</span>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="features-section">
                  <h3>Room Features</h3>
                  <div className="features-grid">
                    {room.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="feature-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <i className="fas fa-check-circle"></i>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="amenities-section">
                  <h3>Amenities & Services</h3>
                  <div className="amenities-grid">
                    {room.amenities.map((amenity, index) => (
                      <motion.div
                        key={index}
                        className="amenity-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + room.features.length) * 0.1 }}
                      >
                        <i className="fas fa-concierge-bell"></i>
                        <span>{amenity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Card */}
            <motion.div className="booking-card" variants={cardVariants}>
              <div className="card-header">
                <h3>Book Your Stay</h3>
                <div className="price-summary">
                  <span className="price">₹{room.price}</span>
                  <span className="period">per night</span>
                </div>
              </div>
              <div className="card-content">
                <BookingForm roomId={room.id} roomName={room.name} />
              </div>
            </motion.div>
          </div>

          {/* Room Services */}
          <motion.div variants={itemVariants}>
            <RoomServices />
          </motion.div>
        </div>
      </section>

      {/* Additional Features Section */}
      <motion.section className="additional-features" variants={itemVariants}>
        <div className="container">
          <h2>Why Choose Our Budget Rooms?</h2>
          <div className="features-grid">
            <motion.div className="feature-card" variants={cardVariants}>
              <div className="feature-icon">
                <i className="fas fa-wallet"></i>
              </div>
              <h4>Affordable Luxury</h4>
              <p>Experience comfort and quality at budget-friendly prices</p>
            </motion.div>

            <motion.div className="feature-card" variants={cardVariants}>
              <div className="feature-icon">
                <i className="fas fa-mountain"></i>
              </div>
              <h4>Mountain Views</h4>
              <p>Wake up to breathtaking Himalayan scenery every morning</p>
            </motion.div>

            <motion.div className="feature-card" variants={cardVariants}>
              <div className="feature-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h4>Local Cuisine</h4>
              <p>Enjoy authentic Sikkimese meals prepared with local ingredients</p>
            </motion.div>

            <motion.div className="feature-card" variants={cardVariants}>
              <div className="feature-icon">
                <i className="fas fa-wifi"></i>
              </div>
              <h4>Free Wi-Fi</h4>
              <p>Stay connected with high-speed internet throughout your stay</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
     </motion.div>
  );
};

export default BudgetRoom;
