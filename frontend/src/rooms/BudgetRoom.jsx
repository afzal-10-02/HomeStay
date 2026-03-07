import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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
      "/assets/rooms/budget1.avif",
      "/assets/rooms/budget2.avif",
      "/assets/rooms/budget3.avif",
      "/assets/rooms/budget4.jpeg",
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

  // State for lightbox modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open lightbox with selected image
  const openLightbox = (imageIndex) => {
    setSelectedImage(room.images[imageIndex]);
    setCurrentImageIndex(imageIndex);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Navigate to next image
  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % room.images.length;
    setSelectedImage(room.images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  // Navigate to previous image
  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? room.images.length - 1 : currentImageIndex - 1;
    setSelectedImage(room.images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  // Add event listener for keyboard when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage, currentImageIndex]);

  return (
    <motion.div
      className="room-detail-page budget-room"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section
        className="room-hero d-flex align-items-center justify-content-center"
        style={{ 
          backgroundImage: `url(${room.images[0]})`,
          height: '65vh',
          minHeight: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
        variants={itemVariants}
      >
        <div 
          className="room-hero-overlay position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(135deg, #212529d1 0%, #212529ba 100%)'
          }}
        />
        <div className="room-hero-content text-center text-white position-relative z-2 pt-6">
          <h1 className="display-3 fw-bold mb-4">{room.title}</h1>
          <div className="price-container d-flex align-items-center justify-content-center gap-3 flex-wrap mb-4">
            {room.discountedPrice && (
              <span className="original-price fs-4 text-white-50 text-decoration-line-through">
                ₹{room.price}/night
              </span>
            )}
            <span 
              className="room-price display-4 fw-bolder text-rgb-white"
            >
              ₹{room.discountedPrice || room.price}/night
            </span>
            {room.discount && (
              <span 
                className="discount-badge rounded-pill px-3 py-2 fw-semibold"
                style={{
                  background: 'linear-gradient(135deg, #F4A261, #E9C46A)',
                  boxShadow: '0 4px 12px rgba(244, 162, 97, 0.3)'
                }}
              >
                {room.discount}
              </span>
            )}
          </div>
          <p className="room-description fs-5 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            {room.description}
          </p>
          <div className="room-stats d-flex justify-content-center gap-4 flex-wrap mt-4">
            <span 
              className="stat-item d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <i className="fas fa-users" style={{ color: '#fff' }}></i> {room.capacity}
            </span>
            <span 
              className="stat-item d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <i className="fas fa-expand-arrows-alt" style={{ color: '#ffffff' }}></i> {room.size}
            </span>
            <span 
              className="stat-item d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <i className="fas fa-bed" style={{ color: '#ffffff' }}></i> {room.bedType}
            </span>
            <span 
              className="stat-item d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <i className="fas fa-star" style={{ color: '#ffffff' }}></i> {room.rating} ({room.reviews} reviews)
            </span>
          </div>
        </div>
      </motion.section>

      {/* Room Details */}
      <section 
        className="room-details-section py-5"
        style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #F7F9F8 100%)' }}
      >
        <div className="container">
          <motion.div className="row g-4" variants={itemVariants}>
            <div className="col-lg-7">
              <div className="room-info">
                <h2 
                  className="mb-4"
                  style={{ 
                    paddingBottom: '10px'
                  }}
                >
                  Room Overview
                </h2>
                <p className="room-full-description fs-6 mb-4" style={{ color: '#6B7280' }}>
                  {room.detailedDescription}
                </p>
                
                <div 
                  className="room-meta p-4 mb-4 rounded"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 111, 92, 0.1) 0%, rgba(58, 161, 126, 0.05) 100%)',
                    borderLeft: '5px solid #1E6F5C'
                  }}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="meta-item">
                        <i className="fas fa-users fs-4" style={{ color: '#1E6F5C' }}></i>
                        <strong className="me-2" style={{ color: '#1F2933' }}>Capacity:</strong> 
                        <span style={{ color: '#6B7280' }}>{room.capacity}</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="meta-item">
                        <i className="fas fa-expand-arrows-alt fs-4" style={{ color: '#1E6F5C' }}></i>
                        <strong className="me-2" style={{ color: '#1F2933' }}>Size:</strong> 
                        <span style={{ color: '#6B7280' }}>{room.size}</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="meta-item">
                        <i className="fas fa-bed fs-4" style={{ color: '#1E6F5C' }}></i>
                        <strong className="me-2" style={{ color: '#1F2933' }}>Bed Type:</strong> 
                        <span style={{ color: '#6B7280' }}>{room.bedType}</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="meta-item">
                        <i className="fas fa-door-open fs-4" style={{ color: '#1E6F5C' }}></i>
                        <strong className="me-2" style={{ color: '#1F2933' }}>Category:</strong> 
                        <span style={{ color: '#6B7280' }}>Budget Room</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-divider mb-4">
                  <h3 className="h4 mb-3" style={{ color: '#1F2933' }}>
                    <i className="fas fa-check-circle me-2" style={{ color: 'rgb(30 111 92)' }}></i> Room Features
                  </h3>
                  <div className="row g-2">
                    {room.features.map((feature, index) => (
                      <div key={index} className="col-md-6">
                        <div 
                          className="p-3 mb-2 rounded"
                          style={{
                            borderLeft: '4px solid rgb(30 111 92 / 80%)',
                            background: 'linear-gradient(to right, #fff, #fffaf0)'
                          }}
                        >
                          <i className="fas fa-check-circle me-2" style={{ color: '#1E6F5C' }}></i> 
                          <span style={{ color: '#1F2933' }}>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="room-gallery">
                <h3 className="h4 mb-3" style={{ color: '#1F2933' }}>Room Gallery</h3>
                <div className="gallery-grid row g-2">
                  {room.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`col-${index === 0 ? '12' : '6'} ${index === 0 ? 'mb-2' : ''}`}
                    >
                      <div 
                        className="gallery-item position-relative overflow-hidden rounded"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: index === 0 ? '300px' : '200px',
                          cursor: 'pointer'
                        }}
                        onClick={() => openLightbox(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                      >
                        <div 
                          className="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3"
                          style={{
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                            transform: 'translateY(100%)',
                            transition: 'transform 0.3s ease'
                          }}
                        >
                          <span className="image-number text-white fw-semibold">
                            {index + 1}/{room.images.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="gallery-note text-center mt-3 fst-italic" style={{ color: '#6B7280' }}>
                  Click on images to view in full size
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="lightbox-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            backdropFilter: 'blur(5px)'
          }}
          onClick={closeLightbox}
        >
          <div 
            className="lightbox-content position-relative"
            style={{ maxWidth: '90%', maxHeight: '90%' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="close-btn position-absolute top-0 end-0 m-3 bg-dark border-0 text-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', zIndex: 10000 }}
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <i className="fas fa-times fs-4"></i>
            </button>

            {/* Navigation Buttons */}
            {room.images.length > 1 && (
              <>
                <button
                  className="nav-btn prev position-absolute top-50 start-0 translate-middle-y m-3 bg-dark border-0 text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px', zIndex: 10000 }}
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <i className="fas fa-chevron-left fs-4"></i>
                </button>
                <button
                  className="nav-btn next position-absolute top-50 end-0 translate-middle-y m-3 bg-dark border-0 text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px', zIndex: 10000 }}
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <i className="fas fa-chevron-right fs-4"></i>
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={selectedImage}
              alt={`Budget Room - Image ${currentImageIndex + 1}`}
              className="img-fluid"
              style={{ 
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '12px'
              }}
            />

            {/* Image Counter */}
            <div 
              className="image-counter position-absolute bottom-0 start-50 translate-middle-x mb-3 px-3 py-2 bg-dark bg-opacity-75 text-white rounded-pill"
              style={{ zIndex: 10000 }}
            >
              <span className="fw-semibold">
                {currentImageIndex + 1} / {room.images.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Homestay Rooms Section */}
      <div className="py-5" style={{ backgroundColor: '#F7F9F8' }}>
        <HomestayRooms />
      </div>

      {/* Features Grid */}
      <div 
        className="sikkim-layout1 py-5"
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.5,
            pointerEvents: 'none'
          }}
        />
        
        {/* Main Heading */}
        <div className="sikkim-header text-center mb-5">
          <motion.h2
            className="display-4 text-dark fw-bold mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <i className="fas fa-mountain me-3" style={{ color: 'rgb(30 111 92)' }}></i> Discover Sikkim's Magic
          </motion.h2>
          <motion.p
            className="fs-5 mx-auto"
            style={{ maxWidth: '600px', color: 'rgba(255, 255, 255, 0.8)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Experience the perfect blend of Himalayan beauty, culture, and hospitality
          </motion.p>
        </div>

        {/* Main Container */}
        <div className="container">
          <div className="row g-4">
            {/* Left Column: Features */}
            <div className="col-lg-4">
              <motion.h3
                className="h3 text-dark mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <i className="fas fa-star me-2" style={{ color: 'rgb(44 136 94)' }}></i> Why Choose Us
              </motion.h3>
              <div className="d-flex flex-column gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-tile p-3 rounded"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="tile-icon d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          background: ' linear-gradient(135deg, rgb(234 234 239), rgb(231 222 222))',
                          width: '60px',
                          height: '60px',
                          fontSize: '1.8rem',
                          color: '#1F2933'
                        }}
                      >
                        {feature.icon}
                      </div>
                      <div className="tile-content">
                        <h4 className="h5 text-white mb-1">{feature.title}</h4>
                        <p className="mb-0 text-dark" >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Center Column: Image with Overlay */}
            <div className="col-lg-5">
              <motion.h3
                className="h3 text-dark mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <i className="fas fa-camera me-2" style={{ color: 'rgb(44 136 94)' }}></i> Himalayan Views
              </motion.h3>
              <div className="image-wrapper position-relative rounded overflow-hidden mb-4" style={{ 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}>
                <img
                  src="/assets/gallery/Mountainview.avif"
                  alt="Sikkim landscape"
                  className="img-fluid w-100"
                  style={{ height: '400px', objectFit: 'cover' }}
                  loading="lazy"
                />
                
                {/* Overlay Cards - Stacked Design */}
                <div className="card-stack position-absolute top-0 start-0 p-3">
                  {overlayCards.map((card, index) => (
                    <motion.div
                      key={index}
                      className="stack-card d-inline-flex align-items-center gap-2 px-3 py-2 mb-2 rounded-pill"
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        minWidth: '180px',
                        transform: `translateY(${index * -15}px)`,
                        zIndex: overlayCards.length - index
                      }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      whileHover={{ x: 10 }}
                    >
                      <i className={`${card.icon}`} style={{ color: '#1E6F5C' }}></i>
                      <span className="fw-semibold" style={{ color: '#1F2933' }}>{card.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="floating-badge position-absolute bottom-0 end-0 m-3 d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-bold"
                  style={{
                    background: 'linear-gradient(135deg, rgb(30, 111, 92) 0%, rgb(58, 161, 126) 100%)',
                    color: '#ffffff',
                    boxShadow: '0 8px 20px rgba(233, 196, 106, 0.3)',
                    zIndex: 3
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <i className="fas fa-award"></i>
                  <span>Best Budget 2024</span>
                </motion.div>
              </div>

              {/* Bottom Testimonial */}
              <motion.div
                className="testimonial-box p-4 rounded"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="testimonial-content">
                  <i className="fas fa-quote-left fs-3 mb-3 d-block" style={{ color: 'rgb(40 129 104)' }}></i>
                  <p className="text-dark fs-5 mb-3 fst-italic">
                    "Great value for money and wonderful hospitality!"
                  </p>
                  <div className="guest-info d-flex justify-content-between align-items-center">
                    <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Priya Singh</span>
                    <span className="fw-medium text-dark">From Bangalore</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Additional Info */}
            <div className="col-lg-3">
              <motion.h3
                className="h3 text-dark mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <i className="fas fa-info-circle me-2" style={{ color: 'rgb(30 111 92)' }}></i> More Information
              </motion.h3>
              
              {/* Sikkim Specials */}
              <motion.div
                className="sikkim-special p-3 mb-4 rounded"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="h5 text-white mb-3">Budget Travel Tips</h4>
                <ul className="special-list list-unstyled mb-0">
                  <li className="py-2 d-flex align-items-center gap-3 border-bottom border-light border-opacity-25">
                    <i className="fas fa-leaf" style={{ color: 'rgb(30 111 92 / 94%)' }}></i>
                    <span className="text-dark">Explore Local Markets</span>
                  </li>
                  <li className="py-2 d-flex align-items-center gap-3 border-bottom border-light border-opacity-25">
                    <i className="fas fa-hiking" style={{ color: 'rgb(30 111 92 / 94%)' }}></i>
                    <span className="text-dark">Free Nature Walks</span>
                  </li>
                  <li className="py-2 d-flex align-items-center gap-3 border-bottom border-light border-opacity-25">
                    <i className="fas fa-utensils" style={{ color: 'rgb(30 111 92 / 94%)' }}></i>
                    <span className="text-dark">Local Food Stalls</span>
                  </li>
                  <li className="py-2 d-flex align-items-center gap-3">
                    <i className="fas fa-map" style={{ color: 'rgb(30 111 92 / 94%)' }}></i>
                    <span className="text-dark">Budget Treks</span>
                  </li>
                </ul>
              </motion.div>

              {/* Weather Widget */}
              <motion.div
                className="weather-widget p-3 mb-4 rounded d-flex align-items-center gap-3 text-white"
                style={{
                  background: 'linear-gradient(135deg, #1E6F5C 0%, #3AA17E 100%)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="weather-icon fs-1" style={{ opacity: 0.9 }}>⛅</div>
                <div className="weather-info">
                  <span className="temp d-block fs-2 fw-bold">18°C</span>
                  <span className="location d-block">Gangtok</span>
                  <span className="desc d-block fs-6 fst-italic" style={{ opacity: 0.8 }}>
                    Perfect for trekking
                  </span>
                </div>
              </motion.div>

              {/* Quick Booking */}
              <motion.div
                className="booking-prompt p-4 rounded text-center"
                style={{
                  background: 'linear-gradient(135deg, #1E6F5C, #3AA17E)',
                  color: 'white'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="h5 fw-bold mb-2">Ready to Visit?</h4>
                <p className="mb-3" style={{ opacity: 0.9 }}>
                  Book your budget stay in Sikkim now
                </p>
                <button 
                  className="availability-btn btn rounded-pill px-4 py-2 fw-semibold w-100"
                  style={{ 
                    background: 'white',
                    color: '#1E6F5C',
                    border: 'none'
                  }}
                >
                  Check Availability
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BudgetRoom;