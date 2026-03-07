import { useLightbox } from '../hooks/useLightbox';

const RoomGallery = ({ images }) => {
  const { 
    isOpen, currentImage, currentIndex, 
    openLightbox, closeLightbox, nextImage, prevImage 
  } = useLightbox(images);

  return (
    <>
      <div className="room-gallery">
        <h3 className="h4 mb-3" style={{ color: '#1F2933' }}>Room Gallery</h3>
        <div className="gallery-grid row g-2">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`col-${index === 0 ? '12' : '6'} ${index === 0 ? 'mb-2' : ''}`}
            >
              <div 
                className="gallery-item position-relative overflow-hidden rounded"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: index === 0 ? '300px' : '200px',
                  cursor: 'pointer'
                }}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              >
                <div 
                  className="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                    transform: 'translateY(100%)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <span className="image-number text-white fw-semibold">
                    {index + 1}/{images.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="gallery-note text-center mt-3 fst-italic" style={{ color: '#6B7280' }}>
          Click on images to view in full size
        </p>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="lightbox-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', zIndex: 9999, backdropFilter: 'blur(5px)' }}
          onClick={closeLightbox}
        >
          <div 
            className="lightbox-content position-relative"
            style={{ maxWidth: '90%', maxHeight: '90%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn position-absolute top-0 end-0 m-3 bg-dark border-0 text-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', zIndex: 10000 }}
              onClick={closeLightbox}
            >
              <i className="fas fa-times fs-4"></i>
            </button>

            {images.length > 1 && (
              <>
                <button
                  className="nav-btn prev position-absolute top-50 start-0 translate-middle-y m-3 bg-dark border-0 text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px', zIndex: 10000 }}
                  onClick={prevImage}
                >
                  <i className="fas fa-chevron-left fs-4"></i>
                </button>
                <button
                  className="nav-btn next position-absolute top-50 end-0 translate-middle-y m-3 bg-dark border-0 text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px', zIndex: 10000 }}
                  onClick={nextImage}
                >
                  <i className="fas fa-chevron-right fs-4"></i>
                </button>
              </>
            )}

            <img
              src={currentImage}
              alt={`Gallery Image ${currentIndex + 1}`}
              className="img-fluid"
              style={{ maxHeight: '80vh', objectFit: 'contain', borderRadius: '12px' }}
            />

            <div 
              className="image-counter position-absolute bottom-0 start-50 translate-middle-x mb-3 px-3 py-2 bg-dark bg-opacity-75 text-white rounded-pill"
              style={{ zIndex: 10000 }}
            >
              <span className="fw-semibold">{currentIndex + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomGallery;