import {motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); // ✅ REQUIRED

  const carouselImages = [
    "./assets/gallery/lounge.jpg",
  ];

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Carousel */}
      <div className="hero-carousel">
        <AnimatePresence mode="wait">
          <motion.div
            className="carousel-slide"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.7)), url(${carouselImages[0]})`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <motion.div
        className="hero-content p-0"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="tags">
          <span className="tag">🏡 Homestay</span>
          <span className="tag">✨ Luxury</span>
          <span className="tag">🌿 Nature</span>
          <span className="tag">🏔️ Sikkim</span>
          <span className="tag">⭐ 5-Star</span>
          <span className="tag">❤️ Family Friendly</span>
        </div>

        <motion.h1
          className="hero-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover Your Perfect <br />
          <span className="highlight">Sikkim Homestay</span> Experience
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Experience authentic Sikkimese hospitality in luxury homestays nestled
          in the Himalayas.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Happy Guests</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Guest Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="hero-buttons pt-3 d-flex justify-content-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="btn-3d-wrapper">
            <button
              className="btn pill-btn-3d d-flex align-items-center gap-2 px-4 py-3"
              onClick={() => navigate("/contact")}
            >
              <i className="fas fa-calendar-check"></i>
              <span>Contact Now</span>
            </button>
          </div>
        </motion.div>
      </motion.div>

      
    </motion.section>
  );
};

export default Hero;
