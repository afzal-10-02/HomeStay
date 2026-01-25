// src/data/roomsData.js

// Rooms data for all room types
export const roomsData = [
  {
    id: 1,
    slug: "deluxe",
    title: "Deluxe Room",
    category: "luxury",
    description: "Spacious luxury rooms with premium interiors, scenic views, and top-class amenities. Perfect for travelers seeking comfort and elegance.",
    detailedDescription: "Our Deluxe Rooms offer the ultimate comfort with king-size beds, premium bedding, and panoramic mountain views. Each room features modern amenities including a private balcony, minibar, and smart TV. The en-suite bathroom comes with a rainfall shower and luxury toiletries.",
    price: "₹4,500/night",
    discountedPrice: "₹4,000/night",
    discount: "11% off",
    size: "350 sq ft",
    capacity: "2 Adults",
    bedType: "King Size Bed",
    amenities: [
      "King-size bed with premium bedding",
      "Private balcony with mountain view",
      "Air conditioning & heating",
      "Free high-speed Wi-Fi",
      "Smart TV with streaming services",
      "Minibar with complimentary drinks",
      "In-room safe",
      "Coffee/tea maker",
      "Rainfall shower",
      "Luxury toiletries",
      "Daily housekeeping",
      "24/7 room service"
    ],
    images: [
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80"
    ],
    features: ["Best Seller", "Mountain View", "Free Cancellation"],
    rating: 4.8,
    reviews: 128,
    available: true
  },
  {
    id: 2,
    slug: "family",
    title: "Family Room",
    category: "family",
    description: "Comfortable and spacious rooms ideal for families, with extra beds and privacy. Designed for a memorable family vacation.",
    detailedDescription: "Our Family Rooms are specially designed for families traveling together. With two double beds and space for an extra rollaway bed, these rooms provide ample space for everyone. The room includes a separate seating area, children's amenities, and safety features for a worry-free stay.",
    price: "₹3,800/night",
    discountedPrice: "₹3,500/night",
    discount: "8% off",
    size: "450 sq ft",
    capacity: "4 Adults + 1 Child",
    bedType: "2 Double Beds",
    amenities: [
      "Two double beds with extra bedding",
      "Extra rollaway bed available",
      "Family-friendly amenities",
      "Child safety features",
      "Separate seating area",
      "Smart TV with kids channels",
      "Free high-speed Wi-Fi",
      "Air conditioning & heating",
      "In-room refrigerator",
      "Coffee/tea maker",
      "Baby crib on request",
      "Board games & toys"
    ],
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80"
    ],
    features: ["Family Friendly", "Extra Bed Available", "Kids Amenities"],
    rating: 4.7,
    reviews: 94,
    available: true
  },
  {
    id: 3,
    slug: "budget",
    title: "Budget Room",
    category: "budget",
    description: "Affordable and cozy rooms offering essential comfort for budget-conscious travelers.",
    detailedDescription: "Our Budget Rooms provide all the essential comforts at an affordable price. Clean, comfortable, and equipped with all necessary amenities, these rooms are perfect for travelers who want value without compromising on basic comforts.",
    price: "₹1,800/night",
    discountedPrice: null,
    discount: null,
    size: "220 sq ft",
    capacity: "2 Adults",
    bedType: "Double Bed",
    amenities: [
      "Comfortable double bed",
      "Attached bathroom with hot water",
      "Free Wi-Fi",
      "LED TV",
      "Air conditioning",
      "Study table",
      "Wardrobe",
      "24/7 hot water",
      "Daily housekeeping",
      "Drinking water",
      "Room heater on request",
      "Luggage storage"
    ],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=1200&q=80"
    ],
    features: ["Economy", "Best Value", "Essential Amenities"],
    rating: 4.5,
    reviews: 203,
    available: true
  },
  {
    id: 4,
    slug: "cottage",
    title: "Traditional Cottage",
    category: "traditional",
    description: "Experience local culture in our traditional cottages with modern comforts.",
    detailedDescription: "Immerse yourself in Sikkimese culture with our Traditional Cottages. Built using local materials and featuring authentic architecture, these cottages offer a unique cultural experience while providing modern amenities for your comfort.",
    price: "₹2,500/night",
    discountedPrice: "₹2,200/night",
    discount: "12% off",
    size: "300 sq ft",
    capacity: "2 Adults",
    bedType: "Double Bed",
    amenities: [
      "Traditional wooden architecture",
      "Local craft decor",
      "Private sit-out area",
      "Fireplace (winter months)",
      "Modern attached bathroom",
      "Free Wi-Fi",
      "LED TV",
      "Coffee/tea maker",
      "Local artwork display",
      "Gardening tools available",
      "Traditional welcome drink",
      "Cultural experience activities"
    ],
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80"
    ],
    features: ["Traditional", "Cultural Experience", "Unique Stay"],
    rating: 4.9,
    reviews: 156,
    available: true
  },
  {
    id: 5,
    slug: "mountain-view",
    title: "Mountain View Room",
    category: "premium",
    description: "Rooms with private balconies offering breathtaking views of the mountains.",
    detailedDescription: "Wake up to stunning Himalayan views from your private balcony. Our Mountain View Rooms are designed to maximize the panoramic vistas while providing luxurious comfort. Perfect for nature lovers and photography enthusiasts.",
    price: "₹3,200/night",
    discountedPrice: "₹2,900/night",
    discount: "9% off",
    size: "320 sq ft",
    capacity: "2 Adults",
    bedType: "King Size Bed",
    amenities: [
      "Private balcony with mountain view",
      "Floor-to-ceiling windows",
      "King-size bed with view",
      "Sunrise/sunset viewing guide",
      "Binoculars provided",
      "Air conditioning & heating",
      "Free high-speed Wi-Fi",
      "Smart TV",
      "Minibar",
      "Coffee/tea maker",
      "Luxury bathroom",
      "Yoga mat for balcony practice"
    ],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80"
    ],
    features: ["Panoramic View", "Sunrise View", "Nature Lover's Choice"],
    rating: 4.8,
    reviews: 142,
    available: true
  },
  {
    id: 6,
    slug: "honeymoon",
    title: "Honeymoon Suite",
    category: "luxury",
    description: "Romantic suites designed for couples, featuring elegant décor and serene ambiance.",
    detailedDescription: "Celebrate your love in our specially designed Honeymoon Suites. With romantic decor, premium amenities, and special touches, these suites create the perfect atmosphere for a memorable romantic getaway.",
    price: "₹5,000/night",
    discountedPrice: "₹4,500/night",
    discount: "10% off",
    size: "400 sq ft",
    capacity: "2 Adults",
    bedType: "King Size Bed",
    amenities: [
      "Romantic decor with flowers",
      "King-size canopy bed",
      "Jacuzzi in bathroom",
      "Private balcony with sunset view",
      "Champagne on arrival",
      "Romantic dinner setup",
      "Premium bathrobes & slippers",
      "Air conditioning & heating",
      "Smart TV with movies",
      "Minibar with premium drinks",
      "In-room breakfast service",
      "Couple's spa package discount"
    ],
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80"
    ],
    features: ["Romantic", "Jacuzzi", "Special Package"],
    rating: 4.9,
    reviews: 87,
    available: true
  }
];
// Add this to your src/data/roomsData.js file

