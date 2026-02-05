import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Add Link here
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import VerifyEmail from "./components/VerifyEmail";

// Rooms
import Deluxe from "./rooms/DeluxeRoom";
import Family from "./rooms/FamilyRoom";
import Cottage from "./rooms/CottageRoom";
import Budget from "./rooms/BudgetRoom";


import RegionPage from "./homestay/RegionPage";
import DestinationPage from "./homestay/DestinationPage";

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


          <Route path="/homestay/:region" element={<RegionPage />} />
          <Route path="/homestay/:region/:destinationId" element={<DestinationPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />


        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;