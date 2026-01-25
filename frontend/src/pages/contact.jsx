import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
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
  <Link  className="contact-link" to="/contact">Contact</Link>
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

            <div className="field">
              <span><i className="fa fa-user"></i></span>
              <input placeholder="Name*" />
            </div>

            <div className="field">
              <span><i className="fa fa-envelope"></i></span>
              <input placeholder="E-mail*" />
            </div>

            <div className="field">
              <span><i className="fa fa-phone"></i></span>
              <input placeholder="Phone Number*" />
            </div>

            <div className="field">
              <span><i className="fa fa-comment"></i></span>
              <input placeholder="Subject*" />
            </div>

            <div className="field textarea">
              <span><i className="fa fa-pen"></i></span>
              <textarea placeholder="Message*"></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              className="send-btn"
            >
              Send
            </motion.button>

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
  src="https://maps.google.com/maps?q=27.3389,88.6065&z=15&output=embed"
  loading="lazy"
></iframe>

      </motion.div>
    </>
  );
}
