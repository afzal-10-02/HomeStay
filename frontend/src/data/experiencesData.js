// Sikkim Experiences & Activities Data
export const experiencesData = [
  {
    id: 1,
    name: "Kanchenjunga Trek",
    category: "Trekking",
    difficulty: "Advanced",
    duration: "16 Days",
    price: 25000,
    rating: 4.9,
    reviews: 23,
    description: "Trek to the third highest mountain in the world with expert guides",
    longDescription: "Challenge yourself with this iconic 16-day trek to Kanchenjunga. This advanced trek offers breathtaking views, acclimatization days, and the expertise of experienced local guides who know every trail.",
    images: [
      "/assets/homestay/kanchenjunga.jpg",
      "https://images.unsplash.com/photo-1520202296691-2189ac35f522?w=800&q=80"
    ],
    bestSeason: ["May-June", "September-October"],
    groupSize: "4-10 people",
    included: ["Guide", "Accommodation", "Meals", "Trek Permits"],
    difficulty_level: 4,
    altitude_max: "5000m",
    featured: true
  },
  {
    id: 2,
    name: "Goecha La Trek",
    category: "Trekking",
    difficulty: "Moderate",
    duration: "6 Days",
    price: 8500,
    rating: 4.8,
    reviews: 67,
    description: "Experience Himalayan beauty with this stunning trek to Goecha La",
    longDescription: "A 6-day moderate trek offering spectacular views of Kanchenjunga, pristine forests, and rhododendron gardens. Perfect for those seeking adventure without extreme difficulty.",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-332731046319?w=800&q=80"
    ],
    bestSeason: ["March-May", "September-November"],
    groupSize: "5-12 people",
    included: ["Guide", "Accommodation", "Meals", "Trek Permits"],
    difficulty_level: 2,
    altitude_max: "3000m",
    featured: true
  },
  {
    id: 3,
    name: "Tsomgo Lake & Nathula Pass",
    category: "Day Tour",
    difficulty: "Easy",
    duration: "1 Day",
    price: 2500,
    rating: 4.7,
    reviews: 142,
    description: "Visit a sacred glacial lake and the historic mountain pass on the Indo-China border",
    longDescription: "A perfect day excursion from Gangtok. Visit the pristine Tsomgo Lake, explore the historical Nathula Pass, and enjoy stunning views of the Kanchenjunga range.",
    images: [
      "/assets/homestay/changu.jpeg",
      "/assets/homestay/Nathula.jpg"
    ],
    bestSeason: ["All Year"],
    groupSize: "Flexible",
    included: ["Transport", "Guide", "Lunch"],
    difficulty_level: 1,
    altitude_max: "3600m",
    featured: true
  },
  {
    id: 4,
    name: "Yumthang Valley Hot Springs",
    category: "Nature Tour",
    difficulty: "Easy",
    duration: "2 Days",
    price: 4500,
    rating: 4.6,
    reviews: 89,
    description: "Relax in natural hot springs surrounded by pristine alpine valleys",
    longDescription: "Journey to the 'Valley of Flowers' to experience natural geothermal hot springs. Surrounded by alpine scenery and seasonal wildflowers, it's a perfect blend of adventure and relaxation.",
    images: [
      "/assets/homestay/yumthang.jpg",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
    ],
    bestSeason: ["May-June"],
    groupSize: "4-8 people",
    included: ["Transport", "Guide", "Accommodation", "Meals"],
    difficulty_level: 1,
    altitude_max: "3600m",
    featured: false
  },
  {
    id: 5,
    name: "Lachung & Yumthang Valley Tour",
    category: "Scenic Tour",
    difficulty: "Easy",
    duration: "3 Days",
    price: 6500,
    rating: 4.8,
    reviews: 101,
    description: "Explore North Sikkim's most picturesque valleys and natural attractions",
    longDescription: "This 3-day tour takes you through some of North Sikkim's most stunning landscapes. Visit traditional villages, pristine lakes, and enjoy the warmth of local hospitality.",
    images: [
      "/assets/homestay/zero_lachung.webp",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
    ],
    bestSeason: ["All Year"],
    groupSize: "2-6 people",
    included: ["Transport", "Guide", "Accommodation", "Meals"],
    difficulty_level: 1,
    altitude_max: "3600m",
    featured: true
  },
  {
    id: 6,
    name: "Pelling Monastery & Culture Tour",
    category: "Cultural Tour",
    difficulty: "Easy",
    duration: "1 Day",
    price: 1800,
    rating: 4.7,
    reviews: 78,
    description: "Discover the spiritual and cultural heritage of West Sikkim",
    longDescription: "Visit ancient monasteries, learn about Sikkimese culture, and interact with monks. This tour provides deep insight into the spiritual traditions and architectural marvels of the region.",
    images: [
      "/assets/homestay/pelling_monastery.png",
      "/assets/homestay/pelling_monastery.png"
    ],
    bestSeason: ["All Year"],
    groupSize: "Flexible",
    included: ["Transport", "Guide", "Meals"],
    difficulty_level: 1,
    altitude_max: "2150m",
    featured: false
  },
  {
    id: 7,
    name: "Teesta River Rafting",
    category: "Adventure",
    difficulty: "Moderate",
    duration: "1 Day",
    price: 3000,
    rating: 4.6,
    reviews: 56,
    description: "Experience thrilling white water rafting on Sikkim's pristine rivers",
    longDescription: "Navigate the crystal-clear waters of Teesta River. Suitable for beginners and experienced rafters, this adventure combines adrenaline with stunning riverside scenery.",
    images: [
      "/assets/homestay/teesta_rafting.png",
      "assets/homestay/teesta_rafting.png"
    ],
    bestSeason: ["March-May", "September-November"],
    groupSize: "4-8 people",
    included: ["Equipment", "Guide", "Lunch", "Safety Gear"],
    difficulty_level: 2,
    altitude_max: "1500m",
    featured: false
  },
  {
    id: 8,
    name: "Gangtok City & Market Tour",
    category: "City Tour",
    difficulty: "Easy",
    duration: "4 Hours",
    price: 1200,
    rating: 4.5,
    reviews: 94,
    description: "Explore the vibrant capital city of Sikkim and its bustling markets",
    longDescription: "Discover Gangtok's charm through a guided city tour. Visit local markets, historic sites, and enjoy authentic cuisine at local restaurants.",
    images: [
      "/assets/homestay/mg_marg_exp.png",
      "/assets/homestay/mg_marg.jpeg"
    ],
    bestSeason: ["All Year"],
    groupSize: "Flexible",
    included: ["Guide", "Transport"],
    difficulty_level: 1,
    altitude_max: "1650m",
    featured: false
  }
];

export default experiencesData;
