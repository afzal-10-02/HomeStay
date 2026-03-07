const RoomOverview = ({ room }) => {
  return (
    <div className="room-info">
      <h2 className="mb-2" style={{ paddingBottom: '10px' }}>Room Overview</h2>
      <p className="room-full-description fs-6 mb-3 text-center" style={{ color: '#6B7280' }}>
        {room.description}
      </p>
      
      <div 
        className="room-meta p-4 mb-4 rounded"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 111, 92, 0.1) 0%, rgba(58, 161, 126, 0.05) 100%)',
          borderLeft: '5px solid #1E6F5C'
        }}
      >
        <div className="row g-3">
          <div className="col-md-6">
            <div className="meta-item">
              <i className="fas fa-users fs-4" style={{ color: '#1E6F5C' }}></i>
              <strong className="me-2" style={{ color: '#1F2933' }}> Capacity:</strong> 
              <span style={{ color: '#6B7280' }}>{room.capacity}</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="meta-item">
              <i className="fas fa-expand-arrows-alt fs-4" style={{ color: '#1E6F5C' }}></i>
              <strong className="me-2" style={{ color: '#1F2933' }}> Size:</strong> 
              <span style={{ color: '#6B7280' }}>{room.size}</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="meta-item">
              <i className="fas fa-bed fs-4" style={{ color: '#1E6F5C' }}></i>
              <strong className="me-2" style={{ color: '#1F2933' }}> Bed Type:</strong> 
              <span style={{ color: '#6B7280' }}>{room.bed}</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="meta-item">
              <i className="fas fa-door-open fs-4" style={{ color: '#1E6F5C' }}></i>
              <strong className="me-2" style={{ color: '#1F2933' }}> Category:</strong> 
              <span style={{ color: '#6B7280', textTransform: 'capitalize' }}>{room.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mb-4">
        <h3 className="h4 mb-3" style={{ color: '#1F2933' }}>
          <i className="fas fa-check-circle me-2" style={{ color: 'rgb(30 111 92)' }}></i> Room Features & Amenities
        </h3>
        <div className="row g-2">
          {/* Combine features and amenities from your data file */}
          {[...(room.features || []), ...(room.amenities || [])].map((item, index) => (
            <div key={index} className="col-md-6">
              <div 
                className="p-3 mb-2 rounded"
                style={{
                  borderLeft: '4px solid rgb(30 111 92 / 80%)',
                  background: 'linear-gradient(to right, #fff, #fffaf0)'
                }}
              >
                <i className="fas fa-check-circle me-2" style={{ color: '#1E6F5C' }}></i> 
                <span style={{ color: '#1F2933' }}>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomOverview;