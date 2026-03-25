import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import { AuthProvider } from "./hooks/useAuth.jsx";
import VerifyEmail from "./components/VerifyEmail";

/* EAST */
import EastSikkim from "./homestay/east/Eastsikkim";
import Gangtok from "./homestay/east/Gangtok";
import NathulaPass from "./homestay/east/Nathula";
import TsomgoLake from "./homestay/east/Tsomgo";

/* NORTH */
import NorthSikkim from "./homestay/north/Northsikkim";
import Lachung from "./homestay/north/Lachung";
import Lachen from "./homestay/north/Lachen";

/* SOUTH */
import SouthSikkim from "./homestay/south/Southsikkim";
import Namchi from "./homestay/south/Namchi";
import Ravangla from "./homestay/south/Ravangla";
import TemiTea from "./homestay/south/Temitea";
import Jorethang from "./homestay/south/Jorethang";


/* WEST */
import WestSikkim from "./homestay/west/Westsikkim";
import Pelling from "./homestay/west/Pelling";
import Rinchenpong from "./homestay/west/Rinchenpong";
import Yuksom from "./homestay/west/Yuksom";

import RoomDetailPage from "./pages/RoomDetailPage";
import Experiences from "./pages/Experiences";
import ExperienceDetail from "./pages/ExperienceDetail";

// // Rooms
// import Deluxe from "./rooms/DeluxeRoom";
// import Family from "./rooms/FamilyRoom";
// import Cottage from "./rooms/CottageRoom";
// import Budget from "./rooms/BudgetRoom";
// import Mountain from "./rooms/MountainRoom";
// import Farm from "./rooms/FarmRoom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/verify-email" element={<VerifyEmail />} />

            {/* Rooms Routes - Use lowercase paths */}
            {/* <Route path="/deluxe" element={<Deluxe />} />
            <Route path="/family" element={<Family />} />
            <Route path="/cottage" element={<Cottage />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/mountain" element={<Mountain />} />
            <Route path="/farm" element={<Farm />} /> */}

            <Route path="/room/:slug" element={<RoomDetailPage />} />

            {/* EAST */}
            <Route path="/homestay/eastsikkim" element={<EastSikkim />} />
            <Route path="/homestay/east/gangtok" element={<Gangtok />} />
            <Route path="/homestay/east/nathula" element={<NathulaPass />} />
            <Route path="/homestay/east/tsomgo" element={<TsomgoLake />} />

            {/* NORTH */}
            <Route path="/homestay/northsikkim" element={<NorthSikkim />} />
            <Route path="/homestay/north/lachung" element={<Lachung />} />
            <Route path="/homestay/north/lachen" element={<Lachen />} />

            {/* SOUTH */}
            <Route path="/homestay/southsikkim" element={<SouthSikkim />} />
            <Route path="/homestay/south/namchi" element={<Namchi />} />
            <Route path="/homestay/south/ravangla" element={<Ravangla />} />
            <Route path="/homestay/south/temitea" element={<TemiTea />} />
            <Route path="/homestay/south/jorethang" element={<Jorethang />} />


            {/* WEST */}
            <Route path="/homestay/westsikkim" element={<WestSikkim />} />
            <Route path="/homestay/west/pelling" element={<Pelling />} />
            <Route path="/homestay/west/rinchenpong" element={<Rinchenpong />} />
            <Route path="/homestay/west/yuksom" element={<Yuksom />} />

            {/* Experiences Routes */}
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
