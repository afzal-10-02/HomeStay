import React from 'react';

const RoomServices = () => {
  const services = [
    { icon: '🧹', name: 'Daily Housekeeping' },
    { icon: '📶', name: 'Free Wi-Fi' },
    { icon: '💧', name: 'Hot Water' },
    { icon: '🔥', name: 'Heating' },
    { icon: '🍽️', name: 'Room Service' },
    { icon: '👔', name: 'Laundry Service' }
  ];

  return (
    <div className="room-services">
      <h3>Room Services & Amenities</h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <span className="service-icon">{service.icon}</span>
            <span className="service-name">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomServices;