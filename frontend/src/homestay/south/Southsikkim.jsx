import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../index.css";

const SouthSikkim = () => {
  const destinations = [
    {
      id: 1,
      name: "Namchi",
      description: "Spiritual hub with Char Dham & giant Guru Rinpoche statue",
      image: "/assets/homestay/char-dham.jpg",
      link: "/homestay/south/namchi"
    },
    {
      id: 2,
      name: "Ravangla",
      description: "Peaceful town with Buddha Park & panoramic mountain views",
      image: "/assets/homestay/temple-statue.avif",
      link: "/homestay/south/ravangla"
    },
    {
      id: 3,
      name: "Temi Tea Garden",
      description: "Sikkim's only tea estate – lush gardens & organic tea experience",
      image: "/assets/homestay/temi-bungalow1.webp",
      link: "/homestay/south/temitea"
    }
  ];

  return (
    <div className="homestay-page">

      {/* Hero – identical structure to North Sikkim */}
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
            South Sikkim Homestays
          </motion.h1>
          <motion.p
            className="lead fs-4 mb-4 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            Spiritual serenity meets tea-scented hills and Himalayan peace
          </motion.p>

          {/* Breadcrumb – same as North */}
          <nav aria-label="breadcrumb" className="d-flex justify-content-center">
            <ol className="breadcrumb bg-transparent p-0 m-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none fw-medium">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item text-white fw-medium opacity-75 active" aria-current="page">
                South Sikkim
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Intro – identical layout */}
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
                Welcome to South Sikkim
              </motion.h2>
              <motion.p
                className="lead text-center text-muted mx-auto mb-5"
                style={{ maxWidth: "900px" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                South Sikkim is the spiritual and peaceful soul of the state. Home to iconic religious landmarks like the Char Dham complex, the towering Guru Rinpoche statue at Samdruptse, the serene Buddha Park in Ravangla, and Sikkim’s only tea estate at Temi — this region offers deep tranquility, cultural richness, and breathtaking natural beauty.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations – same premium card design as North */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.h2
            className="text-center display-6 fw-bold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Popular Destinations in South Sikkim
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

      {/* Why Choose – same layout as North */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container">
          <motion.h2
            className="text-center display-6 fw-bold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose South Sikkim?
          </motion.h2>

          <div className="row g-4 text-center">
            {[
              { icon: "🙏", title: "Spiritual Landmarks", desc: "Char Dham, Samdruptse Buddha & Buddha Park" },
              { icon: "🌤️", title: "Pleasant Climate", desc: "Mild weather year-round" },
              { icon: "🍵", title: "Tea Estate Experience", desc: "Sikkim’s only tea garden at Temi" },
              { icon: "🚗", title: "Easy Access", desc: "Well-connected from Gangtok & Siliguri" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="col-md-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-card p-4 shadow-sm rounded-4 border border-light">
                  <div className="fs-1 mb-3">{feature.icon}</div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted small">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – same as North */}
      <section className="py-5 py-lg-6 bg-success text-white text-center">
        <div className="container">
          <motion.h2
            className="display-5 fw-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready for Your South Sikkim Journey?
          </motion.h2>
          <motion.p
            className="lead mb-4 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Book your spiritual retreat or tea garden stay today.
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

export default SouthSikkim;