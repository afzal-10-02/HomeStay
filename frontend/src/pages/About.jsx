import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import rooms data
import { rooms } from "../data/roomsData";
import RoomCard from "../components/RoomCard";


const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { number: '500+', label: 'Happy Guests' },
    { number: '5', label: 'Years Experience' },
    { number: '4.9', label: 'Average Rating' },
    { number: '24/7', label: 'Guest Support' }
  ];

  const features = [
    {
      icon: '🏔️',
      title: 'Mountain Views',
      description: 'Breathtaking Himalayan landscapes from every room'
    },
    {
      icon: '🍽️',
      title: 'Local Cuisine',
      description: 'Authentic Sikkimese food made with traditional recipes'
    },
    {
      icon: '🌱',
      title: 'Sustainable Living',
      description: 'Eco-friendly practices and community support'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Atmosphere',
      description: 'Warm hospitality and homely environment'
    }
  ];

  const overlayCards = [
    { icon: 'fas fa-mountain', text: 'Himalayan Views' },
    { icon: 'fas fa-home', text: 'Cozy Stay' },
    { icon: 'fas fa-utensils', text: 'Local Cuisine' }
  ];

  return (
    <motion.section
      className="about-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(/assets/gallery/Breadcrumb.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="hero-content px-4">
            <h1>About Sikkim Homestay</h1>
            <p>Your gateway to authentic Himalayan experiences</p>
            <Link className="contact-link text-white text-decoration-none fw-medium" to="/">
              Home
            </Link>
            <i className="fas fa-angle-right opacity-75"></i>
            <Link
              className="contact-link text-white text-decoration-none fw-medium opacity-75"
              to="/about"
            >
              About Us
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="about-text-content pe-lg-5">
                  <span className="badge rounded-pill bg-success-soft text-success mb-3 p-2 px-3 about-badge">
                    <i className="fas fa-heart me-2"></i> Himalayan Hospitality
                  </span>
                  <h2 className="display-5 fw-bold mb-4 about-title">
                    Welcome to Sikkim Homestay
                  </h2>
                  <div className="about-description text-muted fs-6">
                    <p className="mb-4">
                      Experience the charm and tranquility of Sikkim at our cozy homestay,
                      where comfort meets the breathtaking beauty of the Himalayas.
                      Every corner of our homestay is designed to make you feel at home
                      while surrounded by nature.
                    </p>
                    <p className="mb-4">
                      Our homestay offers a perfect blend of traditional Sikkimese hospitality
                      and modern amenities. Enjoy warm, welcoming hosts, serene mountain views,
                      and a peaceful retreat away from the hustle and bustle.
                    </p>
                  </div>
                  <Link to="/about" className="btn btn-dark btn-lg rounded-3 px-4 py-2 about-btn">
                    <i className="fas fa-info-circle me-2"></i>
                    About Us <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="position-relative about-image-wrapper">
                  <img
                    src="/assets/gallery/Mountainview.avif"
                    alt="Sikkim landscape"
                    className="img-fluid rounded-5 shadow-lg main-image"
                  />
                  <div className="position-absolute bottom-0 end-0 mb-4 me-3 custom-badge-gradient float-animation text-white py-2 px-4 rounded-pill fw-bold small d-flex align-items-center z-index-10 shadow-lg">
  <i className="fas fa-award me-2"></i>
  <span>Best Homestay 2024</span>
</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROOMS SECTION */}
       <motion.section
        className="what-we-do section-bg-2 section-space overflow-hidden py-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-xl-6">
              <div className="section__title-wrapper text-start">
                <span className="about-section d-block mb-2">
                  <span data-width="40px" className="left-seperator me-2"></span>
                  What We Do
                </span>
                <h3 className="section__title text-capitalize mb-0 fw-bold">Our Rooms</h3>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {rooms.map((room) => (
              <RoomCard 
                key={room.id}
                room={room} 
              />
            ))}
          </div>
        </div>
      </motion.section>

        {/* Features Grid */}
        <div className="sikkim-layout1 py-5">
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              opacity: 0.5,
              pointerEvents: 'none'
            }}
          />

          {/* Main Heading */}
          <div className="sikkim-header text-center mb-5">
            <motion.h2
              className="display-4 text-dark fw-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <i className="fas fa-mountain me-3" style={{ color: 'rgb(30 111 92)' }}></i> Discover Sikkim's Magic
            </motion.h2>
            <motion.p
              className="fs-5 mx-auto"
              style={{ maxWidth: '600px', color: 'rgba(255, 255, 255, 0.8)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Experience the perfect blend of Himalayan beauty, culture, and hospitality
            </motion.p>
          </div>

          {/* Main Container */}
          <div className="container">
            <div className="row g-4">
              {/* Left Column: Features */}
              <div className="col-lg-4">
                <motion.h3
                  className="h3 text-dark mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <i className="fas fa-star me-2" style={{ color: 'rgb(44 136 94)' }}></i> Why Choose Us
                </motion.h3>
                <div className="d-flex flex-column gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="feature-tile p-3 rounded"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="d-flex align-items-start gap-3">
                        <div
                          className="tile-icon d-flex align-items-center justify-content-center rounded-circle"
                          style={{
                            background: 'linear-gradient(135deg, rgb(234 234 239), rgb(231 222 222))',
                            width: '60px',
                            height: '60px',
                            fontSize: '1.8rem',
                            color: '#1F2933'
                          }}
                        >
                          {feature.icon}
                        </div>
                        <div className="tile-content">
                          <h4 className="h5 text-dark mb-1">{feature.title}</h4>
                          <p className="mb-0 text-dark">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Center Column: Image with Overlay */}
              <div className="col-lg-5">
                <motion.h3
                  className="h3 text-dark mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <i className="fas fa-camera me-2" style={{ color: 'rgb(44 136 94)' }}></i> Himalayan Views
                </motion.h3>
                <div className="image-wrapper position-relative rounded overflow-hidden mb-4" style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}>
                  <img
                    src="/assets/gallery/Mountainview.avif"
                    alt="Sikkim landscape"
                    className="img-fluid w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                    loading="lazy"
                  />

                  {/* Overlay Cards - Stacked Design */}
                  <div className="card-stack position-absolute top-0 start-0 p-3">
                    {overlayCards.map((card, index) => (
                      <motion.div
                        key={index}
                        className="stack-card d-inline-flex align-items-center gap-2 px-3 py-2 mb-2 rounded-pill"
                        style={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                          minWidth: '180px',
                          transform: `translateY(${index * -15}px)`,
                          zIndex: overlayCards.length - index
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        whileHover={{ x: 10 }}
                      >
                        <i className={`${card.icon}`} style={{ color: '#1E6F5C' }}></i>
                        <span className="fw-semibold" style={{ color: '#1F2933' }}>{card.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    className="floating-badge position-absolute bottom-0 end-0 m-3 d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-bold"
                    style={{
                      background: 'linear-gradient(135deg, rgb(30, 111, 92) 0%, rgb(58, 161, 126) 100%)',
                      color: '#ffffff',
                      boxShadow: '0 8px 20px rgba(233, 196, 106, 0.3)',
                      zIndex: 3
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <i className="fas fa-award"></i>
                    <span>Best Budget 2024</span>
                  </motion.div>
                </div>

                {/* Bottom Testimonial */}
                <motion.div
                  className="testimonial-box p-4 rounded"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="testimonial-content">
                    <i className="fas fa-quote-left fs-3 mb-3 d-block" style={{ color: 'rgb(40 129 104)' }}></i>
                    <p className="text-dark fs-5 mb-3 fst-italic">
                      "Great value for money and wonderful hospitality!"
                    </p>
                    <div className="guest-info d-flex justify-content-between align-items-center">
                      <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Priya Singh</span>
                      <span className="fw-medium text-dark">From Bangalore</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Additional Info */}
              <div className="col-lg-3">
                <motion.h3
                  className="h3 text-dark mb-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <i className="fas fa-info-circle me-2" style={{ color: 'rgb(30 111 92)' }}></i> More Information
                </motion.h3>

                {/* Sikkim Specials */}
                <motion.div
                  className="sikkim-special p-3 mb-4 rounded"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="h5 text-white mb-3">Budget Travel Tips</h4>
                  <ul className="special-list list-unstyled mb-0">
                    <li className="py-2 d-flex align-items-center gap-3 border-bottom border-light border-opacity-25">
                      <i className="fas fa-leaf" style={{ color: 'rgb(30 111 92 / 94%)' }}></i>
                      <span className="text-dark">Explore Local Markets</span>
                    </li>
                    <li className="py-2 d-flex align-items-center gap-3 border-bottom border-light border-opacity-25">
                      <i className="fas fa-hiking" style={{ color: 'rgb(30 111 92 / 94%)' }}></i>
                      <span className="text-dark">Free Nature Walks</span>
                    </li>
                    <li className="py-2 d-flex align-items-center gap-3 border-bottom border-light border-opacity-25">
                      <i className="fas fa-utensils" style={{ color: 'rgb(30 111 92 / 94%)' }}></i>
                      <span className="text-dark">Local Food Stalls</span>
                    </li>
                    <li className="py-2 d-flex align-items-center gap-3">
                      <i className="fas fa-map" style={{ color: 'rgb(30 111 92 / 94%)' }}></i>
                      <span className="text-dark">Budget Treks</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Weather Widget */}
                <motion.div
                  className="weather-widget p-3 mb-4 rounded d-flex align-items-center gap-3 text-white"
                  style={{
                    background: 'linear-gradient(135deg, #1E6F5C 0%, #3AA17E 100%)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="weather-icon fs-1" style={{ opacity: 0.9 }}>⛅</div>
                  <div className="weather-info">
                    <span className="temp d-block fs-2 fw-bold">18°C</span>
                    <span className="location d-block">Gangtok</span>
                    <span className="desc d-block fs-6 fst-italic" style={{ opacity: 0.8 }}>
                      Perfect for trekking
                    </span>
                  </div>
                </motion.div>

                {/* Quick Booking */}
                <motion.div
                  className="booking-prompt p-4 rounded text-center"
                  style={{
                    background: 'linear-gradient(135deg, #1E6F5C, #3AA17E)',
                    color: 'white'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="h5 fw-bold mb-2">Ready to Visit?</h4>
                  <p className="mb-3" style={{ opacity: 0.9 }}>
                    Book your budget stay in Sikkim now
                  </p>
                  <button
                    className="availability-btn btn rounded-pill px-4 py-2 fw-semibold w-100"
                    style={{
                      background: 'white',
                      color: '#1E6F5C',
                      border: 'none'
                    }}
                  >
                    Check Availability
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div className="stats-section" variants={itemVariants}>
          <h2>Our Achievements</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number text-dark">{stat.number}</div>
                <div className="stat-label text-dark">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
{/* Mission Section */}
<motion.div className="mission-section mb-5" variants={itemVariants}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="mission-text">
          <h2 className="mb-4">Our Mission</h2>
          <p className="mb-3">
            To provide authentic Sikkimese homestay experiences while promoting sustainable tourism
            that benefits both our guests and the local Himalayan communities. We believe in responsible
            travel that preserves the pristine natural beauty and rich cultural heritage of Sikkim.
          </p>
          <p>
            Every guest who stays with us becomes part of our extended Sikkimese family, experiencing
            the warmth of traditional Himalayan hospitality, savoring home-cooked organic meals,
            and creating memories that last a lifetime amidst the majestic mountains.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mission-image text-center">
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&h=300&fit=crop"
            alt="Sikkimese culture and hospitality"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  </div>
</motion.div>

{/* Vision Section */}
<motion.div className="vision-section" variants={itemVariants}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="mission-image text-center">
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&h=300&fit=crop"
            alt="Sikkim Himalayan landscape"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mission-text">
          <h2 className="mb-4">Our Vision</h2>
          <p className="mb-3">
            To become the most cherished homestay network in Sikkim, where travelers from around the world
            can disconnect from the chaos and reconnect with nature, culture, and themselves in the serene
            lap of the Eastern Himalayas.
          </p>
          <p>
            We envision a future where every village in Sikkim can benefit from responsible tourism,
            empowering local families to share their unique traditions, organic farming practices,
            and ancient wisdom with guests seeking authentic experiences beyond the ordinary.
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </motion.section>
  );
};

export default About;