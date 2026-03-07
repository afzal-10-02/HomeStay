// src/data/roomsData.js

export const roomsData = [
  {
    id: 1,
    slug: "deluxe",
    title: "Deluxe Room",
    category: "luxury",
    shortDesc: "Spacious luxury with mountain view",
    description: "Our Deluxe Rooms represent the pinnacle of luxury accommodations in Sikkim. Each room is elegantly appointed with premium furnishings, spa-quality bathrooms, and panoramic mountain views. Modern technology meets traditional aesthetics, creating the perfect sanctuary for discerning travelers seeking an unforgettable experience.",
    price: "9800",
    discountedPrice: "7800",
    discount: "₹2000 off",
    size: "500 sq ft",
    capacity: "2 Adults",
    bed: "King Size Bed",
    rating: 4.9,
    reviews: 156,
    features: [
      "Premium luxury furnishings",
      "King Size bed with premium linens",
      "Spa-quality bathroom",
      "Panoramic mountain views",
      "High-speed internet",
      "Climate control"
    ],
    amenities: [
      "24/7 Room Service", 
      "Concierge", 
      "Premium Spa", 
      "Wine Cellar", 
      "Private Terrace", 
      "Butler Service"
    ],
    images: [
      "../assets/rooms/Delux1.webp",
      "../assets/rooms/delux2.jpg",
      "../assets/rooms/delux3.avif",
      "../assets/rooms/delux4.avif",
    ]
  },
  {
    id: 2,
    slug: "family",
    title: "Family Room",
    category: "family",
    shortDesc: "Spacious & family-friendly",
    description: "Comfortable and spacious rooms ideal for families, with extra beds and privacy. Perfect for your family vacation in the mountains.",
    price: "3800",
    discountedPrice: "3500",
    discount: "8% off",
    size: "450 sq ft",
    capacity: "4 Adults + 1 Child",
    bed: "2 Double Beds",
    rating: 4.7,
    reviews: 94,
    features: ["Family Friendly", "Extra Bed", "Kids Area"],
    amenities: [
      "Two double beds",
      "Extra rollaway bed",
      "Seating area",
      "Kids channels",
      "Wi-Fi",
      "AC",
      "Refrigerator",
      "Baby crib (on request)"
    ],
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200"
    ]
  },
  {
    id: 3,
    slug: "budget",
    title: "Budget Room",
    category: "budget",
    shortDesc: "Affordable & comfortable",
    description: "Our Budget Rooms are designed for travelers seeking comfort without breaking the bank. These compact, well-appointed rooms offer essential amenities including a comfortable bed, private bathroom, and window with views. Perfect for solo travelers or couples looking to maximize their travel budget while enjoying quality accommodation.",
    price: "1800",
    discountedPrice: "1500",
    discount: "₹300 off",
    size: "200 sq ft",
    capacity: "1-2 Adults",
    bed: "Single or Double Bed",
    rating: 4.4,
    reviews: 67,
    features: [
      "Budget-friendly pricing",
      "Clean and comfortable",
      "Private bathroom",
      "Window with views",
      "Essential amenities",
      "Free Wi-Fi"
    ],
    amenities: [
      "Free Wi-Fi", 
      "Shared Kitchen", 
      "Lounge Area", 
      "Laundry Service"
    ],
    images: [
      "/assets/rooms/budget1.avif",
      "/assets/rooms/budget2.avif",
      "/assets/rooms/budget3.avif",
      "/assets/rooms/budget4.jpeg",
    ]
  },
  {
    id: 4,
    slug: "cottage",
    title: "Cottage Room",
    category: "traditional",
    shortDesc: "Authentic cultural stay",
    description: "Experience authentic Himalayan living in our charming Cottage Rooms. Built with traditional local materials and featuring rustic decor, these rooms offer a warm and inviting atmosphere. Each cottage includes a private sitting area, traditional fireplace, and handcrafted wooden furnishings that blend seamlessly with the natural surroundings.",
    price: "6500",
    discountedPrice: "5500",
    discount: "₹1000 off",
    size: "350 sq ft",
    capacity: "3-4 Adults",
    bed: "Double Bed + Single Bed",
    rating: 4.7,
    reviews: 89,
    features: [
      "Traditional Himalayan architecture",
      "Private sitting area",
      "Traditional fireplace",
      "Handcrafted wooden furnishings",
      "Garden views",
      "Free Wi-Fi"
    ],
    amenities: [
      "Private Garden", 
      "Bonfire Area", 
      "Traditional Kitchenette", 
      "Family Lounge", 
      "Children's Play Area", 
      "Pet Friendly"
    ],
    images: [
      "/assets/rooms/cottage1.jpg",
      "/assets/rooms/cottage2.jpeg",
      "/assets/rooms/cottage3.jpeg",
      "/assets/rooms/cottage4.jpeg"
    ]
  },
  {
    id: 5,
    slug: "mountain-view",
    title: "Mountain View Room",
    category: "premium",
    shortDesc: "Breathtaking Himalayan views",
    description: "Private balcony facing mountains with breathtaking Himalayan views. Wake up to the sunrise over the peaks.",
    price: "3200",
    discountedPrice: "2900",
    discount: "9% off",
    size: "320 sq ft",
    capacity: "2 Adults",
    bed: "King Size",
    rating: 4.8,
    reviews: 142,
    features: ["Sunrise View", "Nature Lover's Choice"],
    amenities: [
      "Private balcony",
      "Floor-to-ceiling windows",
      "Binoculars",
      "Yoga mat",
      "Smart TV",
      "Minibar",
      "Wi-Fi"
    ],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=1200"
    ]
  },
  {
    id: 6,
    slug: "honeymoon",
    title: "Honeymoon Suite",
    category: "luxury",
    shortDesc: "Romantic couple’s suite",
    description: "Elegant décor & special touches designed for the perfect romantic getaway. Enjoy luxury amenities with stunning views.",
    price: "5000",
    discountedPrice: "4500",
    discount: "10% off",
    size: "400 sq ft",
    capacity: "2 Adults",
    bed: "King Size Canopy",
    rating: 4.9,
    reviews: 87,
    features: ["Romantic", "Jacuzzi", "Special Package"],
    amenities: [
      "Jacuzzi",
      "Canopy bed",
      "Champagne on arrival",
      "Romantic dinner setup",
      "Premium bathrobes",
      "Sunset view"
    ],
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200",
      "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=1200"
    ]
  }
];

