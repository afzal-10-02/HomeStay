import { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages, galleryCategories } from '../data/destinationsData';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let nextIndex;
    
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      nextIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <motion.section
      className="gallery-section"
      style={{ paddingTop: "115px" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        {/* Page Header */}
        <motion.div className="page-header" variants={itemVariants}>
          <h1>Our Gallery</h1>
          <p>Explore the beauty of Sikkim through our lens</p>
        </motion.div>

        {/* Gallery Section */}
        <div className="gallery-main">
          {/* Category Filter - FIXED: Changed from 'categories' to 'galleryCategories' */}
          <motion.div 
            className="gallery-filters"
            variants={itemVariants}
          >
            {galleryCategories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`fas ${category.icon}`}></i>
                {category.name}
                <span className="count-badge">{category.count}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="gallery-grid"
            layout
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                onClick={() => openLightbox(image)}
              >
                <div className="image-container">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h4>{image.title}</h4>
                      <p>{image.description}</p>
                      <div className="view-btn">
                        <i className="fas fa-expand"></i>
                        <span>View Full</span>
                      </div>
                    </div>
                    <div className="category-tag">
                      <i className={`fas ${
                        image.category === 'rooms' ? 'fa-bed' :
                        image.category === 'views' ? 'fa-mountain' :
                        image.category === 'garden' ? 'fa-tree' :
                        image.category === 'dining' ? 'fa-utensils' :
                        image.category === 'interior' ? 'fa-home' : 'fa-couch'
                      }`}></i>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div 
            className="view-more-container"
            variants={itemVariants}
          >
            <motion.button
              className="btn btn-dark btn-lg rounded-3 px-4 py-2 about-btn w-25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-images"></i>
              View Full Gallery
            </motion.button>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && selectedImage && (
          <motion.div
            className="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button
  className="position-absolute top-0 end-0 mt-4 me-4 md:mt-6 md:me-6 z-3 p-1 rounded-pill text-white d-flex align-items-center justify-content-center shadow-lg transition-all"
  style={{ 
    width: '36px', 
    height: '36px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    backgroundColor: '#1a4d42',
    border: 'none'
  }}
  onClick={closeLightbox}
  aria-label="Close lightbox"
>
  ×
</button>
              
              <div className="lightbox-image-container">
                <img src={selectedImage.src} alt={selectedImage.alt} />
                
                <button 
                  className="nav-btn prev-btn"
                  onClick={() => navigateImage('prev')}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                
                <button 
                  className="nav-btn next-btn"
                  onClick={() => navigateImage('next')}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <div className="image-counter">
                  {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Gallery;