// Gallery images data
export const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=800&q=80",
    alt: "Mountain View Room",
    category: "rooms",
    title: "Mountain View Suite",
    description: "Panoramic Himalayan views from private balcony"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    alt: "Traditional Cottage",
    category: "rooms",
    title: "Traditional Sikkimese Cottage",
    description: "Authentic local architecture with modern comforts"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    alt: "Dining Area",
    category: "dining",
    title: "Cozy Dining Area",
    description: "Enjoy local cuisine in warm ambiance"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    alt: "Garden View",
    category: "garden",
    title: "Serene Garden",
    description: "Peaceful garden with seasonal flowers"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Himalayan View",
    category: "views",
    title: "Sunrise Over Himalayas",
    description: "Breathtaking morning views"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Interior Design",
    category: "interior",
    title: "Traditional Interior",
    description: "Handcrafted wooden furniture"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    alt: "Common Area",
    category: "common",
    title: "Lounge Area",
    description: "Cozy fireplace lounge"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    alt: "Outdoor Seating",
    category: "garden",
    title: "Outdoor Seating",
    description: "Relax in nature's lap"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    alt: "Bathroom",
    category: "rooms",
    title: "Modern Bathroom",
    description: "Clean and spacious facilities"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    alt: "Cultural Decor",
    category: "interior",
    title: "Cultural Artifacts",
    description: "Local art and craftsmanship"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    alt: "Night View",
    category: "views",
    title: "Starry Night",
    description: "Clear Himalayan night sky"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    alt: "Breakfast Setup",
    category: "dining",
    title: "Morning Breakfast",
    description: "Fresh local produce"
  }
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Delhi, India",
    comment: "Amazing experience! The Deluxe Room was perfect with breathtaking mountain views. The staff was exceptionally helpful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    date: "March 2024",
    roomType: "Deluxe Room"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Mumbai, India",
    comment: "Perfect family stay! The Family Room had ample space for all of us. Kids loved the play area and the food was delicious.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
    date: "February 2024",
    roomType: "Family Room"
  },
  {
    id: 3,
    name: "David Wilson",
    location: "London, UK",
    comment: "Authentic Sikkimese experience! The Traditional Cottage was beautifully decorated with local crafts. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    date: "January 2024",
    roomType: "Traditional Cottage"
  },
  {
    id: 4,
    name: "Meera Singh",
    location: "Bangalore, India",
    comment: "Budget-friendly yet very comfortable! The Budget Room had all essential amenities. Great value for money.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    date: "December 2023",
    roomType: "Budget Room"
  },
  {
    id: 5,
    name: "Amit & Anjali",
    location: "Kolkata, India",
    comment: "Perfect honeymoon! The Honeymoon Suite was romantic and luxurious. The jacuzzi and mountain view made it special.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w-400&q=80",
    date: "November 2023",
    roomType: "Honeymoon Suite"
  },
  {
    id: 6,
    name: "Nature Lover",
    location: "Switzerland",
    comment: "The Mountain View Room was worth every penny! Waking up to Himalayan sunrise was magical. Will come back!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&q=80",
    date: "October 2023",
    roomType: "Mountain View Room"
  }
];

// Room services data
export const roomServices = [
  {
    id: 1,
    icon: "fa-wifi",
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary high-speed internet access throughout the property"
  },
  {
    id: 2,
    icon: "fa-utensils",
    title: "Local Cuisine",
    description: "Authentic Sikkimese meals prepared with fresh local ingredients"
  },
  {
    id: 3,
    icon: "fa-car",
    title: "Secure Parking",
    description: "Safe and spacious parking area for all types of vehicles"
  },
  {
    id: 4,
    icon: "fa-snowflake",
    title: "AC/Heating",
    description: "Individual temperature control in all rooms for year-round comfort"
  },
  {
    id: 5,
    icon: "fa-concierge-bell",
    title: "24/7 Service",
    description: "Round-the-clock front desk assistance and room service"
  },
  {
    id: 6,
    icon: "fa-mountain",
    title: "Guided Tours",
    description: "Expert arrangements for local sightseeing and trekking expeditions"
  },
  {
    id: 7,
    icon: "fa-spa",
    title: "Wellness Center",
    description: "Traditional Sikkimese massage and wellness therapies available"
  },
  {
    id: 8,
    icon: "fa-gift",
    title: "Welcome Package",
    description: "Complimentary welcome drink and local sweets on arrival"
  },
  {
    id: 9,
    icon: "fa-luggage-cart",
    title: "Luggage Storage",
    description: "Secure luggage storage before check-in and after check-out"
  },
  {
    id: 10,
    icon: "fa-bell-concierge",
    title: "Concierge Service",
    description: "Personalized assistance for travel plans and local experiences"
  },
  {
    id: 11,
    icon: "fa-bicycle",
    title: "Bicycle Rental",
    description: "Mountain bikes available for exploring the surroundings"
  },
  {
    id: 12,
    icon: "fa-fire",
    title: "Bonfire Nights",
    description: "Evening bonfire with local music during season"
  }
];

// Helper function to get room by slug
export const getRoomBySlug = (slug) => {
  return roomsData.find(room => room.slug === slug) || roomsData[0];
};

// Helper function to get featured rooms
export const getFeaturedRooms = () => {
  return roomsData.filter(room => room.rating >= 4.7);
};

// Helper function to get rooms by category
export const getRoomsByCategory = (category) => {
  return roomsData.filter(room => room.category === category);
};

// Default export
export default {
  roomsData,
  testimonials,
  roomServices,
  getRoomBySlug,
  getFeaturedRooms,
  getRoomsByCategory
};