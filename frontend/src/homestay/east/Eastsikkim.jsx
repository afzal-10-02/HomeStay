import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../index.css";

const EastSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Gangtok",
      description: "Vibrant capital with monasteries, lakes and mountain views",
      image: "/assets/homestay/mg_marg.jpeg",
      link: "/homestay/east/gangtok"
    },
    {
      id: 2,
      name: "Nathula Pass",
      description: "Historic Indo-China border at 14,140 feet",
      image: "/assets/homestay/Nathula.jpg",
      link: "/homestay/east/nathula"
    },
    {
      id: 3,
      name: "Tsomgo Lake",
      description: "Sacred glacial lake at 12,400 feet altitude",
      image: "/assets/homestay/tsomgo.webp",
      link: "/homestay/east/tsomgo"
    }
  ];

  return (
    <div className="region-page">

      {/* Professional Hero */}
      <section
        className="position-relative text-white text-center d-flex align-items-center"
        style={{
          minHeight: "60vh",
          background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
                       url(/assets/gallery/Breadcrumb.png) center/cover no-repeat`,
        }}
      >
        <div className="container position-relative z-2 py-5">
          <motion.h1
            className="display-4 fw-bold mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            East Sikkim Homestays
          </motion.h1>
          <motion.p
            className="lead fs-4 mb-4 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            Discover the cultural heart of Sikkim – vibrant Gangtok, sacred lakes, and high passes
          </motion.p>

          {/* Breadcrumb – professional style */}
          <nav aria-label="breadcrumb" className="d-flex justify-content-center">
            <ol className="breadcrumb bg-transparent p-0 m-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none fw-medium">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item text-white fw-medium opacity-75 active" aria-current="page">
                East Sikkim
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Intro – elegant & spacious */}
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
                Welcome to East Sikkim
              </motion.h2>
              <motion.p
                className="lead text-center text-muted mx-auto mb-5"
                style={{ maxWidth: "900px" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                East Sikkim is the most developed and culturally rich region of Sikkim. Centered around the capital Gangtok, this area offers a perfect blend of urban sophistication, ancient monasteries, high mountain passes, and sacred glacial lakes — all wrapped in warm Himalayan hospitality.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid – professional cards */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.h2
            className="text-center display-6 fw-bold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Popular Destinations in East Sikkim
          </motion.h2>

          <div className="row g-4 g-lg-5">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                className="col-lg-4 col-md-6"
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
                          height: "280px",
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
                    <div className="card-body p-4 p-lg-5 text-center d-flex flex-column">
                      <h3 className="fw-bold mb-3 fs-3">{dest.name}</h3>
                      <p className="text-muted mb-4 flex-grow-1">{dest.description}</p>
                      <span className="btn btn-outline-primary rounded-pill px-4 py-2 fw-medium">
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

      {/* Why Choose */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <motion.h2
            className="text-center display-6 fw-bold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose East Sikkim?
          </motion.h2>

          <div className="row g-4 text-center">
            {[
              { icon: "🏙️", title: "Urban Comfort", desc: "Modern amenities & excellent infrastructure" },
              { icon: "🚗", title: "Easy Accessibility", desc: "Well-connected roads from Bagdogra & NJP" },
              { icon: "🍲", title: "Culinary Diversity", desc: "Momos, thukpa, international & local cuisine" },
              { icon: "🛍️", title: "Shopping & Culture", desc: "MG Marg, Lal Bazaar & handicraft markets" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="col-md-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-card p-4 shadow-sm rounded-4">
                  <div className="fs-1 mb-3">{feature.icon}</div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted small">{feature.desc}</p>
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
            Ready to Explore East Sikkim?
          </motion.h2>
          <motion.p
            className="lead mb-4 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Choose your destination and book your authentic homestay experience today.
          </motion.p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill shadow"
          >
            Contact Us for Booking Assistance
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EastSikkim;