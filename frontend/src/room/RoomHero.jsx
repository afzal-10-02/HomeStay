import { motion } from 'framer-motion';

const RoomHero = ({ room }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      className="room-hero d-flex align-items-center justify-content-center"
      style={{ 
        backgroundImage: `url(${room.images[0]})`,
        // height: '65vh',
        minHeight: '600px',
        maxHeight: '600px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
      variants={itemVariants}
    >
      <div 
        className="room-hero-overlay position-absolute top-0 start-0 w-100 h-100"
        style={{ background: 'linear-gradient(135deg, #212529d1 0%, #212529ba 100%)' }}
      />
      <div className="room-hero-content text-center text-white position-relative z-2 pt-6">
        <h1 className="display-3 fw-bold mb-4">{room.title}</h1>
        <div className="price-container d-flex align-items-center justify-content-center gap-3 flex-wrap mb-4">
          {room.discountedPrice && (
            <span className="original-price fs-4 text-white-50 text-decoration-line-through">
              {room.price}/night
            </span>
          )}
          <span className="room-price display-4 fw-bolder text-rgb-white">
            {room.discountedPrice || room.price}/night
          </span>
          {room.discount && (
            <span 
              className="discount-badge rounded-pill px-3 py-2 fw-semibold"
              style={{
                background: 'linear-gradient(135deg, #F4A261, #E9C46A)',
                boxShadow: '0 4px 12px rgba(244, 162, 97, 0.3)'
              }}
            >
              {room.discount}
            </span>
          )}
        </div>
        <p className="room-description fs-5 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
          {room.description}
        </p>
        <div className="room-stats d-flex justify-content-center gap-4 flex-wrap mt-4">
          <span className="stat-item d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <i className="fas fa-users" style={{ color: '#fff' }}></i> {room.capacity}
          </span>
          <span className="stat-item d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <i className="fas fa-expand-arrows-alt" style={{ color: '#ffffff' }}></i> {room.size}
          </span>
          <span className="stat-item d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <i className="fas fa-bed" style={{ color: '#ffffff' }}></i> {room.bed}
          </span>
          <span className="stat-item d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <i className="fas fa-star" style={{ color: '#ffffff' }}></i> {room.rating} ({room.reviews} reviews)
          </span>
        </div>
      </div>
    </motion.section>
  );
};

export default RoomHero;