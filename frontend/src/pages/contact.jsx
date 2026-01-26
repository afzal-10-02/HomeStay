import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  // 1. State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // 2. State for submission status (idle, submitting, success, error)
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "" // 'success' or 'error'
  });

  // 3. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 4. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, message: "Please fill in all required fields.", type: "error" });
      return;
    }

    setStatus({ loading: true, message: "", type: "" });

    try {
      // REPLACE THIS URL WITH YOUR ACTUAL BACKEND API ENDPOINT
      const API_URL = "http://localhost:5000/contact";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      // Success
      setStatus({ 
        loading: false, 
        message: "Message sent successfully! We will get back to you soon.", 
        type: "success" 
      });
      
      // Clear form
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({ 
        loading: false, 
        message: error.message || "Something went wrong. Please try again later.", 
        type: "error" 
      });
    }
  };

  return (
    <>
      {/* BREADCRUMB */}
      <motion.section
        className="page-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .8 }}
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .2 }}
        >
          Get In Touch
        </motion.h1>

        <motion.div
          className="intro-line"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: .4 }}
        />

        <motion.div
          className="intro-path"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .5 }}
        >
          <Link className="contact-link" to="/">Home</Link>
          <i className="fa fa-angle-right "></i>
          <Link className="contact-link" to="/contact">Contact</Link>
        </motion.div>
      </motion.section>


      {/* CONTACT */}
      <section className="contact-wrapper">

        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* LEFT FORM */}
          <div className="form-area">
            
            {/* Status Message Display */}
            {status.message && (
              <div 
                style={{
                  padding: "10px",
                  marginBottom: "20px",
                  borderRadius: "5px",
                  backgroundColor: status.type === "success" ? "#d4edda" : "#f8d7da",
                  color: status.type === "success" ? "#155724" : "#721c24",
                  fontSize: "0.9rem"
                }}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="field">
                <span><i className="fa fa-user"></i></span>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*" 
                  required
                  disabled={status.loading}
                />
              </div>

              <div className="field">
                <span><i className="fa fa-envelope"></i></span>
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail*" 
                  required
                  disabled={status.loading}
                />
              </div>

              <div className="field">
                <span><i className="fa fa-phone"></i></span>
                <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*" 
                  required
                  disabled={status.loading}
                />
              </div>

              <div className="field">
                <span><i className="fa fa-comment"></i></span>
                <input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  disabled={status.loading}
                />
              </div>

              <div className="field textarea">
                <span><i className="fa fa-pen"></i></span>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message*"
                  required
                  disabled={status.loading}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: status.loading ? 1 : 1.05 }}
                whileTap={{ scale: status.loading ? 1 : 0.95 }}
                className="send-btn"
                disabled={status.loading}
                style={{ opacity: status.loading ? 0.7 : 1, cursor: status.loading ? "not-allowed" : "pointer" }}
              >
                {status.loading ? (
                  <>
                    <i className="fa fa-spinner fa-spin" style={{ marginRight: "8px" }}></i> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>

          </div>

          {/* RIGHT INFO */}
          <div className="info-area">
            <h2>Contact Us</h2>
            <h4>Gangtok Homestay</h4>

            <ul className="contact-list">
              <li className="box">
                <div className="title">
                  <i className="fas fa-map-marker-alt"></i> Address
                </div>
                MG Marg, Near Gandhi Chowk,<br/>
                Gangtok – 737101,<br/>
                Sikkim, India
              </li>

              <li className="box">
                <div className="title">
                  <i className="fas fa-phone-alt"></i> Phone
                </div>
                <a href="tel:+919876543210">+91 98765 43210</a><br/>
                <a href="tel:+919812345678">+91 98123 45678</a>
              </li>

              <li className="box">
                <div className="title">
                  <i className="fas fa-envelope"></i> Email
                </div>
                <a href="mailto:gangtokhomestay@gmail.com">
                  gangtokhomestay@gmail.com
                </a>
              </li>

              <li className="box">
                <div className="title">
                  <i className="fas fa-share-alt"></i> Follow Us
                </div>
                <ul className="box-social">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </li>
            </ul>
          </div>

        </motion.div>

      </section>

      {/* MAP */}
      <motion.div
        className="map-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14170.21855681944!2d88.6047248102377!3d27.33157597148564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a52155555555%3A0x6b66e133e36e4f3a!2sGangtok%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </motion.div>
    </>
  );
}