import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <motion.div
      className="top-bar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* <div className="container">
        <div className="top-bar-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>info@sikkimhomestay.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <span>+91 98765 43210</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Gangtok, Sikkim, India</span>
            </div>
          </div>

          <div className="top-bar-actions">
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default TopBar;