// Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setSubscribeMessage('Please enter your email address');
      return;
    }

    setSubscribeMessage('Subscribing...');
    
    try {
      // Replace with your actual subscription endpoint
      const response = await fetch('https://your-api-endpoint.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribeMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setSubscribeMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setSubscribeMessage('An error occurred. Please try again later.');
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
            <h3>Sikkim Homestay</h3>
            <p>
              Experience authentic Sikkimese hospitality in the lap of the Himalayas.
              Your perfect base for exploring the natural beauty and rich culture of Sikkim.
            </p>
            <div className="social-links">
              <motion.a
                href="#"
                aria-label="Facebook"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
              <motion.a
                href="#"
                aria-label="Instagram"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a
                href="#"
                aria-label="Twitter"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a
                href="#"
                aria-label="YouTube"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-youtube"></i>
              </motion.a>
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
              <li><Link to="/deluxe">Deluxe Room</Link></li>
              <li><Link to="/family">Family Suite</Link></li>
              <li><Link to="/cottage">Traditional Cottage</Link></li>
              <li><Link to="/cottage">Budget Room</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Stay Connected</h4>
            <p className="text-variant-2">
              Get updates, travel tips, and exclusive offers from Sikkim Homestay.
            </p>
            <form className="mt-12 subscribe-form" onSubmit={handleSubscribe}>
              <div className="subscribe-content">
                <div className="input-group">
                  <span className="icon-left icon-mail">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email-form"
                    id="subscribe-email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="button-subscribe"
                    aria-label="Subscribe with Us"
                  >
                    <i className="icon icon-send"></i>
                  </button>
                </div>
                {subscribeMessage && (
                  <div id="subscribe-msg" className="subscribe-message">
                    {subscribeMessage}
                  </div>
                )}
              </div>
            </form>
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