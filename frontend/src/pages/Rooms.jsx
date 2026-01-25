import RoomCard from "../components/RoomCard";

const rooms = [
  { name: "Deluxe Room", price: 1500, image: "https://images.unsplash.com/photo-1582719478149-1b7c1b1fbdff" },
  { name: "Standard Room", price: 1000, image: "https://images.unsplash.com/photo-1576671087381-5b37f16b8ee1" },
  { name: "Family Room", price: 2000, image: "https://images.unsplash.com/photo-1590490358972-2f46d2b4b76b" },
];

const RoomsSection = () => {
  return (
    <section className="rooms">
      <h2>Our Rooms</h2>
      <div className="room-cards">
        {rooms.map((room, i) => (
          <RoomCard key={i} room={room} />
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
