// src/data/destinationsData.js

// ─────────────────────────────────────────────────────────────────────────────
// 1. Detailed destinations / places data
// ─────────────────────────────────────────────────────────────────────────────
export const destinationsData = [
  {
    id: 1,
    name: "Gangtok",
    region: "East Sikkim",
    altitude: "1,650m",
    rating: 4.8,
    description: "The vibrant capital city with culture, markets, and mountain views",
    longDescription:
      "Gangtok is the heart of Sikkim, blending modern development with traditional culture. From bustling markets to serene monasteries, from coffee cafes to local restaurants, Gangtok offers the perfect blend of urban comfort and mountain charm.",
    images: ["https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"],
    highlights: ["Kangla Rangit Viewpoint", "Lal Bazaar Market", "MG Marg Street", "Rumtek Monastery", "Enchey Monastery"],
    bestTime: "September to May",
    accommodation: 50,
    activities: ["Shopping", "Sightseeing", "Dining", "Photography"],
    weather: "Pleasant with cool evenings",
    homestays: 12,
    featured: true
  },
  {
    id: 2,
    name: "Pelling",
    region: "West Sikkim",
    altitude: "2,150m",
    rating: 4.7,
    description: "A serene town with breathtaking views and historic monasteries",
    longDescription:
      "Pelling is a tranquil hill station offering spectacular views of the Kanchenjunga range and the plains of Bengal. The town is home to ancient monasteries, trekking trails, and a peaceful atmosphere that's perfect for rejuvenation.",
    images: ["https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?w=800&q=80"],
    highlights: ["Pemayangtse Monastery", "Sangachoeling Monastery", "Kanyam Village", "Rimbi Waterfall", "Pelling Viewpoint"],
    bestTime: "October to April",
    accommodation: 35,
    activities: ["Trekking", "Monastery Tours", "Nature Walks", "Photography"],
    weather: "Cool and clear",
    homestays: 8,
    featured: true
  },
  {
    id: 8,
    name: "Kanyam",
    region: "West Sikkim",
    altitude: "2,050m",
    rating: 4.5,
    description: "Hidden gem with panoramic views and quiet beauty",
    longDescription:
      "Kanyam is a lesser-known destination offering panoramic views of the Kanchenjunga range and the Teesta Valley. Perfect for those seeking solitude and nature immersion.",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"],
    highlights: ["Panoramic Views", "Orange Orchards", "Tea Gardens", "Quiet Trails", "Local Villages"],
    bestTime: "October to April",
    accommodation: 12,
    activities: ["Nature Walks", "Photography", "Village Tours", "Relaxation"],
    weather: "Pleasant and mild",
    homestays: 2,
    featured: false
  }
  // ← add more places (Lachung, Namchi, Ravangla, etc.) here when needed
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. Region overview cards (used on homepage)
// ─────────────────────────────────────────────────────────────────────────────
export const featuredRegions = [
  {
    id: 1,
    name: "East Sikkim",
    description: "Vibrant capital with monasteries, lakes and mountain views",
    image: "/assets/homestay/mg_marg.jpeg",
    icon: "fas fa-compass",


    color: "#059669",
    highlights: [
      { name: "Gangtok", slug: "gangtok" },
      { name: "Tsomgo Lake", slug: "tsomgo" },
      { name: "Nathula Pass", slug: "nathula" }
    ],
    link: "/homestay/east"
  },
  {
    id: 2,
    name: "West Sikkim",
    description: "Ancient monasteries, waterfalls and majestic Kanchenjunga views",
    image: "/assets/homestay/west.jpg",
    icon: "fas fa-mountain",

    color: "#0d9488",
    highlights: [
      { name: "Pelling", slug: "pelling" },
      { name: "Yuksom", slug: "yuksom" },
      { name: "Khecheopalri", slug: "khecheopalri" }
    ],
    link: "/homestay/west"
  },
  {
    id: 3,
    name: "North Sikkim",
    description: "Snow-covered valleys, hot springs and high-altitude lakes",
    image: "/assets/homestay/north.jpg",
    icon: "fas fa-snowflake",

    color: "#0d9488",
    highlights: [
      { name: "Lachung", slug: "lachung" },
      { name: "Lachen", slug: "lachen" },
      { name: "Yumthang", slug: "yumthang" }
    ],
    link: "/homestay/north"
  },
  {
    id: 4,
    name: "South Sikkim",
    description: "Giant Buddha statues, tea gardens and peaceful monasteries",
    image: "/assets/homestay/south.jpg",
    icon: "fas fa-leaf",

    color: "#0d9488",
    highlights: [
      { name: "Namchi", slug: "namchi" },
      { name: "Ravangla", slug: "ravangla" },
      { name: "Temi Tea Garden", slug: "temi-tea-garden" }
    ],
    link: "/homestay/south"
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. Quick region list (used in search / filters)
// ─────────────────────────────────────────────────────────────────────────────
export const sikkimDestinations = [
  {
    id: 1,
    name: "East Sikkim",
    place: "Gangtok",
    image: "https://images.unsplash.com/photo-1621405581887-3c3f8c0c2c5e?q=80&w=800",
    link: "/destinations/east-sikkim",
    altitude: "1,650m",
    description: "Capital city with vibrant culture and stunning views",
    rating: 4.8,
    reviews: 128,
    featured: true,
    price: "₹2,500/night"
  },
  {
    id: 2,
    name: "West Sikkim",
    place: "Pelling",
    image: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?q=80&w=800",
    link: "/destinations/west-sikkim",
    altitude: "2,150m",
    description: "Ancient monasteries and panoramic Himalayan views",
    rating: 4.7,
    reviews: 94,
    featured: true,
    price: "₹3,200/night"
  },
  {
    id: 3,
    name: "North Sikkim",
    place: "Lachen & Lachung",
    image: "https://images.unsplash.com/photo-1589187155472-0b7c55b6f7c5?q=80&w=800",
    link: "/destinations/north-sikkim",
    altitude: "2,700m",
    description: "Pristine lakes and snow-capped mountain retreats",
    rating: 4.9,
    reviews: 156,
    featured: true,
    price: "₹4,000/night"
  },
  {
    id: 4,
    name: "South Sikkim",
    place: "Namchi",
    image: "https://images.unsplash.com/photo-1615196534055-7aa6cfc8e7e0?q=80&w=800",
    link: "/destinations/south-sikkim",
    altitude: "1,500m",
    description: "Spiritual sites and tea garden experiences",
    rating: 4.6,
    reviews: 87,
    featured: true,
    price: "₹2,200/night"
  },
  {
    id: 5,
    name: "Yumthang Valley",
    place: "Flower Valley",
    image: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?q=80&w=800",
    link: "/destinations/yumthang",
    altitude: "3,600m",
    description: "Valley of flowers with breathtaking natural beauty",
    rating: 4.9,
    reviews: 142,
    featured: true,
    price: "₹3,500/night"
  },
  {
    id: 6,
    name: "Ravangla",
    place: "Tea Country",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    link: "/destinations/ravangla",
    altitude: "2,200m",
    description: "Serene hills with panoramic Buddha views",
    rating: 4.7,
    reviews: 203,
    featured: false,
    price: "₹2,800/night"
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. Popular Homestays (marquee / carousel)
// ─────────────────────────────────────────────────────────────────────────────
export const homestays = [
  { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80", name: "Lachung Homestay" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", name: "Lachen Homestay" },
  { src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80", name: "Gangtok Homestay" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", name: "Pelling Homestay" },
  { src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80", name: "Zuluk Homestay" },
  { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80", name: "Ravangla Homestay" }
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. Gallery
// ─────────────────────────────────────────────────────────────────────────────
export const galleryImages = [
  { id: 1, src: "/assets/gallery/Mountainview.avif", alt: "Mountain View Room", category: "rooms", title: "Mountain View Suite", description: "Panoramic Himalayan views from private balcony" },
  { id: 2, src: "/assets/gallery/traditionalcottage.jpg", alt: "Traditional Cottage", category: "rooms", title: "Traditional Sikkimese Cottage", description: "Authentic local architecture with modern comforts" },
  { id: 3, src: "/assets/gallery/diningarea.jpg", alt: "Dining Area", category: "dining", title: "Cozy Dining Area", description: "Enjoy local cuisine in warm ambiance" },
  { id: 4, src: "/assets/gallery/serenegarden.avif", alt: "Garden View", category: "garden", title: "Serene Garden", description: "Peaceful garden with seasonal flowers" },
  { id: 5, src: "/assets/gallery/himalaya.jpeg", alt: "Himalayan View", category: "views", title: "Sunrise Over Himalayas", description: "Breathtaking morning views" },
  { id: 6, src: "/assets/gallery/traditional-sikkimese.jpg", alt: "Interior Design", category: "interior", title: "Traditional Interior", description: "Handcrafted wooden furniture" },
  { id: 7, src: "/assets/gallery/lounge.jpg", alt: "Common Area", category: "common", title: "Lounge Area", description: "Cozy fireplace lounge" },
  { id: 8, src: "/assets/gallery/outdoor-seating.jpg", alt: "Outdoor Seating", category: "garden", title: "Outdoor Seating", description: "Relax in nature's lap" },
  { id: 9, src: "/assets/gallery/modern-bathroom.avif", alt: "Bathroom", category: "rooms", title: "Modern Bathroom", description: "Clean and spacious facilities" },
  { id: 10, src: "/assets/gallery/cultural-artifact.jpg", alt: "Cultural Decor", category: "interior", title: "Cultural Artifacts", description: "Local art and craftsmanship" },
  { id: 11, src: "/assets/gallery/stary-night.webp", alt: "Night View", category: "views", title: "Starry Night", description: "Clear Himalayan night sky" },
  { id: 12, src: "/assets/gallery/morning-breakfast.jpg", alt: "Breakfast Setup", category: "dining", title: "Morning Breakfast", description: "Fresh local produce" },
  { id: 13, src: "/assets/homestay/gurudongmar_lachen.jpg", alt: "Gurudongmar Lake", category: "views", title: "Gurudongmar Lake", description: "Sacred high-altitude lake in North Sikkim" },
  { id: 14, src: "/assets/homestay/mg_marg.jpeg", alt: "MG Marg Gangtok", category: "views", title: "MG Marg", description: "The heart of Gangtok's vibrant culture" },
  { id: 15, src: "/assets/homestay/tsomgo_lake.webp", alt: "Tsomgo Lake", category: "views", title: "Tsomgo Lake", description: "Glacial lake nestled in the East Sikkim mountains" },
  { id: 16, src: "/assets/homestay/river_lachen.jpg", alt: "Lachen River", category: "views", title: "River Teesta Tributary", description: "Pristine waters flowing through Lachen valley" },
  { id: 17, src: "/assets/homestay/rhodhodendron_lach.jpeg", alt: "Rhododendron Blooms", category: "garden", title: "Rhododendron Blossoms", description: "Spring colors in the Yumthang Valley" }
];

export const galleryCategories = [
  { id: "all", name: "All Photos", icon: "fa-images", count: galleryImages.length },
  { id: "rooms", name: "Rooms", icon: "fa-bed", count: galleryImages.filter((img) => img.category === "rooms").length },
  { id: "views", name: "Views", icon: "fa-mountain", count: galleryImages.filter((img) => img.category === "views").length },
  { id: "garden", name: "Garden", icon: "fa-tree", count: galleryImages.filter((img) => img.category === "garden").length },
  { id: "dining", name: "Dining", icon: "fa-utensils", count: galleryImages.filter((img) => img.category === "dining").length },
  { id: "interior", name: "Interior", icon: "fa-home", count: galleryImages.filter((img) => img.category === "interior").length },
  { id: "common", name: "Common Areas", icon: "fa-couch", count: galleryImages.filter((img) => img.category === "common").length }
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. Search form options
// ─────────────────────────────────────────────────────────────────────────────
export const locations = [
  { value: "Sikkim", label: "Sikkim", icon: "🏔️" },
  { value: "Gangtok", label: "Gangtok", icon: "🌇" },
  { value: "Pelling", label: "Pelling", icon: "🌄" },
  { value: "Lachung", label: "Lachung", icon: "❄️" },
  { value: "Lachen", label: "Lachen", icon: "🏞️" },
  { value: "Namchi", label: "Namchi", icon: "🙏" },
  { value: "Ravangla", label: "Ravangla", icon: "🌿" },
  { value: "Yuksom", label: "Yuksom", icon: "👑" }
];

export const homestayTypes = [
  { value: "Any Homestay", label: "Any Homestay", icon: "🏠" },
  { value: "Family Homestay", label: "Family Homestay", icon: "👨‍👩‍👧‍👦" },
  { value: "Luxury Homestay", label: "Luxury Homestay", icon: "✨" },
  { value: "Eco Homestay", label: "Eco Homestay", icon: "🌱" },
  { value: "Traditional Homestay", label: "Traditional Homestay", icon: "🏡" },
  { value: "Farm Homestay", label: "Farm Homestay", icon: "🚜" },
  { value: "Mountain View Homestay", label: "Mountain View", icon: "⛰️" }
];

export const roomTypes = [
  { value: "Any Room", label: "Any Room", icon: "🛏️" },
  { value: "Deluxe Room", label: "Deluxe Room", icon: "✨" },
  { value: "Family Suite", label: "Family Suite", icon: "👨‍👩‍👧‍👦" },
  { value: "Traditional Cottage", label: "Traditional Cottage", icon: "🏡" },
  { value: "Budget Room", label: "Budget Room", icon: "💰" },
  { value: "Luxury Villa", label: "Luxury Villa", icon: "👑" },
  { value: "Honeymoon Suite", label: "Honeymoon Suite", icon: "💖" }
];

export const guestOptions = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5", label: "5+ Guests" }
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. UI content blocks
// ─────────────────────────────────────────────────────────────────────────────
export const whyChooseUs = [
  { icon: "fas fa-mountain", title: "Scenic Mountain Views", description: "Wake up to breathtaking Himalayan landscapes from your room" },
  { icon: "fas fa-home", title: "Clean & Cozy Rooms", description: "Immaculately maintained rooms with modern comforts and traditional charm" },
  { icon: "fas fa-utensils", title: "Local Food Experience", description: "Authentic Sikkimese cuisine prepared with fresh local ingredients" },
  { icon: "fas fa-wallet", title: "Affordable Pricing", description: "Quality accommodation at reasonable prices for every budget" },
  { icon: "fas fa-heart", title: "Friendly Service", description: "Warm, personalized hospitality from our local family hosts" },
  { icon: "fas fa-leaf", title: "Eco-Friendly Stay", description: "Sustainable practices that protect our beautiful environment" }
];

export const bookingSteps = [
  { step: "01", title: "Choose Location", desc: "Select your preferred region in Sikkim", icon: "fa-location-dot" },
  { step: "02", title: "Select Homestay", desc: "Browse trusted & verified homestays", icon: "fa-house" },
  { step: "03", title: "Pick Dates", desc: "Choose check-in & check-out dates", icon: "fa-calendar-days" },
  { step: "04", title: "Send Inquiry", desc: "Submit booking request to host", icon: "fa-paper-plane" },
  { step: "05", title: "Confirm Booking", desc: "Receive confirmation & enjoy your stay", icon: "fa-circle-check" }
];

export const features = [
  { icon: "🏔️", title: "Mountain Views", description: "Breathtaking Himalayan landscapes from every room" },
  { icon: "🍽️", title: "Local Cuisine", description: "Authentic Sikkimese food made with traditional recipes" },
  { icon: "🌱", title: "Sustainable Living", description: "Eco-friendly practices and community support" },
  { icon: "👨‍👩‍👧‍👦", title: "Family Atmosphere", description: "Warm hospitality and homely environment" }
];

export const overlayCards = [
  { icon: "fas fa-mountain", text: "Himalayan Views" },
  { icon: "fas fa-home", text: "Cozy Stay" },
  { icon: "fas fa-utensils", text: "Local Cuisine" }
];

// ─────────────────────────────────────────────────────────────────────────────
// Default export (optional - useful when you want to import everything at once)
// ─────────────────────────────────────────────────────────────────────────────
export default {
  destinationsData,
  featuredRegions,
  sikkimDestinations,
  homestays,
  galleryImages,
  galleryCategories,
  locations,
  homestayTypes,
  roomTypes,
  guestOptions,
  whyChooseUs,
  bookingSteps,
  features,
  overlayCards
};