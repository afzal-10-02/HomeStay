import { motion } from 'framer-motion';
import { roomsData } from '../data/roomsData';
import BookingForm from '../components/BookingForm';
import RoomServices from '../components/RoomServices';
import { Link } from "react-router-dom";

const CottageRoom = () => {
  const room = roomsData.find(room => room.id === 'cottage');

  if (!room) {
    return <div>Room not found</div>;
  }

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
      className="room-detail-page cottage-room"
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

      {/* Room Details */}
      <section className="room-details-section">
        <div className="container">
          <motion.div className="room-details-grid" variants={itemVariants}>
            <div className="room-info">
              <h2>Room Overview</h2>
              <div className="room-meta">
                <span className="meta-item">👥 Max {room.maxGuests} guests</span>
                <span className="meta-item">📐 {room.size}</span>
              </div>

              <h3>Room Features</h3>
              <ul className="features-list">
                {room.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>

              <h3>Amenities</h3>
              <ul className="amenities-list">
                {room.amenities.map((amenity, index) => (
                  <li key={index}>• {amenity}</li>
                ))}
              </ul>
            </div>

            <div className="room-gallery">
              <div className="gallery-grid">
                <img src={room.image} alt={room.name} className="main-image" />
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" alt="Room view 1" />
                <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop" alt="Room view 2" />
                <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop" alt="Room view 3" />
              </div>
            </div>
          </motion.div>

          {/* Room Services */}
          <motion.div variants={itemVariants}>
            <RoomServices />
          </motion.div>

          {/* Booking Form */}
          <motion.div className="booking-section" variants={itemVariants}>
            <h2>Book Your Stay</h2>
            <BookingForm roomId={room.id} roomName={room.name} />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CottageRoom;