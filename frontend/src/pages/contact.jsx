import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "", // "success" or "error"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        loading: false,
        message: "Please fill in all required fields.",
        type: "error",
      });
      return;
    }

    setStatus({ loading: true, message: "", type: "" });

    try {
      const API_URL = "http://localhost:5000/contact";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        loading: false,
        message: "Message sent successfully! We will get back to you soon.",
        type: "success",
      });

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error); // Keep this for debugging
      // Provide a more helpful error message for network errors
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setStatus({
          loading: false,
          message: "Connection failed. Please ensure the backend server is running.",
          type: "error",
        });
      } else {
        setStatus({
          loading: false,
          message: error.message || "Something went wrong. Please try again later.",
          type: "error",
        });
      }
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Hero / Breadcrumb */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), 
                       url(/assets/gallery/Breadcrumb.png) center/cover no-repeat`,
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container pt-5">
          <motion.h1
            className="display-4 fw-bold mb-3"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="lead mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your gateway to authentic Himalayan experiences
          </motion.p>
          <nav aria-label="breadcrumb">
            <Link className="text-white text-decoration-none fw-medium" to="/">
              Home
            </Link>
            <i className="fas fa-angle-right opacity-75 mx-2"></i>
            <span className="text-white fw-medium opacity-75">Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact Form + Info */}
      <motion.section
        className="py-5 bg-light pt-[115px]" // ← fixed padding here
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row g-5 align-items-stretch">
            {/* Left: Contact Form */}
            <motion.div className="col-lg-7" variants={itemVariants}>
              <div className="card border-0 shadow-lg h-100 p-4 p-lg-5">
                <h2 className="h3 fw-bold mb-4 text-center text-success">
                  Send Us a Message
                </h2>

                {status.message && (
                  <motion.div
                    className={`alert alert-dismissible fade show mb-4 ${
                      status.type === "success" ? "alert-success" : "alert-danger"
                    }`}
                    role="alert"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {status.message}
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setStatus({ ...status, message: "" })}
                    ></button>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={status.loading}
                        />
                        <label htmlFor="name">Name *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={status.loading}
                        />
                        <label htmlFor="email">Email *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          id="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          disabled={status.loading}
                        />
                        <label htmlFor="phone">Phone *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          disabled={status.loading}
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          placeholder="Your message here..."
                          style={{ height: "140px" }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={status.loading}
                        ></textarea>
                        <label htmlFor="message">Message *</label>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-success btn-lg w-100 fw-bold"
                    disabled={status.loading}
                    whileHover={{ scale: status.loading ? 1 : 1.05 }}
                    whileTap={{ scale: status.loading ? 1 : 0.95 }}
                  >
                    {status.loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div className="col-lg-5" variants={itemVariants}>
              <div className="card border-0 shadow-lg h-100 p-4 p-lg-5 bg-white">
                <h2 className="h3 fw-bold mb-4 text-success">Contact Us</h2>
                <h5 className="fw-bold mb-3">Heaven Homestay</h5>

                <ul className="list-unstyled contact-list">
                  <li className="mb-4 d-flex">
                    <div className="icon me-3 text-success fs-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <strong>Address</strong><br />
                      MG Marg, Near Gandhi Chowk,<br />
                      Gangtok – 737101,<br />
                      Sikkim, India
                    </div>
                  </li>

                  <li className="mb-4 d-flex">
                    <div className="icon me-3 text-success fs-4">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <strong>Phone</strong><br />
                      <a href="tel:+919876543210" className="text-dark text-decoration-none">
                        +91 98765 43210
                      </a><br />
                      <a href="tel:+919812345678" className="text-dark text-decoration-none">
                        +91 98123 45678
                      </a>
                    </div>
                  </li>

                  <li className="mb-4 d-flex">
                    <div className="icon me-3 text-success fs-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <strong>Email</strong><br />
                      <a href="mailto:heavenhomestay@gmail.com" className="text-dark text-decoration-none">
                        heavenhomestay@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="d-flex">
                    <div className="icon me-3 text-success fs-4">
                      <i className="fas fa-share-alt"></i>
                    </div>
                    <div>
                      <strong>Follow Us</strong><br />
                      <div className="d-flex gap-3 mt-2">
                        <a href="#" className="text-dark fs-4"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-dark fs-4"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-dark fs-4"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-dark fs-4"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-dark fs-4"><i className="fab fa-youtube"></i></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Google Map */}
      <motion.section
        className="py-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="ratio ratio-21x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14170.21855681944!2d88.6047248102377!3d27.33157597148564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a52155555555%3A0x6b66e133e36e4f3a!2sGangtok%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            title="Gangtok Location"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.section>
    </>
  );
}