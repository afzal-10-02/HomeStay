import { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: "/assets/gallery/Mountainview.avif",
      alt: "Mountain View Room",
      category: "rooms",
      title: "Mountain View Suite",
      description: "Panoramic Himalayan views from private balcony"
    },
    {
      id: 2,
      src: "/assets/gallery/traditionalcottage.jpg",
      alt: "Traditional Cottage",
      category: "rooms",
      title: "Traditional Sikkimese Cottage",
      description: "Authentic local architecture with modern comforts"
    },
    {
      id: 3,
      src: "/assets/gallery/diningarea.jpg",
      alt: "Dining Area",
      category: "dining",
      title: "Cozy Dining Area",
      description: "Enjoy local cuisine in warm ambiance"
    },
    {
      id: 4,
      src: "/assets/gallery/serenegarden.avif",
      alt: "Garden View",
      category: "garden",
      title: "Serene Garden",
      description: "Peaceful garden with seasonal flowers"
    },
    {
      id: 5,
      src: "/assets/gallery/himalaya.jpeg",
      alt: "Himalayan View",
      category: "views",
      title: "Sunrise Over Himalayas",
      description: "Breathtaking morning views"
    },
    {
      id: 6,
      src: "/assets/gallery/traditional-sikkimese.jpg",
      alt: "Interior Design",
      category: "interior",
      title: "Traditional Interior",
      description: "Handcrafted wooden furniture"
    },
    {
      id: 7,
      src: "/assets/gallery/lounge.jpg",
      alt: "Common Area",
      category: "common",
      title: "Lounge Area",
      description: "Cozy fireplace lounge"
    },
    {
      id: 8,
      src: "/assets/gallery/outdoor-seating.jpg",
      alt: "Outdoor Seating",
      category: "garden",
      title: "Outdoor Seating",
      description: "Relax in nature's lap"
    },
    {
      id: 9,
      src: "/assets/gallery/modern-bathroom.avif",
      alt: "Bathroom",
      category: "rooms",
      title: "Modern Bathroom",
      description: "Clean and spacious facilities"
    },
    {
      id: 10,
      src: "/assets/gallery/cultural-artifact.jpg",
      alt: "Cultural Decor",
      category: "interior",
      title: "Cultural Artifacts",
      description: "Local art and craftsmanship"
    },
    {
      id: 11,
      src: "/assets/gallery/stary-night.webp",
      alt: "Night View",
      category: "views",
      title: "Starry Night",
      description: "Clear Himalayan night sky"
    },
    {
      id: 12,
      src: "/assets/gallery/morning-breakfast.jpg",
      alt: "Breakfast Setup",
      category: "dining",
      title: "Morning Breakfast",
      description: "Fresh local produce"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: 'fa-images', count: galleryImages.length },
    { id: 'rooms', name: 'Rooms', icon: 'fa-bed', count: galleryImages.filter(img => img.category === 'rooms').length },
    { id: 'views', name: 'Views', icon: 'fa-mountain', count: galleryImages.filter(img => img.category === 'views').length },
    { id: 'garden', name: 'Garden', icon: 'fa-tree', count: galleryImages.filter(img => img.category === 'garden').length },
    { id: 'dining', name: 'Dining', icon: 'fa-utensils', count: galleryImages.filter(img => img.category === 'dining').length },
    { id: 'interior', name: 'Interior', icon: 'fa-home', count: galleryImages.filter(img => img.category === 'interior').length },
    { id: 'common', name: 'Common Areas', icon: 'fa-couch', count: galleryImages.filter(img => img.category === 'common').length }
  ];

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
          {/* Category Filter */}
          <motion.div 
            className="gallery-filters"
            variants={itemVariants}
          >
            {categories.map((category, index) => (
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
              className="view-more-btn btn btn-primary"
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
              <button className="close-btn" onClick={closeLightbox}>×</button>
              
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

        {/* Call to Action */}
        <motion.div className="gallery-cta" variants={itemVariants}>
          <h2>Experience Sikkim Yourself</h2>
          <p>Book your stay and create your own memories in the Himalayas</p>
          <div className="cta-buttons">
            <a href="/rooms" className="btn-primary">View Rooms</a>
            <a href="/contact" className="btn-secondary">Book Now</a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;