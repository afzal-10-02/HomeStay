import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [openHomestay, setOpenHomestay] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [openRooms, setOpenRooms] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileHomestayOpen, setMobileHomestayOpen] = useState(false);
  const [mobileRoomsOpen, setMobileRoomsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const homestayRef = useRef(null);
  const roomsRef = useRef(null);

  // ─── Auth Logic ───
  const checkLoginStatus = () => {
    const token = localStorage.getItem('authToken');
    const loggedInFlag = localStorage.getItem('isLoggedIn');
    const storedName = localStorage.getItem('username');

    if (token || loggedInFlag === 'true') {
      setUser({ name: storedName || 'Traveler' });
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, [isLoginModalOpen, isSignupModalOpen]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setUser(null);
    setIsMenuOpen(false);
    navigate('/');
  };

  // Mobile detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 992);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (homestayRef.current && !homestayRef.current.contains(event.target)) {
        setOpenHomestay(false);
        setActiveRegion(null);
      }
      if (roomsRef.current && !roomsRef.current.contains(event.target)) {
        setOpenRooms(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenHomestay(false);
    setOpenRooms(false);
    setActiveRegion(null);
    setMobileHomestayOpen(false);
    setMobileRoomsOpen(false);
  };

  const toggleRoomsDropdown = () => {
    if (isMobileView) {
      setOpenRooms(!openRooms);
      if (openHomestay) setOpenHomestay(false);
    }
  };

  const toggleHomestayDropdown = () => {
    if (isMobileView) {
      setOpenHomestay(!openHomestay);
      if (openRooms) setOpenRooms(false);
      if (!openHomestay) setActiveRegion(null);
    }
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    closeMenu();
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    closeMenu();
  };

  const switchToSignupModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const switchToLoginModal = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        ref={navbarRef}
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container fluid="lg" className="px-3 px-lg-4">
          <div className="d-flex align-items-center justify-content-between w-100">
            {/* Logo - Left */}
            <div className="nav-logo-container">
              <Link to="/" className="nav-logo d-flex align-items-center" onClick={closeMenu}>
                <img
                  src = "assets/Logo.png"
                  alt="Heaven Homestay Logo"
                  className="logo-img py-0"
                  style={{ height: "50px", width: "auto" }}
                />
              </Link>
            </div>

            {/* Desktop Menu - Center (better centering) */}
            {!isMobileView && (
              <div className="nav-menu-container flex-grow-1 d-flex justify-content-center">
                <div className="nav-menu d-flex align-items-center ">
                  <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                    Home
                  </Link>

                  <div className="nav-dropdown" ref={roomsRef}>
                    <span
                      className="nav-link dropdown-toggle"
                      onMouseEnter={() => setOpenRooms(true)}
                      onMouseLeave={() => {
                        setTimeout(() => {
                          if (!roomsRef.current?.matches(':hover')) setOpenRooms(false);
                        }, 100);
                      }}
                      onClick={() => setOpenRooms(!openRooms)}
                    >
                      Rooms <span className="dropdown-arrow">▼</span>
                    </span>
                    <AnimatePresence>
                      {openRooms && (
                        <motion.div
                          className="dropdown-menu"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          onMouseEnter={() => setOpenRooms(true)}
                          onMouseLeave={() => setOpenRooms(false)}
                        >
                          <Link to="room/deluxe" onClick={closeMenu}>Deluxe Room</Link>
                          <Link to="room/family" onClick={closeMenu}>Family Suite</Link>
                          <Link to="room/cottage" onClick={closeMenu}>Traditional Cottage</Link>
                          <Link to="room/budget" onClick={closeMenu}>Budget Room</Link>
                          <Link to="room/mountain-view" onClick={closeMenu}>Mountain View Room</Link>
                          <Link to="room/honeymoon" onClick={closeMenu}>Honeymoon Suite</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="nav-dropdown" ref={homestayRef}>
                    <span
                      className="nav-link dropdown-toggle"
                      onMouseEnter={() => setOpenHomestay(true)}
                      onMouseLeave={() => {
                        setTimeout(() => {
                          if (!homestayRef.current?.matches(':hover')) {
                            setOpenHomestay(false);
                            setActiveRegion(null);
                          }
                        }, 150);
                      }}
                      onClick={() => setOpenHomestay(!openHomestay)}
                    >
                      Homestays <span className="dropdown-arrow">▼</span>
                    </span>

                    <AnimatePresence>
                      {openHomestay && (
                        <motion.div
                          className="dropdown-menu homestay-dropdown"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          onMouseEnter={() => setOpenHomestay(true)}
                          onMouseLeave={() => {
                            setOpenHomestay(false);
                            setActiveRegion(null);
                          }}
                        >
                          <div className="homestay-columns">
                            <div className="column regions-column">
                              <h6>Sikkim Regions</h6>
                              {["North Sikkim", "East Sikkim", "West Sikkim", "South Sikkim"].map((region) => (
                                <button
                                  key={region}
                                  className={`region-btn ${activeRegion === region ? "active" : ""}`}
                                  onMouseEnter={() => setActiveRegion(region)}
                                  onClick={() => {
                                    setActiveRegion(region);
                                    navigate(`/homestay/${region.replace(/\s+/g, '').toLowerCase()}`);
                                  }
                                }
                                >
                                  {region} →
                                </button>
                              ))}
                            </div>

                            <div className="column places-column">
                              <h6>{activeRegion ? `Popular Places` : "Popular Places"}</h6>
                              {!activeRegion ? (
                                <div className="no-selection-hint">
                                  Hover over a region to view places
                                </div>
                              ) : (
                                <div className="places-list">
                                  {activeRegion === "North Sikkim" && (
                                    <>
                                      <Link to="/homestay/north/lachung" onClick={closeMenu}>Lachung</Link>
                                      <Link to="/homestay/north/lachen" onClick={closeMenu}>Lachen</Link>
                                      <Link to="/homestay/north/chopta" onClick={closeMenu}>Chopta Valley</Link>
                                    </>
                                  )}
                                  {activeRegion === "East Sikkim" && (
                                    <>
                                      <Link to="/homestay/east/gangtok" onClick={closeMenu}>Gangtok</Link>
                                      <Link to="/homestay/east/nathula" onClick={closeMenu}>Nathula Pass</Link>
                                      <Link to="/homestay/east/tsomgo" onClick={closeMenu}>Tsomgo Lake</Link>
                                      <Link to="/homestay/east/ranipool" onClick={closeMenu}>Ranipool</Link>
                                    </>
                                  )}
                                  {activeRegion === "West Sikkim" && (
                                    <>
                                      <Link to="/homestay/west/pelling" onClick={closeMenu}>Pelling</Link>
                                      <Link to="/homestay/west/yuksom" onClick={closeMenu}>Yuksom</Link>
                                      <Link to="/homestay/west/rinchenpong" onClick={closeMenu}>Rinchenpong</Link>
                                      <Link to="/homestay/west/gyalshing" onClick={closeMenu}>Gyalshing</Link>
                                    </>
                                  )}
                                  {activeRegion === "South Sikkim" && (
                                    <>
                                      <Link to="/homestay/south/namchi" onClick={closeMenu}>Namchi</Link>
                                      <Link to="/homestay/south/ravangla" onClick={closeMenu}>Ravangla</Link>
                                      <Link to="/homestay/south/temitea" onClick={closeMenu}>Temi Tea Garden</Link>
                                      <Link to="/homestay/south/jorethang" onClick={closeMenu}>Jorethang</Link>
                                    </>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
                    About
                  </Link>
                  <Link to="/gallery" className={`nav-link ${isActive("/gallery") ? "active" : ""}`}>
                    Gallery
                  </Link>
                  <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
                    Contact
                  </Link>
                </div>
              </div>
            )}

            {/* Desktop Auth - Right */}
            {!isMobileView && (
              <div className="nav-actions-container">
                <div className="nav-actions d-flex align-items-center gap-2">
                  {user ? (
                    <div className="d-flex align-items-center gap-3">
                      <span className="welcome-text">Hi, {user.name}</span>
                      <button className="pill-btn theme" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex gap-2">
                      <button className="pill-btn theme" onClick={openLoginModal}>
                        Log in
                      </button>
                      <button className="pill-btn theme" onClick={openSignupModal}>
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile Hamburger - Right */}
            {isMobileView && (
              <div
                className={`hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            )}
          </div>
        </Container>
      </motion.nav>
      <div style={{style : "0px"}}>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileView && isMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="mobile-menu-header d-flex justify-content-between align-items-center py-3 px-4">
                <h3 className="mb-0">{user ? `Hi, ${user.name}` : "Menu"}</h3>
                <button className="close-menu btn p-0" onClick={closeMenu}>×</button>
              </div>

              <div className="mobile-menu-content px-4">
                {/* Mobile Navigation Links */}
                <div className="mobile-nav-links">
                  <Link 
                    to="/" 
                    className={`mobile-nav-link ${isActive("/") ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>

                  {/* Mobile Rooms Dropdown */}
                  <div className="mobile-dropdown">
                    <button 
                      className="mobile-nav-link w-100 text-start bg-transparent border-0 d-flex justify-content-between align-items-center"
                      onClick={() => setMobileRoomsOpen(!mobileRoomsOpen)}
                    >
                      Rooms
                      <span className={`dropdown-arrow ${mobileRoomsOpen ? "rotate" : ""}`}>▼</span>
                    </button>
                    <AnimatePresence>
                      {mobileRoomsOpen && (
                        <motion.div 
                          className="mobile-dropdown-content ps-3"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link to="/deluxe" onClick={closeMenu}>Deluxe Room</Link>
                          <Link to="/family" onClick={closeMenu}>Family Suite</Link>
                          <Link to="/cottage" onClick={closeMenu}>Traditional Cottage</Link>
                          <Link to="/budget" onClick={closeMenu}>Budget Room</Link>
                          <Link to="/mountain" onClick={closeMenu}>Mountain View Room</Link>
                          <Link to="/farm" onClick={closeMenu}>Farm Stay Room</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Homestays Dropdown */}
                  <div className="mobile-dropdown">
                    <button 
                      className="mobile-nav-link w-100 text-start bg-transparent border-0 d-flex justify-content-between align-items-center"
                      onClick={() => setMobileHomestayOpen(!mobileHomestayOpen)}
                    >
                      Homestays
                      <span className={`dropdown-arrow ${mobileHomestayOpen ? "rotate" : ""}`}>▼</span>
                    </button>
                    <AnimatePresence>
                      {mobileHomestayOpen && (
                        <motion.div 
                          className="mobile-dropdown-content ps-3"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="mobile-regions mb-3">
                            <h6 className="text-muted mb-2">North Sikkim</h6>
                            <Link to="/homestay/north/lachung" onClick={closeMenu}>Lachung</Link>
                            <Link to="/homestay/north/lachen" onClick={closeMenu}>Lachen</Link>
                            <Link to="/homestay/north/chopta" onClick={closeMenu}>Chopta Valley</Link>
                            
                            <h6 className="text-muted mt-3 mb-2">East Sikkim</h6>
                            <Link to="/homestay/east/gangtok" onClick={closeMenu}>Gangtok</Link>
                            <Link to="/homestay/east/nathula" onClick={closeMenu}>Nathula Pass</Link>
                            <Link to="/homestay/east/tsomgo" onClick={closeMenu}>Tsomgo Lake</Link>
                            <Link to="/homestay/east/ranipool" onClick={closeMenu}>Ranipool</Link>
                            
                            <h6 className="text-muted mt-3 mb-2">West Sikkim</h6>
                            <Link to="/homestay/west/pelling" onClick={closeMenu}>Pelling</Link>
                            <Link to="/homestay/west/yuksom" onClick={closeMenu}>Yuksom</Link>
                            <Link to="/homestay/west/rinchenpong" onClick={closeMenu}>Rinchenpong</Link>
                            <Link to="/homestay/west/gyalshing" onClick={closeMenu}>Gyalshing</Link>
                            
                            <h6 className="text-muted mt-3 mb-2">South Sikkim</h6>
                            <Link to="/homestay/south/namchi" onClick={closeMenu}>Namchi</Link>
                            <Link to="/homestay/south/ravangla" onClick={closeMenu}>Ravangla</Link>
                            <Link to="/homestay/south/temitea" onClick={closeMenu}>Temi Tea Garden</Link>
                            <Link to="/homestay/south/jorethang" onClick={closeMenu}>Jorethang</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link 
                    to="/about" 
                    className={`mobile-nav-link ${isActive("/about") ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                  <Link 
                    to="/gallery" 
                    className={`mobile-nav-link ${isActive("/gallery") ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    Gallery
                  </Link>
                  <Link 
                    to="/contact" 
                    className={`mobile-nav-link ${isActive("/contact") ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </div>

                {/* Mobile Auth Section */}
                <div className="mobile-auth-section mt-4 pt-3 border-top">
                  {user ? (
                    <button className="pill-btn theme w-100" onClick={handleLogout}>
                      Logout
                    </button>
                  ) : (
                    <div className="d-flex flex-column gap-2">
                      <button className="pill-btn theme w-100" onClick={openLoginModal}>
                        Log in
                      </button>
                      <button className="pill-btn theme w-100" onClick={openSignupModal}>
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        switchToSignup={switchToSignupModal}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        switchToLogin={switchToLoginModal}
      />
      <div style={{height: "67px"}}>

      </div>
    </>
  );
};

export default Navbar;