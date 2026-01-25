import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import BookingForm from '../components/BookingForm';

const DeluxeRoom = () => {
  const containerRef = useRef(null);
  
  // Sikkim-inspired deluxe room data
  const room = {
    id: 1,
    slug: "deluxe",
    title: "Kanchenjunga Deluxe Suite",
    name: "Kanchenjunga Deluxe Suite",
    description: "Experience luxury amidst the Himalayas with panoramic mountain views and traditional Sikkimese decor. Wake up to the sight of snow-capped peaks from your private balcony.",
    detailedDescription: `Our Deluxe Suite offers an authentic Himalayan luxury experience, blending modern comfort with traditional Sikkimese architecture. Each suite is thoughtfully designed with handcrafted wooden furniture, locally woven textiles, and breathtaking views of the Kanchenjunga range.

The suite features a separate living area with a traditional Bukhari (wood stove), perfect for cozy evenings. The bedroom opens to a private balcony where you can enjoy your morning tea while watching the sunrise over the Himalayas.`,
    price: "8500",
    discountedPrice: "7800",
    discount: "₹700 off",
    size: "650 sq ft",
    maxGuests: "2 Adults",
    capacity: "2 Adults",
    bedType: "King Bed with Canopy",
    category: "deluxe",
    features: [
      "Private balcony with mountain view",
      "Traditional Bukhari fireplace",
      "Handcrafted Sikkimese furniture",
      "Premium Himalayan toiletries",
      "Yak wool blankets & quilts",
      "24-hour butler service"
    ],
    amenities: [
      "King-size canopy bed with premium bedding",
      "Private balcony facing Kanchenjunga",
      "Traditional wood-burning fireplace",
      "Smart TV with streaming services",
      "Free high-speed Wi-Fi",
      "Air conditioning & underfloor heating",
      "Mini bar with local beverages",
      "Nespresso coffee machine with local tea selection",
      "Separate living area with sofa",
      "Walk-in rain shower & bathtub",
      "Yak wool bathrobes & slippers",
      "Traditional Sikkimese welcome kit"
    ],
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?w=1200&q=80",
      "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=1200&q=80"
    ],
    rating: 4.9,
    reviews: 127,
    available: true,
    facilities: ["Private Butler", "Mountain View Balcony", "Fireplace", "Luxury Bath Amenities", "24/7 Concierge"]
  };
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatAnimation = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Snow animation for different screen sizes
  useEffect(() => {
    const updateSnowflakes = () => {
      const snowflakes = document.querySelectorAll('.snowflake');
      snowflakes.forEach((flake) => {
        flake.style.left = `${Math.random() * 100}%`;
        flake.style.fontSize = `${Math.random() * 10 + 10}px`;
      });
    };

    updateSnowflakes();
    window.addEventListener('resize', updateSnowflakes);
    
    return () => {
      window.removeEventListener('resize', updateSnowflakes);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="room-detail-page deluxe-room"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Himalayan Hero Section */}
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

      {/* Room Details with Sikkim Aesthetic */}
      <section className="room-details-section">
        <div className="container">
          <div className="room-details-grid">
            {/* Left Column - Room Info */}
            <motion.div 
              className="room-info"
              variants={itemVariants}
            >
              <div className="section-header">
                <h2><i className="fas fa-mountain"></i> Suite Overview</h2>
                <div className="divider"></div>
              </div>
              
              <p className="room-full-description">{room.detailedDescription}</p>
              
              <motion.div 
                className="room-meta"
                whileHover={{ scale: 1.02 }}
              >
                {[
                  { icon: "fas fa-eye", label: "View", value: "Kanchenjunga Range" },
                  { icon: "fas fa-expand-arrows-alt", label: "Size", value: room.size },
                  { icon: "fas fa-fire", label: "Feature", value: "Traditional Bukhari" },
                  { icon: "fas fa-concierge-bell", label: "Service", value: "Private Butler" }
                ].map((item, index) => (
                  <span key={index} className="meta-item">
                    <i className={item.icon}></i>
                    <strong>{item.label}:</strong> {item.value}
                  </span>
                ))}
              </motion.div>

              {/* Sikkimese Features */}
              <motion.div 
                className="section-divider"
                variants={itemVariants}
              >
                <h3><i className="fas fa-gem"></i> Exclusive Features</h3>
                <ul className="features-list">
                  {room.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring" }}
                      variants={itemVariants}
                    >
                      <i className="fas fa-check-circle"></i> {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Luxury Amenities */}
              {/* <motion.div 
                className="section-divider"
                variants={itemVariants}
              >
                <h3><i className="fas fa-spa"></i> Luxury Amenities</h3>
                <div className="amenities-grid">
                  {room.amenities.map((amenity, index) => (
                    <motion.div 
                      key={index} 
                      className="amenity-item"
                      whileHover={{ scale: 1.05 }}
                      animate={floatAnimation.float}
                      variants={itemVariants}
                    >
                      <div className="amenity-icon">
                        {index === 0 && "👑"}
                        {index === 1 && "🏔️"}
                        {index === 2 && "🔥"}
                        {index === 3 && "📺"}
                        {index > 3 && "✨"}
                      </div>
                      <span>{amenity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div> */}
            </motion.div>

            {/* Right Column - Gallery */}
            <motion.div 
              className="room-gallery"
              variants={itemVariants}
            >
              <h3>
                <i className="fas fa-images"></i> Himalayan Views
              </h3>
              <div className="gallery-grid">
                {room.images.map((image, index) => (
                  <motion.div 
                    key={index} 
                    className={`gallery-item ${index === 0 ? 'main-image' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="image-overlay">
                      <span className="image-label">
                        {index === 0 && "🏔️ Main Suite"}
                        {index === 1 && "🔥 Fireplace"}
                        {index === 2 && "🛁 Bathroom"}
                        {index === 3 && "🍽️ Living Area"}
                        {index === 4 && "🌅 Balcony View"}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.p 
                className="gallery-note"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <i className="fas fa-info-circle"></i> Each image showcases authentic Sikkimese luxury
              </motion.p>
            </motion.div>
          </div>


        </div>
      </section>

      {/* Additional Himalayan Luxury Features */}
      <motion.section 
        className="additional-info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
          Himalayan Luxury Experiences
          </motion.h2>
          <div className="info-grid">
            {[
              {
                icon: "🔥",
                title: "Traditional Bukhari Evenings",
                desc: "Cozy evenings by traditional wood-burning fireplace with local storytelling"
              },
              {
                icon: "🏔️",
                title: "Sunrise Mountain Viewing",
                desc: "Private balcony sunrise sessions with hot Sikkimese tea service"
              },
              {
                icon: "🛁",
                title: "Herbal Bath Rituals",
                desc: "Luxury bath amenities infused with Himalayan herbs and flowers"
              },
              {
                icon: "👑",
                title: "24/7 Butler Service",
                desc: "Personalized service for all your needs throughout your stay"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="info-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <motion.div 
                  className="card-icon"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {item.icon}
                </motion.div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Floating Snow Animation */}
      <div className="snow-animation">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="snowflake"
            initial={{ y: -20 }}
            animate={{
              y: ['0vh', '100vh'],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            ❄️
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DeluxeRoom;