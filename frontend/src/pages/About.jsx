import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  
  const rooms = [
    {
      icon: "fa-crown",
      title: "Deluxe Room",
      desc: "Spacious luxury rooms with premium interiors, scenic views, and top-class amenities.",
      link: "/deluxe",
      price: "₹4,500/night"
    },
    {
      icon: "fa-users",
      title: "Family Room",
      desc: "Comfortable and spacious rooms ideal for families, with extra beds and privacy.",
      link: "/family",
      price: "₹3,800/night"
    },
    {
      icon: "fa-wallet",
      title: "Budget Room",
      desc: "Affordable and cozy rooms offering essential comfort for budget-conscious travelers.",
      link: "/budget",
      price: "₹1,800/night"
    },
    {
      icon: "fa-mountain",
      title: "Mountain View Room",
      desc: "Rooms with private balconies offering breathtaking views of the mountains.",
      link: "/deluxe",
      price: "₹3,200/night"
    },
    {
      icon: "fa-home",
      title: "Traditional Cottage",
      desc: "Experience local culture in our traditional cottages with modern comforts.",
      link: "/cottage",
      price: "₹2,500/night"
    },
    {
      icon: "fa-heart",
      title: "Honeymoon Suite",
      desc: "Romantic suites designed for couples, featuring elegant décor and serene ambiance.",
      link: "/deluxe",
      price: "₹5,000/night"
    }
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
        <motion.div className="about-hero" variants={itemVariants}>
          <h1>About Sikkim Homestay</h1>
          <p>Your gateway to authentic Himalayan experiences</p>
           <Link className="contact-link" to="/">Home</Link>
  <i className="fa fa-angle-right "></i>
  <Link  className="contact-link" to="/about">About Us</Link>
        </motion.div>

        {/* Main Content */}
        <div className="about-section home-about">
  <div className="about-container">
    {/* Text Content */}
    <motion.div 
      className="about-text-content"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.span 
        className="about-badge"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <i className="fas fa-heart"></i> Himalayan Hospitality
      </motion.span>
      
      <motion.h2 
        className="about-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Welcome to Sikkim Homestay
      </motion.h2>
      
      <div className="about-description">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the charm and tranquility of Sikkim at our cozy homestay, where comfort meets
          the breathtaking beauty of the Himalayas. Every corner of our homestay is designed to make
          you feel at home while surrounded by nature.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Our homestay offers a perfect blend of traditional Sikkimese hospitality and modern
          amenities. Enjoy warm, welcoming hosts, serene mountain views, and a peaceful retreat
          away from the hustle and bustle.
        </motion.p>
        
      </div>
      
      <motion.div 
        className="about-actions"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
       <motion.a 
  href="/about" 
  className="about-btn btn-primary"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <i className="fas fa-info-circle"></i>
  <span className="btn-text">
    About Us
    <span className="inline-arrow">
      <i className="fas fa-arrow-right"></i>
    </span>
  </span>
</motion.a>
        
        {/* <a href="/contact" className="about-btn btn-secondary">
          <i className="fas fa-phone-alt"></i>
          Contact Us
        </a> */}
      </motion.div>
    </motion.div>
    
    
    {/* Image Content */}
    <motion.div 
      className="about-image-content"
      variants={itemVariants}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="image-container">
        <img
          src="/assets/gallery/himalaya.jpeg"
          alt="Sikkim landscape"
          className="main-image"
          loading="lazy"
        />
        
        {/* Image Overlay Elements */}
        <div className="image-overlay">
          <div className="overlay-card card-1">
            <i className="fas fa-mountain"></i>
            <span>Himalayan Views</span>
          </div>
          <div className="overlay-card card-2">
            <i className="fas fa-home"></i>
            <span>Cozy Stay</span>
          </div>
          <div className="overlay-card card-3">
            <i className="fas fa-utensils"></i>
            <span>Local Cuisine</span>
          </div>
        </div>
        
        {/* Floating Badge */}
        <div className="floating-badge">
          <i className="fas fa-award"></i>
          <span>Best Homestay 2024</span>
        </div>
      </div>
      
      
      {/* Testimonial Card */}
      <motion.div 
        className="testimonial-card"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="testimonial-content">
          <i className="fas fa-quote-left quote-icon"></i>
          <p className="testimonial-text">
            "The most authentic Himalayan experience we've ever had. The hospitality was incredible!"
          </p>
          <div className="testimonial-author">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
              alt="Guest" 
              className="author-avatar"
            />
            <div className="author-info">
              <h4>Rahul Sharma</h4>
              <span>From Delhi</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
  </div>
 {/* ROOMS SECTION */}
          <motion.section
            className="what-we-do section-bg-2 section-space overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="container">
              <div className="row mb-60 align-items-lg-end align-items-center">
                <div className="col-xl-6">
                  <div className="section__title-wrapper text-center text-xl-start">
                    <div className="section_subtitle justify-content-start mb-13">
                      <span className="about-section" style={{ marginLeft: "50px" }}>
                        <span data-width="40px" className="left-seperator"></span>
                        What We Do
                      </span>
                      <h3 className="section__title text-capitalize mb-0 overflow-hidden">
                        Our Rooms
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row mb-minus-30" style={{display: "grid", gap: "20px" }}>
                {rooms.map((service, index) => (
                  <div className="col-xl-4 col-md-6" key={index}>
                    <motion.div
                      className="what-we-do__item d-flex flex-column mb-20"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="what-we-do__item-bg"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80")' }}
                      ></div>
    
                      <div className="what-we-do__item-img mb-20">
                        <i className={`fa-solid ${service.icon}`}></i>
                      </div>
    
                      <div className="what-we-do__item-text mb-20">
                        <h4 className="title mb-20">
                          <Link to={service.link}>
                            {service.title}
                          </Link>
                        </h4>
                        <p className="mb-0">{service.desc}</p>
                      </div>
    
                      <Link to={service.link} className="readmore rr-a-16">
                        View Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        {/* Features Grid */}
       <div className="sikkim-layout1">
  {/* Main Heading */}
  <div className="sikkim-header">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <i className="fas fa-mountain"></i> Discover Sikkim's Magic
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Experience the perfect blend of Himalayan beauty, culture, and hospitality
    </motion.p>
  </div>

  {/* Main Container */}
  <div className="sikkim-container">
    
    {/* Left Column: Features */}
    <div className="features-column">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <i className="fas fa-star"></i> Why Choose Us
      </motion.h3>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-tile"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="tile-icon">{feature.icon}</div>
          <div className="tile-content">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Center Column: Image with Overlay */}
    <div className="image-column">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <i className="fas fa-camera"></i> Himalayan Views
      </motion.h3>
      <div className="image-wrapper">
        <img
          src="/assets/gallery/Mountainview.avif"
          alt="Sikkim landscape"
          loading="lazy"
        />
        
        {/* Overlay Cards - Stacked Design */}
        <div className="card-stack">
          {overlayCards.map((card, index) => (
            <motion.div
              key={index}
              className="stack-card"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              whileHover={{ x: 10 }}
              style={{ 
                transform: `translateY(${index * -15}px)`,
                zIndex: overlayCards.length - index
              }}
            >
              <i className={card.icon}></i>
              <span>{card.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Floating Badge */}
        <motion.div
          className="floating-badge"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fas fa-award"></i>
          <span>Best Homestay 2024</span>
        </motion.div>
      </div>

      {/* Bottom Testimonial */}
      <motion.div
        className="testimonial-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="testimonial-content">
          <i className="fas fa-quote-left"></i>
          <p>"Most authentic Himalayan experience we've ever had!"</p>
          <div className="guest-info">
            <span>Rahul Sharma</span>
            <span className="location">From Delhi</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Right Column: Additional Info */}
    <div className="info-column">
      <motion.h3
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <i className="fas fa-info-circle"></i> More Information
      </motion.h3>
      
      {/* Sikkim Specials */}
      <motion.div
        className="sikkim-special"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h4>Sikkim Specials</h4>
        <ul className="special-list">
          <li><i className="fas fa-leaf"></i> Organic Tea Gardens</li>
          <li><i className="fas fa-hiking"></i> Guided Mountain Treks</li>
          <li><i className="fas fa-spa"></i> Hot Spring Access</li>
          <li><i className="fas fa-pray"></i> Monastery Visits</li>
        </ul>
      </motion.div>

      {/* Weather Widget */}
      <motion.div
        className="weather-widget"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="weather-icon">⛅</div>
        <div className="weather-info">
          <span className="temp">18°C</span>
          <span className="location">Gangtok</span>
          <span className="desc">Perfect for trekking</span>
        </div>
      </motion.div>

      {/* Quick Booking */}
      <motion.div
        className="booking-prompt"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <h4>Ready to Visit?</h4>
        <p>Check availability for your Himalayan retreat</p>
        <button className="availability-btn">
          Check Availability
        </button>
      </motion.div>
    </div>
  </div>
</div>
        

        {/* Stats Section */}
        <motion.div className="stats-section" variants={itemVariants}>
          <h2>Our Achievements</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div className="mission-section" variants={itemVariants}>
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                To provide authentic cultural experiences while promoting sustainable tourism
                that benefits both our guests and the local community. We believe in responsible
                travel that preserves the natural beauty and cultural heritage of Sikkim.
              </p>
              <p>
                Every guest who stays with us becomes part of our extended family, experiencing
                the warmth of Sikkimese hospitality and creating memories that last a lifetime.
              </p>
            </div>
            <div className="mission-image">
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&h=300&fit=crop"
                alt="Local culture"
              />
            </div>
          </div>
        </motion.div>
     {/* Vision Section */}
<motion.div className="vision-section" variants={itemVariants}>

  <div className="vision-content">

    {/* Image Left */}
   <div className="mission-image">
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&h=300&fit=crop"
                alt="Local culture"
              />
            </div>

    {/* Content Right */}
      <div className="mission-text">
         <h2>Our Vision</h2>
              <p>
                To provide authentic cultural experiences while promoting sustainable tourism
                that benefits both our guests and the local community. We believe in responsible
                travel that preserves the natural beauty and cultural heritage of Sikkim.
              </p>
              <p>
                Every guest who stays with us becomes part of our extended family, experiencing
                the warmth of Sikkimese hospitality and creating memories that last a lifetime.
              </p>
            </div>

  </div>
</motion.div>


        
        
      </div>
    </motion.section>
  );
};

export default About;
