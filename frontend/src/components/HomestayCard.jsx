import React from 'react';
import { motion } from 'framer-motion';

const HomestayCard = ({ stay, onBook }) => {
  return (
    <motion.div 
      className="homestay-card-premium h-100 bg-white"
      style={{ 
        borderRadius: '16px', 
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        border: '1px solid #f0f0f0',
        transition: 'all 0.3s ease'
      }}
      whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}
    >
      {/* Image Section */}
      <div className="card-img-container" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img 
          src={stay.image} 
          alt={stay.name} 
          className="w-100 h-100 object-fit-cover"
        />
        <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(26, 77, 66, 0.9)', color: '#fff', padding: '6px 14px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          {stay.price}
        </div>
        <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(233, 196, 106, 0.95)', color: '#1a4d42', padding: '6px 12px', borderRadius: '30px', fontSize: '0.8rem', fontWeight: 'bold' }}>
          <i className="fas fa-star me-1"></i> {stay.rating.split('/')[0]}
        </div>
      </div>

      {/* Content Section */}
      <div className="card-body p-4">
        <h3 className="h5 fw-bold mb-1" style={{ color: '#1a4d42', letterSpacing: '-0.3px' }}>{stay.name}</h3>
        <p className="small text-muted mb-3"><i className="fas fa-map-marker-alt me-1 text-danger opacity-75"></i> {stay.location}</p>
        
        <p className="text-secondary small mb-4" style={{ lineHeight: '1.6', height: '40px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {stay.description}
        </p>

        {/* Amenities - Clean List */}
        <div className="amenities-list mb-4">
          <div className="row g-2">
            {stay.amenities.slice(0, 4).map((amenity, i) => (
              <div key={i} className="col-6">
                <div className="d-flex align-items-center gap-2 text-dark small">
                  <i className="fas fa-circle-check text-success" style={{ fontSize: '0.7rem' }}></i>
                  <span>{amenity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="d-flex justify-content-between align-items-center pt-3 border-top">
          <div className="contact-info">
            <span className="d-block text-muted" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contact Host</span>
            <span className="fw-bold" style={{ color: '#1a4d42', fontSize: '0.9rem' }}>{stay.contact}</span>
          </div>
          <button 
            className="btn btn-success px-4 py-2 rounded-3 fw-bold shadow-sm"
            style={{ backgroundColor: '#1a4d42', border: 'none', fontSize: '0.85rem' }}
            onClick={() => onBook(stay)}
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HomestayCard;
