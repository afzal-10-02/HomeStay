import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../index.css";

const NorthSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Lachen",
      description: "Traditional village & gateway to sacred Gurudongmar Lake",
      image: "/assets/homestay/snow_lachen.jpg",
      link: "/homestay/north/lachen"
    },
    {
      id: 2,
      name: "Lachung",
      description: "Scenic base for Yumthang Valley & Zero Point",
      image: "/assets/homestay/yumthang.jpg",
      link: "/homestay/north/lachung"
    }
  ];

  return (
    <div className="homestay-page">

      {/* Hero Section – same style as your other pages */}
      <section
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
                       url(/assets/gallery/Breadcrumb.png) center/cover no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content px-4">
          <h1>North Sikkim Homestays</h1>
          <p>Discover the raw, untouched beauty of the high Himalayas</p>

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mt-3">
            <Link className="text-white text-decoration-none fw-medium" to="/">
              Home
            </Link>
            <i className="fas fa-angle-right opacity-75 mx-2"></i>
            <span className="text-white fw-medium opacity-75">North Sikkim</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <motion.h2
                className="text-center display-6 fw-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Welcome to North Sikkim
              </motion.h2>
              <motion.p
                className="lead text-center text-muted mx-auto mb-5"
                style={{ maxWidth: "900px" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                North Sikkim is the most remote and spectacular region of the state, offering jaw-dropping Himalayan landscapes, sacred high-altitude lakes, rhododendron valleys, and pristine mountain villages. This adventure-rich area requires special permits and is perfect for nature lovers seeking raw beauty and tranquility.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations – premium card design */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.h2
            className="text-center display-6 fw-bold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Popular Destinations in North Sikkim
          </motion.h2>

          <div className="row g-4 g-lg-5">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                className="col-lg-6 col-md-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
              >
                <Link to={dest.link} className="text-decoration-none h-100 d-block">
                  <div className="card border-0 shadow-lg overflow-hidden h-100 rounded-4">
                    <div className="position-relative">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="card-img-top"
                        style={{
                          height: "320px",
                          objectFit: "cover",
                          transition: "transform 0.6s ease"
                        }}
                      />
                      <div
                        className="position-absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)"
                        }}
                      ></div>
                    </div>
                    <div className="card-body p-5 text-center d-flex flex-column">
                      <h3 className="fw-bold mb-3 fs-3">{dest.name}</h3>
                      <p className="text-muted mb-4 flex-grow-1 fs-5">{dest.description}</p>
                      <span className="btn btn-outline-success rounded-pill px-5 py-3 fw-medium fs-5">
                        Explore Homestays →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <motion.h2
            className="text-center display-6 fw-bold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Important Information for North Sikkim
          </motion.h2>

          <div className="row g-4 text-center">
            {[
              { icon: "🛂", title: "Permits Required", desc: "Protected Area Permit (PAP) mandatory for all visitors" },
              { icon: "🚗", title: "Travel Restrictions", desc: "Only registered vehicles allowed. No self-driving" },
              { icon: "🏔️", title: "High Altitude", desc: "Acclimatize properly. Carry altitude sickness medicine" },
              { icon: "🧥", title: "Extreme Cold", desc: "Heavy woolens needed even in summer. Freezing temperatures" }
            ].map((tip, i) => (
              <motion.div
                key={i}
                className="col-md-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-card p-4 shadow-sm rounded-4 border border-light">
                  <div className="fs-1 mb-3">{tip.icon}</div>
                  <h5 className="fw-bold mb-2">{tip.title}</h5>
                  <p className="text-muted small">{tip.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 py-lg-6 bg-success text-white text-center">
        <div className="container">
          <motion.h2
            className="display-5 fw-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready for Your North Sikkim Adventure?
          </motion.h2>
          <motion.p
            className="lead mb-4 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Book your permits and authentic homestays in advance for this unforgettable Himalayan journey.
          </motion.p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg"
          >
            Get Permit & Booking Assistance
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NorthSikkim;