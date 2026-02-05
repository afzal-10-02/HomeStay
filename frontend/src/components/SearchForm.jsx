import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/SearchForm.css';

const SearchForm = () => {
  // --- State Management ---
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    homestayType: '',
    roomType: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  // --- Data Options ---
  const locations = [
    { value: 'Gangtok', label: 'Gangtok', icon: '🏔️' },
    { value: 'Lachung', label: 'Lachung', icon: '❄️' },
    { value: 'Pelling', label: 'Pelling', icon: '⛩️' },
    { value: 'Darjeeling', label: 'Darjeeling', icon: '☕' },
  ];

  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5+', label: '5+ Guests' },
  ];

  // --- Helper Functions ---
  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getDayAfterTomorrow = () => {
    const today = new Date();
    const dayAfter = new Date(today);
    dayAfter.setDate(today.getDate() + 2);
    return dayAfter.toISOString().split('T')[0];
  };

  // --- Handlers ---
  const handleInputChange = (field, value) => {
    setSearchData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with:', searchData);
    // Add API call or navigation logic here
  };

  return (
    <motion.form
      className="search-container compact"
      onSubmit={handleSearch}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.8 }}
    >
      {/* --- Title Section --- */}
      <div className="search-header">
        <h2 className="search-title">Find Homestay</h2>
        <p className="search-subtitle">Discover the best local stays</p>
      </div>

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
              <option value="" disabled>Where to?</option>
              {locations.map((loc) => (
                <option key={loc.value} value={loc.value}>
                  {loc.icon} {loc.label}
                </option>
              ))}
            </select>
            <i className="fas fa-chevron-down select-arrow"></i>
          </div>
        </div>

        {/* Check-in */}
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
          </div>
        </div>

        {/* Check-out */}
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-search"></i>
            <span>Search</span>
          </motion.button>
        </div>
      </div>

      {/* --- Quick Filters --- */}
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
  );
};

export default SearchForm;