// Room card data for homepage display
export const rooms = roomsData.map(room => ({
  id: room.id,
  icon: room.category === 'luxury' ? "fa-crown" : room.category === 'budget' ? "fa-wallet" : "fa-home", 
  title: room.title,
  desc: room.shortDesc,
  link: `/room/${room.slug}`, // Fixed link to match our new dynamic router path!
  price: `₹${room.discountedPrice || room.price}/night`,
  slug: room.slug
}));

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
  // Add other testimonials here as needed
];

// Room services data
export const roomServices = [
  { id: 1, icon: "fa-wifi", title: "Free High-Speed Wi-Fi", description: "Complimentary high-speed internet access throughout the property" },
  { id: 2, icon: "fa-utensils", title: "Local Cuisine", description: "Authentic Sikkimese meals prepared with fresh local ingredients" },
  { id: 3, icon: "fa-car", title: "Secure Parking", description: "Safe and spacious parking area for all types of vehicles" },
  { id: 4, icon: "fa-snowflake", title: "AC/Heating", description: "Individual temperature control in all rooms for year-round comfort" },
];

// Helper function to get room by slug
export const getRoomBySlug = (slug) => {
  return roomsData.find(room => room.slug === slug) || null;
};

// Default export
export default {
  roomsData,
  rooms,
  testimonials,
  roomServices,
  getRoomBySlug
};