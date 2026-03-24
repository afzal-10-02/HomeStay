// Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // ← Added this

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.trim()) {
      setSubscribeMessage('Please enter your email address');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setSubscribeMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubscribeMessage('Subscribing...');

    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setSubscribeMessage('Thank you for subscribing! 🎉');
        setEmail('');
      } else {
        setSubscribeMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setSubscribeMessage("Connection failed. Please ensure the server is running.");
      } else {
        setSubscribeMessage('An error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        backgroundImage: `linear-gradient(rgba(26, 63, 81, 0.9), rgba(26, 63, 81, 0.8)), 
                         url('https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1600&auto=format&fit=crop')`
      }}
    >
      <div className="footer-overlay">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="d-block mb-3">
              <img src="/assets/Logo.png" alt="Sikkim Homestay Logo" style={{ height: '70px', filter: 'brightness(1.2)' }} />
            </Link>
            <h3>Sikkim Homestay</h3>
            <p>
              Experience authentic Sikkimese hospitality in the lap of the Himalayas.
              Your perfect base for exploring the natural beauty and rich culture of Sikkim.
            </p>
            <div className="social-links">
              <a href="#" className="social-link facebook" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link instagram" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link twitter" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link youtube" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Rooms</h4>
            <ul>
              <li><Link to="/room/deluxe">Deluxe Room</Link></li>
              <li><Link to="/room/family">Family Suite</Link></li>
              <li><Link to="/room/cottage">Traditional Cottage</Link></li>
              <li><Link to="/room/budget">Budget Room</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Stay Connected</h4>
            <p className="text-variant-2">
              Get updates, travel tips, and exclusive offers from Sikkim Homestay.
            </p>

            {/* ── Updated Subscribe Form ── */}
            <motion.form
              className="subscribe-form mt-4"
              onSubmit={handleSubscribe}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="input-group input-group-lg rounded-pill overflow-hidden shadow-sm">
                <span className="input-group-text bg-white border-0 ps-4">
                  <i className="fas fa-envelope text-success fs-5"></i>
                </span>

                <input
                  type="email"
                  className="form-control border-0 px-3 py-3 fs-5"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  disabled={isSubmitting}
                />

                <button
                  type="submit"
                  className="btn btn-success px-4 fw-bold rounded-0"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin me-2"></i>
                      Subscribing...
                    </>
                  ) : (
                    <i className="fas fa-paper-plane"></i>
                  )}
                </button>
              </div>

              {subscribeMessage && (
                <motion.div
                  className={`alert mt-3 text-center fw-medium rounded-3 ${
                    subscribeMessage.includes('Thank') || 
                    subscribeMessage.includes('success') ||
                    subscribeMessage.includes('subscribed')
                      ? 'alert-success'
                      : 'alert-danger'
                  }`}
                  role="alert"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {subscribeMessage}
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sikkim Homestay. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;