import { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm = ({ homestayName, homestayId, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: ''
  });

  // State to manage API submission status
  const [status, setStatus] = useState({
    loading: false,
    message: '',
    type: '' // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset status and start loading
    setStatus({ loading: true, message: '', type: '' });

    // Prepare the payload
    const bookingPayload = {
      ...formData,
      homestayId,
      homestayName,
      // Ensure guests is a number
      guests: Number(formData.guests)
    };

    try {
      // REPLACE WITH YOUR ACTUAL API ENDPOINT 
      const API_URL = 'http://localhost:5000/booking';

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if your API requires it
          // 'Authorization': `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify(bookingPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit booking request.');
      }

      // Success Flow
      setStatus({
        loading: false,
        message: 'Booking request sent successfully! We will contact you soon.',
        type: 'success'
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
        specialRequests: ''
      });

      // Optional: Close modal after a delay
      setTimeout(() => {
        if (onClose) onClose();
      }, 2000);

    } catch (error) {
      console.error('Booking Error:', error);
      setStatus({
        loading: false,
        message: error.message || 'Something went wrong. Please try again.',
        type: 'error'
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <motion.div
      className="booking-form-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="booking-form-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose} disabled={status.loading}>✕</button>
        
        <div className="booking-form-header">
          <h3>Book Your Stay</h3>
          {homestayName && <p className="selected-homestay">Homestay: <strong>{homestayName}</strong></p>}
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          
          {/* Status Message Area */}
          {status.message && (
            <div 
              style={{
                padding: '10px',
                marginBottom: '15px',
                borderRadius: '6px',
                fontSize: '0.9rem',
                textAlign: 'center',
                backgroundColor: status.type === 'success' ? '#d1e7dd' : '#f8d7da',
                color: status.type === 'success' ? '#0f5132' : '#842029',
                border: `1px solid ${status.type === 'success' ? '#badbcc' : '#f5c2c7'}`
              }}
            >
              {status.message}
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                disabled={status.loading}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                disabled={status.loading}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="checkIn">Check-in Date *</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                min={today}
                required
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkOut">Check-out Date *</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={formData.checkIn || today}
                required
                disabled={status.loading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any special requests or requirements..."
              rows={4}
              disabled={status.loading}
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary booking-submit"
            disabled={status.loading}
            style={{ 
              opacity: status.loading ? 0.7 : 1, 
              cursor: status.loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            {status.loading ? (
              <>
                <span className="spinner" style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></span>
                Submitting...
              </>
            ) : (
              'Submit Booking Request'
            )}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default BookingForm;