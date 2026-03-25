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
  homestays,
  bookingSteps,
  features,
  overlayCards,
  featuredRegions
} from "../data/destinationsData";

const Home = () => {
  const [gtktemp, setgtktemp] = useState(null);
  const [temploading, settempLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=27.3265&longitude=88.612&current_weather=true"
        );
        const data = await response.json();


        setgtktemp(data.current_weather.temperature);
        settempLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        settempLoading(false);
      }
    };
    fetchWeather();
  }, []);


  // Animation variants
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Hero />


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
                <div className="d-flex justify-content-center mt-2">
                  <Link to="/about" className="btn btn-dark btn-lg rounded-3 px-4 py-2 about-btn">
                    <i className="fas fa-info-circle me-2"></i>
                    About Us <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative about-image-wrapper">
                <img
                  src="/assets/gallery/lounge.jpg"
                  alt="Sikkim landscape"
                  className="img-fluid rounded-5 shadow-lg main-image"
                />
                <div className="position-absolute bottom-0 end-0 mb-4 me-3 text-white py-2 px-4 rounded-pill fw-bold small d-flex align-items-center z-index-10 shadow-lg" style={{ backgroundColor: '#1a4d42' }}>
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
        <div className="sikkim-header text-center mb-2">
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
            style={{ maxWidth: '600px', color: 'rgba(0, 0, 0, 0.8)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Experience the perfect blend of Himalayan beauty, culture and hospitality
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
                  transition={{ duration: 3, repeat: Infinity }}
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
                <h4 className="h5 text-black mb-3">Budget Travel Tips</h4>
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
                  <span className="temp d-block fs-2 fw-bold">{gtktemp }°C</span>
                  <span className="location d-block">Gangtok</span>
                  
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
                <div className="text-decoration-none text-dark d-block h-100 region-container">

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
                          className="position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center shadow region-badge-icon"
                          style={{
                            width: "55px",
                            height: "55px",
                            fontSize: "1.5rem"
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
                <span className="cta-text">Book Your Journey</span>
              </Link>
              <motion.i className="fas fa-arrow-right" animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }} />
            </motion.button>
          </motion.div>
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
      <div className="homestay_section pt-3 pb-3">

        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5 text-center">
              <h2 className="popular-content">Popular Homestays in <span className="gradient-text">Sikkim</span></h2>
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