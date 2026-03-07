// src/components/RoomCard.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <motion.div
        className="what-we-do__item h-100"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="what-we-do__item-bg"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80")' }}
        ></div>
        <div className="what-we-do__item-img mb-4">
          <i className={`fa-solid ${room.icon}`}></i>
        </div>
        <div className="what-we-do__item-text mb-4">
          <h4 className="title mb-3 text-dark">
            <a
              style={{
                textDecoration: "none",
                display: "inline-block"
              }}
              href={room.link}
            >
              {room.title}
            </a>
          </h4>
          <p className="mb-0">{room.desc}</p>
        </div>
        <a href={room.link} className="readmore rr-a-16 mt-auto">
          View Details
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </motion.div>
    </div>
  );
};

export default RoomCard;