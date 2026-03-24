import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { testimonials } from "../data/roomsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import RoomCard from "../components/RoomCard.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// ── Data ──────────────────────────────────────────────
import { rooms } from "../data/roomsData";
import {
  sikkimDestinations,
  homestays,
  galleryImages,
  galleryCategories as categories,
  locations,
  homestayTypes,
  roomTypes,
  guestOptions,
  whyChooseUs,
  bookingSteps,
  features,
  overlayCards,
  featuredRegions
} from "../data/destinationsData";

const Home = () => {
  // State
  const [bookingForm, setBookingForm] = useState({
    name: '', phone: '', email: '', roomType: 'deluxe',
    checkIn: '', checkOut: '', guests: '1'
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [searchData, setSearchData] = useState({
    location: 'Sikkim',
    homestayType: 'Any Homestay',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'Any Room'
  });

  // Computed
  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  // Handlers
  const handleSearch = async (e) => {
    e.preventDefault();
    const query = new URLSearchParams(searchData).toString();
    try {
      const res = await fetch(`http://localhost:5000/search?${query}`);
      if (res.ok) console.log(await res.json());
    } catch (err) {
      console.error(err);
      alert("Search failed");
    }
  };

  const handleInputChange = (field, value) =>
    setSearchData(prev => ({ ...prev, [field]: value }));

  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const getDayAfterTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  };

  const openLightbox = (img) => {
    setSelectedImage(img);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (dir) => {
    if (!selectedImage) return;
    const idx = filteredImages.findIndex(i => i.id === selectedImage.id);
    const next = dir === 'next'
      ? (idx + 1) % filteredImages.length
      : (idx - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[next]);
  };

  useEffect(() => {
    document.querySelectorAll("[data-background]").forEach(el => {
      const bg = el.getAttribute("data-background");
      if (bg) el.style.backgroundImage = `url(${bg})`;
    });
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/booking/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingForm)
      });
      if (res.ok) {
        alert('Inquiry sent!');
        setBookingForm({ name: '', phone: '', email: '', roomType: 'deluxe', checkIn: '', checkOut: '', guests: '1' });
      } else {
        alert('Failed to send');
      }
    } catch {
      alert('Error occurred');
    }
  };

  // Animation variants
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Hero />

      {/* Search Form */}
      <motion.section className="bg-light px-6" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }}>
        <div className="container">
          <motion.div className="card shadow-lg border-0" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <h3 className="fw-bold mb-2">Find Your Perfect Homestay</h3>
                <p className="text-muted">Authentic Sikkimese hospitality</p>
              </div>

              <form onSubmit={handleSearch}>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6 col-lg-3">
                    <label className="fw-semibold"><i className="fas fa-map-marker-alt me-2"></i>Location</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-map"></i></span>
                      <select value={searchData.location} onChange={e => handleInputChange('location', e.target.value)} className="form-select">
                        {locations.map(loc => <option key={loc.value} value={loc.value}>{loc.icon} {loc.label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-3">
                    <label className="fw-semibold"><i className="fas fa-home me-2"></i>Homestay Type</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-building"></i></span>
                      <select value={searchData.homestayType} onChange={e => handleInputChange('homestayType', e.target.value)} className="form-select">
                        {homestayTypes.map(t => <option key={t.value} value={t.value}>{t.icon} {t.label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-2">
                    <label className="fw-semibold"><i className="fas fa-calendar-alt me-2"></i>Check-in</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-calendar"></i></span>
                      <input type="date" value={searchData.checkIn} onChange={e => handleInputChange('checkIn', e.target.value)} min={getTomorrowDate()} className="form-control" />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-2">
                    <label className="fw-semibold"><i className="fas fa-calendar-check me-2"></i>Check-out</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-calendar"></i></span>
                      <input type="date" value={searchData.checkOut} onChange={e => handleInputChange('checkOut', e.target.value)} min={searchData.checkIn || getDayAfterTomorrow()} className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-4">
                    <label className="fw-semibold"><i className="fas fa-users me-2"></i>Guests</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                      <select value={searchData.guests} onChange={e => handleInputChange('guests', e.target.value)} className="form-select">
                        {guestOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <label className="fw-semibold"><i className="fas fa-bed me-2"></i>Room Type</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fas fa-door-closed"></i></span>
                      <select value={searchData.roomType} onChange={e => handleInputChange('roomType', e.target.value)} className="form-select">
                        {roomTypes.map(r => <option key={r.value} value={r.value}>{r.icon} {r.label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 d-flex align-items-end">
                    <motion.button type="submit" className="btn btn-dark-green w-100 py-3 fw-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <i className="fas fa-paper-plane me-2"></i>Submit
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-text-content pe-lg-5">
                <span className="badge rounded-pill bg-success-soft text-success mb-3 p-2 px-3 about-badge">
                  <i className="fas fa-heart me-2"></i> Himalayan Hospitality
                </span>
                <h2 className="display-5 fw-bold mb-4 about-title">
                  Welcome to Sikkim Homestay
                </h2>
                <div className="about-description text-muted fs-6">
                  <p className="mb-4 text-center">
                    Experience the charm and tranquility of Sikkim at our cozy homestay,
                    where comfort meets the breathtaking beauty of the Himalayas.
                    Every corner of our homestay is designed to make you feel at home
                    while surrounded by nature.
                  </p>
                  <p className="mb-4 text-center">
                    Our homestay offers a perfect blend of traditional Sikkimese hospitality
                    and modern amenities. Enjoy warm, welcoming hosts, serene mountain views,
                    and a peaceful retreat away from the hustle and bustle.
                  </p>
                </div>
                <Link to="/about" className="btn btn-dark btn-lg rounded-3 px-4 py-2 about-btn">
                  <i className="fas fa-info-circle me-2"></i>
                  About Us <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative about-image-wrapper">
                <img
                  src="/assets/gallery/lounge.jpg"
                  alt="Sikkim landscape"
                  className="img-fluid rounded-5 shadow-lg main-image"
                />
                <div className="position-absolute bottom-0 end-0 mb-4 me-3 custom-badge-gradient float-animation text-white py-2 px-4 rounded-pill fw-bold small d-flex align-items-center z-index-10 shadow-lg">
                  <i className="fas fa-award me-2"></i>
                  <span>Best Homestay 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="sikkim-layout1 py-5">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.5,
            pointerEvents: 'none'
          }}
        />
        <div className="sikkim-header text-center mb-5">
          <motion.h2
            className="display-4 text-dark fw-bold mb-3 about-title"
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
        <div className="container">
          <div className="row g-4">
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
                          background: 'linear-gradient(135deg, rgb(234 234 239), rgb(231 222 222))',
                          width: '60px',
                          height: '60px',
                          fontSize: '1.8rem',
                          color: '#1F2933'
                        }}
                      >
                        {feature.icon}
                      </div>
                      <div className="tile-content">
                        <h4 className="h5 text-dark mb-1">{feature.title}</h4>
                        <p className="mb-0 text-dark">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <motion.h3
                className="h3 text-dark mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <i className="fas fa-camera me-2" style={{ color: 'rgb(44 136 94)' }}></i> Himalayan Views
              </motion.h3>
              <div className="image-wrapper position-relative rounded overflow-hidden mb-4" style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}>
                <img
                  src="/assets/gallery/Mountainview.avif"
                  alt="Sikkim landscape"
                  className="img-fluid w-100"
                  style={{ height: '400px', objectFit: 'cover' }}
                  loading="lazy"
                />
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
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <i className={`${card.icon}`} style={{ color: '#1E6F5C' }}></i>
                      <span className="fw-semibold" style={{ color: '#1F2933' }}>{card.text}</span>
                    </motion.div>
                  ))}
                </div>
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

            <div className="col-lg-3">
              <motion.h3
                className="h3 text-dark mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <i className="fas fa-info-circle me-2" style={{ color: 'rgb(30 111 92)' }}></i> More Information
              </motion.h3>

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

              <motion.div
                className="weather-widget p-3 mb-4 rounded d-flex align-items-center gap-3 text-white"
                style={{ background: 'linear-gradient(135deg, #1E6F5C 0%, #3AA17E 100%)' }}
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

              <motion.div
                className="booking-prompt p-4 rounded text-center"
                style={{ background: 'linear-gradient(135deg, #1E6F5C, #3AA17E)', color: 'white' }}
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
                  style={{ background: 'white', color: '#1E6F5C', border: 'none' }}
                >
                  Check Availability
                </button>
              </motion.div>
            </div>
          </div>
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
              className="section-title mt-3 mb-4 about-title fw-bold"
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

          <motion.div className="gallery-filter mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
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

          <motion.div className="gallery-grid" layout>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                onClick={() => openLightbox(image)}
              >
                <div className="image-container">
                  <img src={image.src} alt={image.alt} loading="lazy" />
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
                      <i className={`fas ${image.category === 'rooms' ? 'fa-bed' :
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

          <motion.div className="text-center mt-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Link to="/gallery" className="btn sign-bg btn-lg text-decoration-none">
              <i className="fas fa-images me-2"></i> View Full Gallery
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <motion.div className="lightbox-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeLightbox}>
          <motion.div className="lightbox-content" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
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

      {/* Rooms Section */}
      <motion.section
        className="what-we-do section-bg-2 section-space overflow-hidden py-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-xl-6">
              <div className="section__title-wrapper text-start">
                <span className="about-section d-block mb-2">
                  <span data-width="40px" className="left-seperator me-2"></span>
                  What We Do
                </span>
                <h3 className="section__title text-capitalize mb-0 fw-bold">Our Rooms</h3>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Regions - FIXED */}
      <motion.section className="py-5 py-md-5 bg-light" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-teal text-white fs-6 px-4 py-2 mb-3 d-inline-block rounded-pill">
              Journey Through
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Sikkim's Homestay Regions
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "720px" }}>
              Immerse yourself in authentic Himalayan hospitality across four breathtaking regions
            </p>
          </div>
          <div className="row g-4">
            {featuredRegions.map((region) => (
              <motion.div
                key={region.id}
                className="col-12 col-sm-6 col-lg-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: region.id * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* FIX: Changed from Link to div - outer wrapper is now a div to prevent nested <a> tags */}
                <div className="text-decoration-none text-dark d-block h-100">
                  <div className="card h-100 border-0 shadow overflow-hidden" style={{ borderRadius: "1rem" }}>
                    {/* Make only the image/header area clickable for the main link */}
                    <Link to={region.link} className="text-decoration-none">
                      <div className="position-relative">
                        <img
                          src={region.image}
                          className="card-img-top"
                          alt={region.name}
                          style={{ height: "220px", objectFit: "cover", transition: "transform 0.7s ease" }}
                        />
                        <div
                          className="position-absolute top-0 start-0 end-0 bottom-0"
                          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
                        ></div>
                        <div
                          className="position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center shadow"
                          style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: `${region.color}30`,
                            color: region.color,
                            backdropFilter: "blur(6px)",
                            fontSize: "1.6rem"
                          }}
                        >
                          <i className={region.icon}></i>
                        </div>
                      </div>
                    </Link>

                    <div className="card-body d-flex flex-column p-4">
                      <h5 className="card-title fw-bold mb-3">
                        <Link to={region.link} className="text-dark text-decoration-none">
                          {region.name}
                        </Link>
                      </h5>
                      <p className="card-text text-muted mb-4 flex-grow-1">{region.description}</p>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {region.highlights.map((place, i) => (
                          <Link
                            key={i}
                            to={`${region.link}/${place.slug}`}
                            className="badge rounded-pill px-3 py-2 text-decoration-none"
                            style={{
                              backgroundColor: `${region.color}15`,
                              color: region.color,
                              border: `1px solid ${region.color}40`
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {place.name}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-auto d-inline-flex align-items-center gap-2 fw-semibold" style={{ color: region.color, fontSize: "1.05rem" }}>
                        <Link to={region.link} className="text-decoration-none" style={{ color: 'inherit' }}>
                          Explore {region.name.split(" ")[0]}
                          <i className="bi bi-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Booking Steps */}
      <motion.section className="floating-steps-3d py-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className="steps-3d-container container position-relative">
          <div className="bg-3d-elements">
            <div className="bg-orb-1"></div>
            <div className="bg-orb-2"></div>
            <div className="bg-orb-3"></div>
            <div className="bg-grid"></div>
          </div>

          <motion.div className="steps-header-3d text-center mb-5" initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <motion.span
              className="header-badge"
              animate={{ rotateY: [0, 180, 360], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <i className="fas fa-star"></i>
            </motion.span>
            <h2 className="header-title-3d mb-3">
              Your <span className="gradient-text">Journey</span> to the Himalayas
            </h2>
            <p className="header-subtitle-3d">Experience effortless booking with our streamlined 4-step process</p>
          </motion.div>

          <div className="steps-3d-wrapper row g-4 g-lg-5 justify-content-center position-relative mb-4">
            {bookingSteps.map((item, index) => (
              <motion.div
                key={index}
                className="step-3d-card col-12 col-sm-6 col-lg-3"
                initial={{ opacity: 0, y: 100, rotateX: -45, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -20, rotateY: 10, scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                style={{ zIndex: bookingSteps.length - index }}
              >
                <motion.div
                  className="step-3d-number-container"
                >
                  <div className="step-3d-number-front">{item.step}</div>
                  <div className="step-3d-number-back">{item.step}</div>
                  <div className="step-3d-number-side"></div>
                </motion.div>

                <motion.div
                  className="step-3d-icon-wrapper"
                  animate={{ y: [0, -15, 0], rotateZ: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                >
                  <div className="step-3d-icon-glow"></div>
                  <div className="step-3d-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                </motion.div>

                <div className="step-3d-content text-center">
                  <motion.h3 className="step-3d-title" whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
                    {item.title}
                  </motion.h3>
                  <p className="step-3d-desc">{item.desc}</p>
                </div>

                <div className="step-particles">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="particle"
                      animate={{ y: [0, -30, 0], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 + index * 0.2 }}
                    />
                  ))}
                </div>

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

          <motion.div className="steps-cta-3d text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <motion.button
              className="cta-button-3d"
              whileHover={{ scale: 1.05, rotateY: 180, boxShadow: "0 20px 40px rgba(53, 255, 93, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0 10px 25px rgba(26, 63, 129, 0.2)", "0 15px 35px rgba(53, 255, 157, 0.3)", "0 10px 25px rgba(26, 63, 129, 0.2)"] }}
              transition={{ boxShadow: { duration: 3, repeat: Infinity } }}
            >
              <Link to="/contact" className="cta-link">
                <span className="cta-text">Start Your Journey</span>
              </Link>
              <motion.i className="fas fa-arrow-right" animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }} />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Inquiry Form */}
      <motion.section
        className="split-booking py-5 d-flex align-items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="split-container container">
          <div className="row g-4 g-lg-5">
            {/* Motivation Side */}
            <motion.div
              className="motivation-side col-12 col-lg-6 position-relative overflow-hidden rounded-4 d-flex align-items-end p-4 p-md-5"
              style={{
                background: 'linear-gradient(135deg, #1e6f5ce3 0%, #3aa17ef2 100%), url("https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '600px'
              }}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Overlay */}
              <div className="motivation-overlay position-absolute top-0 start-0 end-0 bottom-0"
                style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 50%)', zIndex: 1 }}>
              </div>

              {/* Content */}
              <div className="motivation-content position-relative w-100" style={{ zIndex: 2 }}>
                {/* Quote Box */}
                <motion.div
                  className="quote-box mb-4 p-4 rounded-4"
                  style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <i className="fas fa-quote-left quote-icon fs-2 mb-2 d-block" style={{ color: '#e0e8e7' }}></i>
                  <h3 className="quote-text text-white mb-0" style={{ fontSize: '1.8rem', fontWeight: 600, lineHeight: 1.4, fontFamily: "'Playfair Display', serif" }}>
                    Escape to the Himalayas. Find peace in every mountain breeze.
                  </h3>
                </motion.div>

                {/* Benefits List */}
                <div className="benefits-list d-flex flex-column gap-2 mb-4">
                  <motion.div className="benefit-item d-flex align-items-center gap-3 p-3 rounded-3"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255, 255, 255, 0.9)', cursor: 'pointer' }}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring" }}>
                    <i className="fas fa-check-circle" style={{ color: '#4ade80', fontSize: '1.1rem' }}></i>
                    <span>Authentic Sikkimese hospitality</span>
                  </motion.div>
                  <motion.div className="benefit-item d-flex align-items-center gap-3 p-3 rounded-3"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255, 255, 255, 0.9)', cursor: 'pointer' }}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", delay: 0.1 }}>
                    <i className="fas fa-check-circle" style={{ color: '#4ade80', fontSize: '1.1rem' }}></i>
                    <span>Breathtaking mountain views</span>
                  </motion.div>
                  <motion.div className="benefit-item d-flex align-items-center gap-3 p-3 rounded-3"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255, 255, 255, 0.9)', cursor: 'pointer' }}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", delay: 0.2 }}>
                    <i className="fas fa-check-circle" style={{ color: '#4ade80', fontSize: '1.1rem' }}></i>
                    <span>24/7 personalized service</span>
                  </motion.div>
                  <motion.div className="benefit-item d-flex align-items-center gap-3 p-3 rounded-3"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255, 255, 255, 0.9)', cursor: 'pointer' }}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", delay: 0.3 }}>
                    <i className="fas fa-check-circle" style={{ color: '#4ade80', fontSize: '1.1rem' }}></i>
                    <span>Traditional local cuisine</span>
                  </motion.div>
                </div>

                {/* CTA Box */}
                <motion.div
                  className="cta-box d-flex align-items-center gap-4 p-4 rounded-4 text-white"
                  style={{ background: 'linear-gradient(135deg, #ff6b35, #ff8b35)' }}
                  animate={{ boxShadow: ["0 10px 30px rgba(255, 107, 53, 0.3)", "0 15px 40px rgba(255, 107, 53, 0.4)", "0 10px 30px rgba(255, 107, 53, 0.3)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="cta-icon d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '60px', height: '60px', background: 'rgba(255, 255, 255, 0.2)', fontSize: '1.8rem' }}>
                    <i className="fas fa-gem"></i>
                  </div>
                  <div className="cta-content">
                    <h4 className="mb-1 fs-4 fw-bold">Limited Availability</h4>
                    <p className="mb-0 opacity-75">Book now to secure your preferred dates</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Booking Side */}
            <motion.div
              className="booking-side col-12 col-lg-6 d-flex align-items-center"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="booking-card w-100 bg-white p-4 p-md-5 rounded-4 shadow-lg border-0"
                style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)' }}>

                {/* Form Header */}
                <div className="form-header text-center mb-4">
                  <h2 className="form-title mb-2 display-5 fw-bold text-dark"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                    Reserve Your Stay
                  </h2>
                  <p className="form-subtitle mb-0 text-secondary">Complete your booking in 2 minutes</p>
                </div>

                {/* Form */}
                <form className="booking-form" onSubmit={handleFormSubmit}>
                  <div className="form-grid row g-3 mb-4">
                    {/* Full Name */}
                    <div className="form-group col-12 col-md-6">
                      <label className="mb-2 fw-medium" style={{ color: '#444' }}>Full Name *</label>
                      <div className="input-wrapper d-flex align-items-center px-3"
                        style={{ height: '55px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                        <i className="fas fa-user me-3" style={{ color: '#666', width: '20px' }}></i>
                        <input
                          type="text"
                          name="name"
                          className="w-100 border-0 bg-transparent"
                          style={{ outline: 'none' }}
                          value={bookingForm.name}
                          onChange={handleFormChange}
                          required
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="form-group col-12 col-md-6">
                      <label className="mb-2 fw-medium" style={{ color: '#444' }}>Email Address *</label>
                      <div className="input-wrapper d-flex align-items-center px-3"
                        style={{ height: '55px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                        <i className="fas fa-envelope me-3" style={{ color: '#666', width: '20px' }}></i>
                        <input
                          type="email"
                          name="email"
                          className="w-100 border-0 bg-transparent"
                          style={{ outline: 'none' }}
                          value={bookingForm.email}
                          onChange={handleFormChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="form-group col-12 col-md-6">
                      <label className="mb-2 fw-medium" style={{ color: '#444' }}>Phone Number *</label>
                      <div className="input-wrapper d-flex align-items-center px-3"
                        style={{ height: '55px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                        <i className="fas fa-phone me-3" style={{ color: '#666', width: '20px' }}></i>
                        <input
                          type="tel"
                          name="phone"
                          className="w-100 border-0 bg-transparent"
                          style={{ outline: 'none' }}
                          value={bookingForm.phone}
                          onChange={handleFormChange}
                          required
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Check-in Date */}
                    <div className="form-group col-12 col-md-6">
                      <label className="mb-2 fw-medium" style={{ color: '#444' }}>Check-in Date</label>
                      <div className="input-wrapper d-flex align-items-center px-3 position-relative"
                        style={{ height: '55px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                        <i className="fas fa-calendar me-3" style={{ color: '#666', width: '20px' }}></i>
                        <input
                          type="date"
                          name="checkIn"
                          className="w-100 border-0 bg-transparent"
                          style={{ outline: 'none' }}
                          value={bookingForm.checkIn}
                          onChange={handleFormChange}
                        />
                        {bookingForm.checkIn && (
                          <span className="date-badge position-absolute end-0 me-3 px-3 py-1 rounded-3 text-white"
                            style={{ background: 'var(--primary-color)', fontSize: '0.85rem', fontWeight: 600 }}>
                            {new Date(bookingForm.checkIn).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
                          </span>
                        )}
                      </div>
                    </div>


                    {/* Check-out Date */}
                    <div className="form-group col-12 col-md-6">
                      <label className="mb-2 fw-medium" style={{ color: '#444' }}>Check-out Date</label>
                      <div className="input-wrapper d-flex align-items-center px-3 position-relative"
                        style={{ height: '55px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                        <i className="fas fa-calendar me-3" style={{ color: '#666', width: '20px' }}></i>
                        <input
                          type="date"
                          name="checkOut"
                          className="w-100 border-0 bg-transparent"
                          style={{ outline: 'none' }}
                          value={bookingForm.checkOut}
                          onChange={handleFormChange}
                        />
                        {bookingForm.checkOut && (
                          <span className="date-badge position-absolute end-0 me-3 px-3 py-1 rounded-3 text-white"
                            style={{ background: 'var(--primary-color)', fontSize: '0.85rem', fontWeight: 600 }}>
                            {new Date(bookingForm.checkOut).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Room Type */}
                    <div className="form-group col-12 col-md-6">
                      <label className="mb-2 fw-medium" style={{ color: '#444' }}>Room Type</label>
                      <div className="input-wrapper d-flex align-items-center px-3"
                        style={{ height: '55px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                        <i className="fas fa-bed me-3" style={{ color: '#666', width: '20px' }}></i>
                        <select
                          name="roomType"
                          className="w-100 border-0 bg-transparent"
                          style={{ outline: 'none', appearance: 'none' }}
                          value={bookingForm.roomType}
                          onChange={handleFormChange}
                        >
                          <option value="">Select room type</option>
                          <option value="deluxe">🏔️ Mountain View Deluxe</option>
                          <option value="family">👨‍👩‍👧‍👦 Family Suite</option>
                          <option value="cottage">🏡 Traditional Cottage</option>
                          <option value="Budget">💰 Budget Rooms</option>
                        </select>
                      </div>
                    </div>

                    {/* Number of Guests */}
                    <div className="form-group col-12 col-md-6">
                      <label className="mb-2 fw-medium" style={{ color: '#444' }}>Number of Guests</label>
                      <div className="input-wrapper d-flex align-items-center px-3"
                        style={{ height: '55px', background: '#f8fafc', borderRadius: '10px', border: '2px solid #e2e8f0' }}>
                        <i className="fas fa-users me-3" style={{ color: '#666', width: '20px' }}></i>
                        <select
                          name="guests"
                          className="w-100 border-0 bg-transparent"
                          style={{ outline: 'none', appearance: 'none' }}
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
                    className="submit-btn w-100 d-flex align-items-center justify-content-center gap-3 border-0 text-white fw-semibold position-relative overflow-hidden"
                    style={{
                      height: '60px',
                      background: 'linear-gradient(135deg, #1E6F5C, #3AA17E)',
                      borderRadius: '12px',
                      fontSize: '1.1rem'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fas fa-paper-plane fs-5"></i>
                    Book Your Stay
                    <span className="btn-badge ms-3 px-3 py-1 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.2)', fontSize: '0.8rem' }}>
                      Secure Booking
                    </span>
                  </motion.button>

                  {/* Trust Indicators */}
                  <div className="trust-indicators d-flex justify-content-center gap-3 gap-md-4 mt-4 pt-4 border-top">
                    <div className="trust-item d-flex align-items-center gap-2" style={{ color: '#666', fontSize: '0.9rem' }}>
                      <i className="fas fa-lock" style={{ color: '#4CAF50' }}></i>
                      <span>SSL Secured</span>
                    </div>
                    <div className="trust-item d-flex align-items-center gap-2" style={{ color: '#666', fontSize: '0.9rem' }}>
                      <i className="fas fa-bolt" style={{ color: '#4CAF50' }}></i>
                      <span>Instant Confirmation</span>
                    </div>
                    <div className="trust-item d-flex align-items-center gap-2" style={{ color: '#666', fontSize: '0.9rem' }}>
                      <i className="fas fa-headset" style={{ color: '#4CAF50' }}></i>
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="flat-section-v3 bg-surface flat-testimonial testimonials py-5 py-lg-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container cus-layout-1">
          <div className="row align-items-center">
            <div className="col-lg-3 p-4 p-lg-5">
              <motion.div className="box-title mb-4 mb-lg-5" variants={itemVariants}>
                <div className="text-subtitle  mb-2">Guest Feedback</div>
                <h4 className="mt-3 mt-lg-4 mb-0">What Our Guests Say</h4>
              </motion.div>
              <motion.p className="text-variant-1 mb-4 mb-lg-5" variants={itemVariants}>
                Trusted by hundreds of travelers, Sikkim Homestay delivers authentic, memorable experiences in the heart of Himalayas.
              </motion.p>
              <motion.div className="box-navigation d-flex gap-3 mt-4" variants={itemVariants}>
                <div className="navigation swiper-nav-prev nav-prev-testimonial" role="button" aria-label="Previous slide" onClick={() => document.querySelector('.tf-sw-testimonial .swiper-button-prev')?.click()}>
                  <span className="icon icon-arr-l">←</span>
                </div>
                <div className="navigation swiper-nav-next nav-next-testimonial" role="button" aria-label="Next slide" onClick={() => document.querySelector('.tf-sw-testimonial .swiper-button-next')?.click()}>
                  <span className="icon icon-arr-r">→</span>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-9">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1.2}
                loop={true}
                speed={800}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                navigation={true}
                breakpoints={{
                  640: { slidesPerView: 1.5 },
                  768: { slidesPerView: 1.8 },
                  992: { slidesPerView: 2.2 },
                  1200: { slidesPerView: 2.6 }
                }}
                className="tf-sw-testimonial"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <motion.div className="box-tes-item h-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                      <ul className="list-star d-flex gap-1 mb-3 mb-lg-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <li key={i} className="icon icon-star">★</li>
                        ))}
                      </ul>
                      <p className="note body-1 mb-4">"{testimonial.comment}"</p>
                      <div className="box-avt d-flex align-items-center gap-3">
                        <div className="avatar avt-60 round overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-100 h-100 object-fit-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="info">
                          <div className="h7 fw-7 mb-1">{testimonial.name}</div>
                          <p className="text-variant-1 mb-0">{testimonial.location}</p>
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

      {/* Popular Homestays */}
      <div className="homestay_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5 text-center">
              <h2 className="popular-content">Popular Homestays in Sikkim</h2>
              <p className="header-subtitle-3d">Authentic hospitality in handpicked Sikkim homestays.</p>
            </div>
          </div>
          <div className="homestay_boxed">
            <div className="marquee">
              <div className="marquee-content">
                {homestays.map((stay, index) => (
                  <div className="homestay_item" key={`first-${index}`}>
                    <img src={stay.src} alt={stay.name} onError={(e) => (e.target.src = "https://via.placeholder.com/400x300")} />
                    <p>{stay.name}</p>
                  </div>
                ))}
                {/* Duplicate the items for seamless continuous scrolling */}
                {homestays.map((stay, index) => (
                  <div className="homestay_item" key={`second-${index}`}>
                    <img src={stay.src} alt={stay.name} onError={(e) => (e.target.src = "https://via.placeholder.com/400x300")} />
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