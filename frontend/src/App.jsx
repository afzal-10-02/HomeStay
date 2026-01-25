import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Add Link here
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

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

/* WEST */
import WestSikkim from "./homestay/west/Westsikkim";
import Pelling from "./homestay/west/Pelling";
import Rinchenpong from "./homestay/west/Rinchenpong";
import Yuksom from "./homestay/west/Yuksom";

// Rooms
import Deluxe from "./rooms/DeluxeRoom";
import Family from "./rooms/FamilyRoom";
import Cottage from "./rooms/CottageRoom";
import Budget from "./rooms/BudgetRoom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Rooms Routes - Use lowercase paths */}
          <Route path="/deluxe" element={<Deluxe />} />
          <Route path="/family" element={<Family />} />
          <Route path="/cottage" element={<Cottage />} />
          <Route path="/budget" element={<Budget />} />

          {/* EAST */}
          <Route path="/homestay/east" element={<EastSikkim />} />
          <Route path="/homestay/east/gangtok" element={<Gangtok />} />
          <Route path="/homestay/east/nathula" element={<NathulaPass />} />
          <Route path="/homestay/east/tsomgo" element={<TsomgoLake />} />

          {/* NORTH */}
          <Route path="/homestay/north" element={<NorthSikkim />} />
          <Route path="/homestay/north/lachung" element={<Lachung />} />
          <Route path="/homestay/north/lachen" element={<Lachen />} />

          {/* SOUTH */}
          <Route path="/homestay/south" element={<SouthSikkim />} />
          <Route path="/homestay/south/namchi" element={<Namchi />} />
          <Route path="/homestay/south/ravangla" element={<Ravangla />} />
          <Route path="/homestay/south/temitea" element={<TemiTea />} />

          {/* WEST */}
          <Route path="/homestay/west" element={<WestSikkim />} />
          <Route path="/homestay/west/pelling" element={<Pelling />} />
          <Route path="/homestay/west/rinchenpong" element={<Rinchenpong />} />
          <Route path="/homestay/west/yuksom" element={<Yuksom />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;