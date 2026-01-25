import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [searchData, setSearchData] = useState({
    location: 'Sikkim',
    homestayType: 'Any Homestay',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'Any Room'
  });

  const [focusedField, setFocusedField] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Images from PUBLIC folder
  const carouselImages = [
    "/assets/homestay/changu.jpeg",
    "/assets/gallery/slider1.webp",
    "/assets/gallery/slider2.webp"
  ];

  // Auto slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search data:', searchData);
    alert(`Searching ${searchData.homestayType} in ${searchData.location} for ${searchData.guests} guests in ${searchData.roomType}`);
  };

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  // Calculate tomorrow's date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Calculate day after tomorrow
  const getDayAfterTomorrow = () => {
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    return dayAfter.toISOString().split('T')[0];
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const locations = [
    { value: 'Sikkim', label: 'Sikkim', icon: '🏔️' },
    { value: 'Gangtok', label: 'Gangtok', icon: '🌇' },
    { value: 'Pelling', label: 'Pelling', icon: '🌄' },
    { value: 'Lachung', label: 'Lachung', icon: '❄️' },
    { value: 'Lachen', label: 'Lachen', icon: '🏞️' },
    { value: 'Namchi', label: 'Namchi', icon: '🙏' },
    { value: 'Ravangla', label: 'Ravangla', icon: '🌿' },
    { value: 'Yuksom', label: 'Yuksom', icon: '👑' }
  ];

  const homestayTypes = [
    { value: 'Any Homestay', label: 'Any Homestay', icon: '🏠' },
    { value: 'Family Homestay', label: 'Family Homestay', icon: '👨‍👩‍👧‍👦' },
    { value: 'Luxury Homestay', label: 'Luxury Homestay', icon: '✨' },
    { value: 'Eco Homestay', label: 'Eco Homestay', icon: '🌱' },
    { value: 'Traditional Homestay', label: 'Traditional Homestay', icon: '🏡' },
    { value: 'Farm Homestay', label: 'Farm Homestay', icon: '🚜' },
    { value: 'Mountain View Homestay', label: 'Mountain View', icon: '⛰️' }
  ];

  const roomTypes = [
    { value: 'Any Room', label: 'Any Room', icon: '🛏️' },
    { value: 'Deluxe Room', label: 'Deluxe Room', icon: '✨' },
    { value: 'Family Suite', label: 'Family Suite', icon: '👨‍👩‍👧‍👦' },
    { value: 'Traditional Cottage', label: 'Traditional Cottage', icon: '🏡' },
    { value: 'Budget Room', label: 'Budget Room', icon: '💰' },
    { value: 'Luxury Villa', label: 'Luxury Villa', icon: '👑' },
    { value: 'Honeymoon Suite', label: 'Honeymoon Suite', icon: '💖' }
  ];

  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5', label: '5+ Guests' }
  ];

  return (
    <motion.section 
      className="hero" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      {/* Carousel */}
      <div className="hero-carousel">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="carousel-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${carouselImages[currentSlide]})`,
            }}
          />
        </AnimatePresence>

        {/* Carousel Navigation */}
        <div className="carousel-controls">
          <button className="carousel-prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="carousel-dots">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel Info */}
        <div className="carousel-info">
          <div className="slide-counter">
            <span className="current-slide">{currentSlide + 1}</span>
            <span className="total-slides"> / {carouselImages.length}</span>
          </div>
          <button 
            className="pause-btn" 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
          >
            <i className={`fas fa-${isAutoPlaying ? 'pause' : 'play'}`}></i>
          </button>
        </div>
      </div>

      <motion.div
        className="hero-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="tags">
          <span>🏡 Homestay</span>
          <span>✨ Luxury</span>
          <span>🌿 Nature</span>
          <span>🏔️ Sikkim</span>
        </div>

        <motion.h1 
          className="hero-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover Your Perfect<br />
          <span className="highlight">Sikkim Homestay</span> Experience
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Experience authentic Sikkimese hospitality in luxury homestays nestled in the Himalayas.
          Book your serene getaway today.
        </motion.p>

        <motion.form 
          className="search-container compact"
          onSubmit={handleSearch}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="search-grid compact-grid">
            {/* Location */}
            <div className={`form-group ${focusedField === 'location' ? 'focused' : ''}`}>
              <label className="form-label">
                <i className="fas fa-map-marker-alt"></i> Location
              </label>
              <div className="select-wrapper compact">
                <select
                  value={searchData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  onFocus={() => handleFocus('location')}
                  onBlur={handleBlur}
                  className="form-select compact"
                >
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.icon} {loc.label}
                    </option>
                  ))}
                </select>
                <i className="fas fa-chevron-down select-arrow"></i>
              </div>
            </div>

            {/* Check-in Date */}
            <div className={`form-group ${focusedField === 'checkIn' ? 'focused' : ''}`}>
              <label className="form-label">
                <i className="fas fa-calendar-alt"></i> Check-in
              </label>
              <div className="date-wrapper compact">
                <input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  onFocus={() => handleFocus('checkIn')}
                  onBlur={handleBlur}
                  min={getTomorrowDate()}
                  className="form-input compact"
                />
                <span className="date-hint">Select date</span>
              </div>
            </div>

            {/* Check-out Date */}
            <div className={`form-group ${focusedField === 'checkOut' ? 'focused' : ''}`}>
              <label className="form-label">
                <i className="fas fa-calendar-check"></i> Check-out
              </label>
              <div className="date-wrapper compact">
                <input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  onFocus={() => handleFocus('checkOut')}
                  onBlur={handleBlur}
                  min={searchData.checkIn || getDayAfterTomorrow()}
                  className="form-input compact"
                />
                <span className="date-hint">Select date</span>
              </div>
            </div>

            {/* Guests */}
            <div className={`form-group ${focusedField === 'guests' ? 'focused' : ''}`}>
              <label className="form-label">
                <i className="fas fa-users"></i> Guests
              </label>
              <div className="select-wrapper compact">
                <select
                  value={searchData.guests}
                  onChange={(e) => handleInputChange('guests', e.target.value)}
                  onFocus={() => handleFocus('guests')}
                  onBlur={handleBlur}
                  className="form-select compact"
                >
                  {guestOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <i className="fas fa-chevron-down select-arrow"></i>
              </div>
            </div>

            {/* Search Button */}
            <div className="form-group search-btn-group">
              <motion.button
                type="submit"
                className="search-button compact-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-search"></i>
                <span>Find Homestay</span>
                <i className="fas fa-arrow-right"></i>
              </motion.button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="quick-filters">
            <span className="filter-label">Popular:</span>
            <button 
              type="button" 
              className="filter-btn compact"
              onClick={() => {
                const tomorrow = getTomorrowDate();
                const dayAfter = getDayAfterTomorrow();
                setSearchData({
                  location: 'Lachung',
                  homestayType: 'Mountain View Homestay',
                  checkIn: tomorrow,
                  checkOut: dayAfter,
                  guests: '2',
                  roomType: 'Deluxe Room'
                });
              }}
            >
              <i className="fas fa-mountain"></i> Mountain View
            </button>
            <button 
              type="button" 
              className="filter-btn compact"
              onClick={() => {
                setSearchData({
                  location: 'Gangtok',
                  homestayType: 'Luxury Homestay',
                  checkIn: '',
                  checkOut: '',
                  guests: '4',
                  roomType: 'Family Suite'
                });
              }}
            >
              <i className="fas fa-users"></i> Family Stay
            </button>
            <button 
              type="button" 
              className="filter-btn compact"
              onClick={() => {
                setSearchData({
                  location: 'Pelling',
                  homestayType: 'Traditional Homestay',
                  checkIn: '',
                  checkOut: '',
                  guests: '2',
                  roomType: 'Traditional Cottage'
                });
              }}
            >
              <i className="fas fa-home"></i> Traditional
            </button>
          </div>
        </motion.form>
      </motion.div>
  </motion.section>
  );
};

export default Hero;