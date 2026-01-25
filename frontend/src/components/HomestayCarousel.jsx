// src/components/HomestayCarousel.jsx
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const HomestayCarousel = ({ data, loading = false, error = null }) => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const carouselRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const toggleDescription = (id) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const nextSlide = () => {
    if (data && data.properties) {
      setCurrentIndex(prev => 
        prev >= data.properties.length - slidesToShow ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (data && data.properties) {
      setCurrentIndex(prev => 
        prev === 0 ? Math.max(0, data.properties.length - slidesToShow) : prev - 1
      );
    }
  };

  // Calculate visible properties
  const visibleProperties = data?.properties 
    ? data.properties.slice(currentIndex, currentIndex + slidesToShow)
    : [];

  if (loading) {
    return (
      <div className="carousel-loading">
        <div className="carousel-spinner"></div>
        <p>Loading amazing stays...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="carousel-error">
        <p className="error-message">Error: {error}</p>
        <button className="retry-button" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  if (!data || !data.properties || data.properties.length === 0) {
    return (
      <div className="carousel-empty">
        <p>No properties available at the moment.</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="homestay-carousel-wrapper"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      ref={carouselRef}
    >
      {/* Carousel Header */}
      <div className="carousel-header">
        <h2 className="carousel-title">{data.title}</h2>
        <div className="carousel-indicators">
          <span className="current-slide">{currentIndex + 1}</span>
          <span className="total-slides">/{data.properties.length}</span>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="carousel-container">
        {/* Previous Button */}
        <motion.button 
          className="carousel-button prev-button"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <svg className="carousel-arrow" viewBox="0 0 24 24">
            <path d="M14.09 19.24a.87.87 0 0 1-.64-.27l-6.06-6.06c-.25-.25-.39-.59-.39-.94s.12-.69.36-.94l6.06-6.06a.909.909 0 0 1 1.3 1.27l-.02.02-5.69 5.72 5.72 5.72c.35.35.36.91.02 1.27l-.02.02a.9.9 0 0 1-.64.27"></path>
          </svg>
        </motion.button>

        {/* Carousel Slides */}
        <div className="carousel-track">
          {visibleProperties.map((property) => (
            <motion.div 
              key={property.id}
              className="carousel-slide"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Property Card */}
              <div className="property-card">
                {/* Property Image */}
                <div className="property-image-container">
                  <img 
                    className="property-image"
                    src={property.image} 
                    alt={property.name}
                    loading="lazy"
                  />
                  <div className="property-badge">
                    <span className="rating-badge">
                      <svg className="star-icon" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {property.score}
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="property-details">
                  <h3 className="property-name">
                    <a href={property.link} className="property-link">
                      {property.name}
                    </a>
                  </h3>
                  <div className="property-location">
                    <svg className="location-icon" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{property.location}</span>
                  </div>

                  {/* Rating and Reviews */}
                  <div className="property-rating">
                    <div className="rating-text">
                      {property.rating} · {property.reviews} reviews
                    </div>
                  </div>

                  {/* Description */}
                  <div className="property-description">
                    <p className={expandedDescriptions[property.id] ? 'expanded' : 'collapsed'}>
                      {property.description}
                    </p>
                    {property.description.length > 100 && (
                      <button 
                        className="show-more-button"
                        onClick={() => toggleDescription(property.id)}
                      >
                        {expandedDescriptions[property.id] ? 'Show less' : 'Show more'}
                      </button>
                    )}
                  </div>

                  {/* Price */}
                  {property.price && (
                    <div className="property-price">
                      <div className="price-from">From</div>
                      <div className="price-amount">{property.price}</div>
                      <div className="price-label">{property.priceLabel}</div>
                    </div>
                  )}
                </div>

                {/* Book Now Button */}
                <div className="property-actions">
                  <motion.button 
                    className="book-now-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <motion.button 
          className="carousel-button next-button"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <svg className="carousel-arrow" viewBox="0 0 24 24">
            <path d="M9.91 19.24c.24 0 .47-.09.64-.27l6.06-6.06c.25-.25.39-.59.39-.94s-.12-.69-.36-.94l-6.06-6.06a.909.909 0 0 0-1.3 1.27l.02.02 5.69 5.72-5.72 5.72c-.35.35-.36.91-.02 1.27l.02.02c.17.17.4.27.64.27"></path>
          </svg>
        </motion.button>
      </div>

      {/* Carousel Dots */}
      <div className="carousel-dots">
        {Array.from({ length: Math.ceil(data.properties.length / slidesToShow) }).map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === Math.floor(currentIndex / slidesToShow) ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * slidesToShow)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="carousel-footer">
        <button className="view-all-button">
          View All {data.properties.length} Properties
          <svg className="arrow-right" viewBox="0 0 24 24" width="20" height="20">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default HomestayCarousel;