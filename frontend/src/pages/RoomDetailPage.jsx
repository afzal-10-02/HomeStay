import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getRoomBySlug } from '../data/roomsData';

import RoomHero from '../room/RoomHero';
import RoomOverview from '../room/RoomOverview';
import RoomGallery from '../room/RoomGallery';
import HomestayServices from '../room/HomestayServices';
import RoomReviews from '../room/RoomReviews';
// Note: You can optionally extract the bottom features grid into a <RoomFeaturesGrid /> component too!

const RoomDetailPage = () => {
  // 1. Grab the slug from the URL (e.g., 'deluxe', 'budget')
  const { slug } = useParams();
  
  // 2. Fetch the data
  const room = getRoomBySlug(slug);

  // Scroll to top when the URL changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 3. Handle invalid URLs gracefully
  if (!room) {
    return <Navigate to="/" replace />; // Or point to a generic /rooms page
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      className={`room-detail-page ${room.slug}-room`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Dynamic Sub-Components */}
      <RoomHero room={room} />

      <section 
        className="room-details-section py-4"
        style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #F7F9F8 100%)' }}
      >
        <div className="container">
          <motion.div className="row g-4" variants={itemVariants}>
            <div className="col-lg-7">
              <RoomOverview room={room} />
            </div>
            <div className="col-lg-5">
              <RoomGallery images={room.images} />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-4" style={{ backgroundColor: '#F7F9F8' }}>
       { <HomestayServices /> }
       { <RoomReviews /> }
      </div>

      {/* Place your Discover Sikkim's Magic layout here. 
          For even cleaner code, extract this into a <DiscoverSikkim /> component! */}
    </motion.div>
  );
};

export default RoomDetailPage;