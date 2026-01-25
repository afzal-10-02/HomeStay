import { motion } from "framer-motion";

const RoomCard = ({ room }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="room-card">
      <img src={room.image} alt={room.name} />
      <h3>{room.name}</h3>
      <p>₹{room.price}/night</p>
    </motion.div>
  );
};

export default RoomCard;
