import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { testimonials } from "../data/roomsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

const sikkimDestinations = [
  {
    id: 1,
    name: "East Sikkim",
    place: "Gangtok",
    image: "https://images.unsplash.com/photo-1621405581887-3c3f8c0c2c5e?q=80&w=800",
    link: "/destinations/east-sikkim",
    region: "East Sikkim",
    altitude: "1,650m",
    description: "Capital city with vibrant culture and stunning views",
    rating: 4.8,
    reviews: 128,
    featured: true,
    price: "₹2,500/night"
  },
  {
    id: 2,
    name: "West Sikkim",
    place: "Pelling",
    image: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?q=80&w=800",
    link: "/destinations/west-sikkim",
    region: "West Sikkim",
    altitude: "2,150m",
    description: "Ancient monasteries and panoramic Himalayan views",
    rating: 4.7,
    reviews: 94,
    featured: true,
    price: "₹3,200/night"
  },
  {
    id: 3,
    name: "North Sikkim",
    place: "Lachen & Lachung",
    image: "https://images.unsplash.com/photo-1589187155472-0b7c55b6f7c5?q=80&w=800",
    link: "/destinations/north-sikkim",
    region: "North Sikkim",
    altitude: "2,700m",
    description: "Pristine lakes and snow-capped mountain retreats",
    rating: 4.9,
    reviews: 156,
    featured: true,
    price: "₹4,000/night"
  },
  {
    id: 4,
    name: "South Sikkim",
    place: "Namchi",
    image: "https://images.unsplash.com/photo-1615196534055-7aa6cfc8e7e0?q=80&w=800",
    link: "/destinations/south-sikkim",
    region: "South Sikkim",
    altitude: "1,500m",
    description: "Spiritual sites and tea garden experiences",
    rating: 4.6,
    reviews: 87,
    featured: true,
    price: "₹2,200/night"
  },
  {
    id: 5,
    name: "Yumthang Valley",
    place: "Flower Valley",
    image: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?q=80&w=800",
    link: "/destinations/yumthang",
    region: "North Sikkim",
    altitude: "3,600m",
    description: "Valley of flowers with breathtaking natural beauty",
    rating: 4.9,
    reviews: 142,
    featured: true,
    price: "₹3,500/night"
  },
  {
    id: 6,
    name: "Ravangla",
    place: "Tea Country",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    link: "/destinations/ravangla",
    region: "South Sikkim",
    altitude: "2,200m",
    description: "Serene hills with panoramic Buddha views",
    rating: 4.7,
    reviews: 203,
    featured: false,
    price: "₹2,800/night"
  }
];

const Home = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: 'deluxe',
    checkIn: '',
    checkOut: '',
    guests: '1'
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const homestays = [
    {
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      name: "Lachung Homestay",
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      name: "Lachen Homestay",
    },
    {
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
      name: "Gangtok Homestay",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      name: "Pelling Homestay",
    },
    {
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
      name: "Zuluk Homestay",
    },
    {
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      name: "Ravangla Homestay",
    },
  ];

  // Gallery images data
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
    { id: 'interior', name: 'Interior', icon: 'fa-home', count: galleryImages.filter(img => img.category === 'interior').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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

  useEffect(() => {
    const bgElements = document.querySelectorAll("[data-background]");
    bgElements.forEach(el => {
      const bg = el.getAttribute("data-background");
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Booking inquiry:', bookingForm);
    alert('Thank you for your inquiry! We will contact you soon.');
    setBookingForm({
      name: '',
      phone: '',
      email: '',
      roomType: 'deluxe',
      checkIn: '',
      checkOut: '',
      guests: '1'
    });
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

  const filteredDestinations = activeFilter === 'all' 
    ? sikkimDestinations 
    : sikkimDestinations.filter(dest => dest.region === activeFilter);

  const whyChooseUs = [
    {
      icon: "fas fa-mountain",
      title: "Scenic Mountain Views",
      description: "Wake up to breathtaking Himalayan landscapes from your room"
    },
    {
      icon: "fas fa-home",
      title: "Clean & Cozy Rooms",
      description: "Immaculately maintained rooms with modern comforts and traditional charm"
    },
    {
      icon: "fas fa-utensils",
      title: "Local Food Experience",
      description: "Authentic Sikkimese cuisine prepared with fresh local ingredients"
    },
    {
      icon: "fas fa-wallet",
      title: "Affordable Pricing",
      description: "Quality accommodation at reasonable prices for every budget"
    },
    {
      icon: "fas fa-heart",
      title: "Friendly Service",
      description: "Warm, personalized hospitality from our local family hosts"
    },
    {
      icon: "fas fa-leaf",
      title: "Eco-Friendly Stay",
      description: "Sustainable practices that protect our beautiful environment"
    }
  ];

  const bookingSteps = [
    {
      step: "01",
      title: "Choose Location",
      desc: "Select your preferred region in Sikkim",
      icon: "fa-location-dot",
    },
    {
      step: "02",
      title: "Select Homestay",
      desc: "Browse trusted & verified homestays",
      icon: "fa-house",
    },
    {
      step: "03",
      title: "Pick Dates",
      desc: "Choose check-in & check-out dates",
      icon: "fa-calendar-days",
    },
    {
      step: "04",
      title: "Send Inquiry",
      desc: "Submit booking request to host",
      icon: "fa-paper-plane",
    },
    {
      step: "05",
      title: "Confirm Booking",
      desc: "Receive confirmation & enjoy your stay",
      icon: "fa-circle-check",
    },
  ];

  const rooms = [
    {
      icon: "fa-crown",
      title: "Deluxe Room",
      desc: "Spacious luxury rooms with premium interiors, scenic views, and top-class amenities.",
      link: "/Deluxe",
      price: "₹4,500/night"
    },
    {
      icon: "fa-users",
      title: "Family Room",
      desc: "Comfortable and spacious rooms ideal for families, with extra beds and privacy.",
      link: "/Family",
      price: "₹3,800/night"
    },
    {
      icon: "fa-wallet",
      title: "Budget Room",
      desc: "Affordable and cozy rooms offering essential comfort for budget-conscious travelers.",
      link: "/Budget",
      price: "₹1,800/night"
    },
    {
      icon: "fa-mountain",
      title: "Mountain View Room",
      desc: "Rooms with private balconies offering breathtaking views of the mountains.",
      link: "/rooms/mountain-view",
      price: "₹3,200/night"
    },
    {
      icon: "fa-home",
      title: "Traditional Cottage",
      desc: "Experience local culture in our traditional cottages with modern comforts.",
      link: "/Cottage",
      price: "₹2,500/night"
    },
    {
      icon: "fa-heart",
      title: "Honeymoon Suite",
      desc: "Romantic suites designed for couples, featuring elegant décor and serene ambiance.",
      link: "/rooms/honeymoon",
      price: "₹5,000/night"
    }
  ];

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
    <div className="about-section home-about">
  <div className="about-container">
    {/* Text Content */}
    <motion.div 
      className="about-text-content"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.span 
        className="about-badge"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <i className="fas fa-heart"></i> Himalayan Hospitality
      </motion.span>
      
      <motion.h2 
        className="about-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Welcome to Sikkim Homestay
      </motion.h2>
      
      <div className="about-description">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the charm and tranquility of Sikkim at our cozy homestay, where comfort meets
          the breathtaking beauty of the Himalayas. Every corner of our homestay is designed to make
          you feel at home while surrounded by nature.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Our homestay offers a perfect blend of traditional Sikkimese hospitality and modern
          amenities. Enjoy warm, welcoming hosts, serene mountain views, and a peaceful retreat
          away from the hustle and bustle.
        </motion.p>
        
      </div>
      
      <motion.div 
        className="about-actions"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
   <motion.a 
  href="/about" 
  className="about-btn btn-primary"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <i className="fas fa-info-circle"></i>
  <span className="btn-text">
    About Us
    <span className="inline-arrow">
      <i className="fas fa-arrow-right"></i>
    </span>
  </span>
</motion.a>
        
      </motion.div>
    </motion.div>
    
    {/* Image Content */}
    <motion.div 
      className="about-image-content"
      variants={itemVariants}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="image-container">
        <img
          src="/assets/gallery/Mountainview.avif"
          alt="Sikkim landscape"
          className="main-image"
          loading="lazy"
        />
        
        {/* Image Overlay Elements */}
        <div className="image-overlay">
          <div className="overlay-card card-1">
            <i className="fas fa-mountain"></i>
            <span>Himalayan Views</span>
          </div>
          <div className="overlay-card card-2">
            <i className="fas fa-home"></i>
            <span>Cozy Stay</span>
          </div>
          <div className="overlay-card card-3">
            <i className="fas fa-utensils"></i>
            <span>Local Cuisine</span>
          </div>
        </div>
        
        {/* Floating Badge */}
        <div className="floating-badge">
          <i className="fas fa-award"></i>
          <span>Best Homestay 2024</span>
        </div>
      </div>
      
      {/* Testimonial Card */}
      <motion.div 
        className="testimonial-card"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="testimonial-content">
          <i className="fas fa-quote-left quote-icon"></i>
          <p className="testimonial-text">
            "The most authentic Himalayan experience we've ever had. The hospitality was incredible!"
          </p>
          <div className="testimonial-author">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
              alt="Guest" 
              className="author-avatar"
            />
            <div className="author-info">
              <h4>Rahul Sharma</h4>
              <span>From Delhi</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
  </div>
      {/* Gallery Section */}
      <motion.section
        className="gallery-section section-space"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container">
          <div className="section-header text-center mb-6">
            <motion.span 
              className="section-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <i className="fas fa-camera me-2"></i> Visual Journey
            </motion.span>
            <motion.h2 
              className="section-title mt-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Experience Sikkim Through Our Lens
            </motion.h2>
            <motion.p 
              className="section-subtitle mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A glimpse into the beauty and comfort that awaits you
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div 
            className="gallery-filter mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="filter-container">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fas ${category.icon} me-2`}></i>
                  {category.name}
                  <span className="count-badge">{category.count}</span>
                </motion.button>
              ))}
            </div>
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
                whileInView={{ opacity: 1, scale: 1 }}
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
                        image.category === 'dining' ? 'fa-utensils' : 'fa-home'
                      }`}></i>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-images me-2"></i>
              View Full Gallery
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <motion.div
          className="lightbox-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <motion.div
            className="lightbox-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="lightbox-image-container">
              <motion.img
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <button className="nav-btn prev" onClick={() => navigateImage('prev')}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="nav-btn next" onClick={() => navigateImage('next')}>
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
          </motion.div>
        </motion.div>
      )}

      {/* ROOMS SECTION */}
      <motion.section
        className="what-we-do section-bg-2 section-space overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row mb-60 align-items-lg-end align-items-center">
            <div className="col-xl-6">
              <div className="section__title-wrapper text-center text-xl-start">
                <div className="section_subtitle justify-content-start mb-13">
                  <span className="about-section" style={{ marginLeft: "50px" }}>
                    <span data-width="40px" className="left-seperator"></span>
                    What We Do
                  </span>
                  <h3 className="section__title text-capitalize mb-0 overflow-hidden">
                    Our Rooms
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-minus-30" style={{display: "grid", gap: "20px" }}>
            {rooms.map((service, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <motion.div
                  className="what-we-do__item d-flex flex-column mb-20"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="what-we-do__item-bg"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80")' }}
                  ></div>

                  <div className="what-we-do__item-img mb-20">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>

                  <div className="what-we-do__item-text mb-20">
                    <h4 className="title mb-20">
                      <a style={{ textDecoration: "none", display: "inline-block", color: "#551a8b" }} href={service.link}>
                        {service.title}
                      </a>
                    </h4>
                    <p className="mb-0">{service.desc}</p>
                  </div>

                  <a href={service.link} className="readmore rr-a-16">
                    View Details
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

  {/* Features Grid */}
       <div className="sikkim-layout">
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
          src="/assets/gallery/himalaya.jpeg"
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
        
      {/* Featured Sikkim Destinations */}
      <motion.section
        className="sikkim-destinations section-space"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <span className="section-subtitle">Journey Through</span>
            <h2 className="section-title">
              Sikkim's Homestay Regions
            </h2>
            <p className="section-description">
              Immerse yourself in authentic Himalayan hospitality across four breathtaking regions
            </p>
          </div>

          {/* Region Cards */}
          <div className="region-cards">
            {[
              {
                id: 1,
                name: "East Sikkim",
                description: "Capital city with vibrant culture and stunning views",
                icon: "fa-city",
                color: "#3B82F6",
                highlights: ["Gangtok", "Tsomgo Lake", "Nathula Pass"],
                link: "/homestay/east"
              },
              {
                id: 2,
                name: "West Sikkim",
                description: "Ancient monasteries and panoramic Himalayan views",
                icon: "fa-mountain",
                color: "#10B981",
                highlights: ["Pelling", "Yuksom", "Khecheopalri"],
                link: "/homestay/west"
              },
              {
                id: 3,
                name: "North Sikkim",
                description: "Pristine lakes and snow-capped mountain retreats",
                icon: "fa-snowflake",
                color: "#8B5CF6",
                highlights: ["Lachung", "Lachen", "Yumthang"],
                link: "/homestay/north"
              },
              {
                id: 4,
                name: "South Sikkim",
                description: "Spiritual sites and tea garden experiences",
                icon: "fa-leaf",
                color: "#F59E0B",
                highlights: ["Namchi", "Ravangla", "Temi Tea Garden"],
                link: "/homestay/south"
              }
            ].map((region) => (
              <motion.div
                key={region.id}
                className="region-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: region.id * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="region-card-header">
                  <div 
                    className="region-icon"
                    style={{ color: region.color }}
                  >
                    <i className={`fas ${region.icon}`}></i>
                  </div>
                  <h3>{region.name}</h3>
                </div>
                <p className="region-card-description">{region.description}</p>
                <div className="region-highlights">
                  {region.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
                <Link to={region.link} className="region-link">
                  Explore {region.name.split(' ')[0]}
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Step-by-Step Booking Section */}
      <motion.section
        className="floating-steps-3d"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="steps-3d-container">
          {/* Animated Background Elements */}
          <div className="bg-3d-elements">
            <div className="bg-orb-1"></div>
            <div className="bg-orb-2"></div>
            <div className="bg-orb-3"></div>
            <div className="bg-grid"></div>
          </div>

          {/* Header */}
          <motion.div 
            className="steps-header-3d"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="header-badge"
              animate={{ 
                rotateY: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <i className="fas fa-star"></i>
            </motion.span>
            <h2 className="header-title-3d">
              Your <span className="gradient-text">Journey</span> to the Himalayas
            </h2>
            <p className="header-subtitle-3d">
              Experience effortless booking with our streamlined 4-step process
            </p>
          </motion.div>

          {/* 3D Steps Container */}
          <div className="steps-3d-wrapper">
            {/* Floating Connection Lines */}
            <svg className="connection-lines" width="100%" height="100%">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff6b35" />
                  <stop offset="50%" stopColor="#1a3f81" />
                  <stop offset="100%" stopColor="#ff6b35" />
                </linearGradient>
              </defs>
            </svg>

            {/* 3D Steps */}
            {bookingSteps.map((item, index) => (
              <motion.div
                key={index}
                className="step-3d-card"
                initial={{ 
                  opacity: 0, 
                  y: 100,
                  rotateX: -45,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  y: -20,
                  rotateY: 10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{
                  zIndex: bookingSteps.length - index
                }}
              >
                {/* Step Number with 3D Effect */}
                <motion.div 
                  className="step-3d-number-container"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                >
                  <div className="step-3d-number-front">{item.step}</div>
                  <div className="step-3d-number-back">{item.step}</div>
                  <div className="step-3d-number-side"></div>
                </motion.div>

                {/* Icon with Floating Animation */}
                <motion.div 
                  className="step-3d-icon-wrapper"
                  animate={{ 
                    y: [0, -15, 0],
                    rotateZ: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <div className="step-3d-icon-glow"></div>
                  <div className="step-3d-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="step-3d-content">
                  <motion.h3 
                    className="step-3d-title"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring" }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="step-3d-desc">{item.desc}</p>
                </div>

                {/* Floating Particles */}
                <div className="step-particles">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="particle"
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3 + index * 0.2
                      }}
                    />
                  ))}
                </div>

                {/* Progress Indicator */}
                {index < bookingSteps.length - 1 && (
                  <motion.div 
                    className="step-progress"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 1 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Floating CTA Button */}
          <motion.div 
            className="steps-cta-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="cta-button-3d"
              whileHover={{ 
                scale: 1.05,
                rotateY: 180,
                boxShadow: "0 20px 40px rgba(255, 107, 53, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(26, 63, 129, 0.2)",
                  "0 15px 35px rgba(255, 107, 53, 0.3)",
                  "0 10px 25px rgba(26, 63, 129, 0.2)"
                ]
              }}
              transition={{ 
                boxShadow: {
                  duration: 3,
                  repeat: Infinity
                }
              }}
            >
              <a 
  href="/contact" 
  className="cta-link"
>
  <span className="cta-text">Start Your Journey</span>
  {/* <i className="fas fa-arrow-right"></i> */}
</a>
              <motion.i 
                className="fas fa-arrow-right"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Booking/Inquiry Form Section */}
      <motion.section
        className="split-booking"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="split-container">
          {/* Left Side - Motivational Image/Content */}
          <motion.div 
            className="motivation-side"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="motivation-overlay"></div>
            <div className="motivation-content">
              {/* Inspirational Quote */}
              <motion.div 
                className="quote-box"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <i className="fas fa-quote-left quote-icon"></i>
                <h3 className="quote-text">
                  Escape to the Himalayas. Find peace in every mountain breeze.
                </h3>
              </motion.div>

              {/* Benefits List */}
              <div className="benefits-list">
                <motion.div 
                  className="benefit-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <i className="fas fa-check-circle benefit-icon"></i>
                  <span>Authentic Sikkimese hospitality</span>
                </motion.div>
                <motion.div 
                  className="benefit-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", delay: 0.1 }}
                >
                  <i className="fas fa-check-circle benefit-icon"></i>
                  <span>Breathtaking mountain views</span>
                </motion.div>
                <motion.div 
                  className="benefit-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <i className="fas fa-check-circle benefit-icon"></i>
                  <span>24/7 personalized service</span>
                </motion.div>
                <motion.div 
                  className="benefit-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", delay: 0.3 }}
                >
                  <i className="fas fa-check-circle benefit-icon"></i>
                  <span>Traditional local cuisine</span>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div 
                className="cta-box"
                animate={{ 
                  boxShadow: [
                    "0 10px 30px rgba(255, 107, 53, 0.3)",
                    "0 15px 40px rgba(255, 107, 53, 0.4)",
                    "0 10px 30px rgba(255, 107, 53, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="cta-icon">
                  <i className="fas fa-gem"></i>
                </div>
                <div className="cta-content">
                  <h4>Limited Availability</h4>
                  <p>Book now to secure your preferred dates</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div 
            className="booking-side"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="booking-card">
              {/* Form Header */}
              <div className="form-header">
                <h2 className="form-title">Reserve Your Stay</h2>
                <p className="form-subtitle">Complete your booking in 2 minutes</p>
              </div>

              {/* Form */}
              <form className="booking-form" onSubmit={handleFormSubmit}>
                <div className="form-grid">
                  {/* Name */}
                  <div className="form-group">
                    <label>Full Name *</label>
                    <div className="input-wrapper">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        name="name"
                        value={bookingForm.name}
                        onChange={handleFormChange}
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label>Email Address *</label>
                    <div className="input-wrapper">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="email"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleFormChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <div className="input-wrapper">
                      <i className="fas fa-phone"></i>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleFormChange}
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Check-in */}
                  <div className="form-group">
                    <label>Check-in Date</label>
                    <div className="input-wrapper">
                      <i className="fas fa-calendar"></i>
                      <input
                        type="date"
                        name="checkIn"
                        value={bookingForm.checkIn}
                        onChange={handleFormChange}
                      />
                      {bookingForm.checkIn && (
                        <span className="date-badge">
                          {new Date(bookingForm.checkIn).toLocaleDateString('en-IN', { 
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short'
                          })}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Room Type */}
                  <div className="form-group">
                    <label>Room Type</label>
                    <div className="input-wrapper">
                      <i className="fas fa-bed"></i>
                      <select
                        name="roomType"
                        value={bookingForm.roomType}
                        onChange={handleFormChange}
                      >
                        <option value="">Select room type</option>
                        <option value="deluxe">🏔️ Mountain View Deluxe</option>
                        <option value="family">👨‍👩‍👧‍👦 Family Suite</option>
                        <option value="cottage">🏡 Traditional Cottage</option>
                      </select>
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="form-group">
                    <label>Number of Guests</label>
                    <div className="input-wrapper">
                      <i className="fas fa-users"></i>
                      <select
                        name="guests"
                        value={bookingForm.guests}
                        onChange={handleFormChange}
                      >
                        <option value="">Select guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-paper-plane"></i>
                  Book Your Stay
                  <span className="btn-badge">Secure Booking</span>
                </motion.button>

                {/* Trust Indicators */}
                <div className="trust-indicators">
                  <div className="trust-item">
                    <i className="fas fa-lock"></i>
                    <span>SSL Secured</span>
                  </div>
                  <div className="trust-item">
                    <i className="fas fa-bolt"></i>
                    <span>Instant Confirmation</span>
                  </div>
                  <div className="trust-item">
                    <i className="fas fa-headset"></i>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="flat-section-v3 bg-surface flat-testimonial testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container cus-layout-1">
          <div className="row align-items-center">
            {/* Left Side - Title & Navigation */}
            <div className="col-lg-3 p-5">
              <motion.div 
                className="box-title"
                variants={itemVariants}
              >
                <div className="text-subtitle text-primary">Guest Feedback</div>
                <h4 className="mt-4">What Our Guests Say</h4>
              </motion.div>
              
              <motion.p 
                className="text-variant-1 p-16"
                variants={itemVariants}
              >
                Trusted by hundreds of travelers, Sikkim Homestay delivers authentic, memorable experiences in the heart of Himalayas.
              </motion.p>
              
              <motion.div 
                className="box-navigation"
                variants={itemVariants}
              >
                <div 
                  className="navigation swiper-nav-prev nav-prev-testimonial"
                  role="button"
                  aria-label="Previous slide"
                  onClick={() => document.querySelector('.tf-sw-testimonial .swiper-button-prev')?.click()}
                >
                  <span className="icon icon-arr-l">←</span>
                </div>
                <div 
                  className="navigation swiper-nav-next nav-next-testimonial"
                  role="button"
                  aria-label="Next slide"
                  onClick={() => document.querySelector('.tf-sw-testimonial .swiper-button-next')?.click()}
                >
                  <span className="icon icon-arr-r">→</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Testimonials Slider */}
            <div className="col-lg-9">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1.2}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                  },
                  768: {
                    slidesPerView: 1.8,
                  },
                  992: {
                    slidesPerView: 2.2,
                  },
                  1200: {
                    slidesPerView: 2.6,
                  },
                }}
                className="tf-sw-testimonial"
              >
                {[
                  {
                    id: 1,
                    name: "Ravi Sharma",
                    role: "Software Engineer",
                    avatar: "https://mahendrapackersandmovers.com/assets/images/avatar/avt-7.jpg",
                    rating: 5,
                    comment: "The team at Sikkim Homestay handled our entire vacation planning so smoothly. Everything was perfectly arranged and exceeded our expectations. Highly professional and hospitable!"
                  },
                  {
                    id: 2,
                    name: "Anita Desai",
                    role: "HR Manager",
                    avatar: "https://mahendrapackersandmovers.com/assets/images/avatar/avt-5.jpg",
                    rating: 5,
                    comment: "From check-in to check-out, everything was done with great care and professionalism. Sikkim Homestay made our family vacation completely hassle-free. Strongly recommended!"
                  },
                  {
                    id: 3,
                    name: "Meena Reddy",
                    role: "Homemaker",
                    avatar: "https://mahendrapackersandmovers.com/assets/images/avatar/avt-6.jpg",
                    rating: 5,
                    comment: "I was worried about traveling with children, but the homestay team arranged everything so well. The rooms were clean, food was delicious. Great hospitality!"
                  },
                  {
                    id: 4,
                    name: "Sandeep Kumar",
                    role: "Business Owner",
                    avatar: "https://mahendrapackersandmovers.com/assets/images/avatar/avt-8.jpg",
                    rating: 5,
                    comment: "They were always available, arranged everything quickly, and made our trip memorable. Sikkim Homestay is reliable and offers authentic local experiences."
                  }
                ].map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <motion.div
                      className="box-tes-item"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <ul className="list-star">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <li key={i} className="icon icon-star">★</li>
                        ))}
                      </ul>
                      <p className="note body-1">
                        "{testimonial.comment}"
                      </p>
                      <div className="box-avt d-flex align-items-center gap-12">
                        <div className="avatar avt-60 round">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            loading="lazy"
                          />
                        </div>
                        <div className="info">
                          <div className="h7 fw-7">{testimonial.name}</div>
                          <p className="text-variant-1 mt-4">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Partners/Collaboration Section */}
      <div className="homestay_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5 text-center">
              <h2 className="popular-content">Popular Homestays in Sikkim</h2>
            </div>
          </div>

          <div className="homestay_boxed">
            <div className="marquee">
              <div className="marquee-content">
                {homestays.map((stay, index) => (
                  <div className="homestay_item" key={index}>
                    <img
                      src={stay.src}
                      alt={stay.name}
                      onError={(e) => (e.target.src = "https://via.placeholder.com/400x300")}
                    />
                    <p>{stay.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Home;