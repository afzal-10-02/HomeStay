import { Link, useLocation, useNavigate } from "react-router-dom"; // Added useNavigate
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [openHomestay, setOpenHomestay] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [openRooms, setOpenRooms] = useState(false);
  
  // New State for User Authentication
  const [user, setUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const homestayRef = useRef(null);
  const roomsRef = useRef(null);

  // --- Auth Logic ---

  // Function to check local storage
  const checkLoginStatus = () => {
    // We check for authToken (from your previous code) OR a specific isLoggedIn flag
    const token = localStorage.getItem('authToken');
    const loggedInFlag = localStorage.getItem('isLoggedIn');
    
    // Retrieve name if available, otherwise default to 'Guest'
    // Note: You might need to update your LoginModal to store 'userName'
    const storedName = localStorage.getItem('username'); 

    if (token || loggedInFlag === 'true') {
      setUser({ name: storedName || 'Traveler' });
    } else {
      setUser(null);
    }
  };

  // Check on mount AND when modals close (to update UI immediately after login)
  useEffect(() => {
    checkLoginStatus();
  }, [isLoginModalOpen, isSignupModalOpen]);

  const handleLogout = () => {
    // Clear all auth related items
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    setUser(null);
    setIsMenuOpen(false); // Close mobile menu if open
    navigate('/'); // Optional: Redirect to home
    // alert('Logged out successfully');
  };

  // --- End Auth Logic ---

  // Check screen size for mobile view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close dropdowns when clicking outside
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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenHomestay(false);
    setOpenRooms(false);
    setActiveRegion(null);
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
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <div className="logo-wrapper">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h2 className="logo-title">Sikkim Homestay</h2>
            </div>
          </Link>

          {/* Desktop & iPad Navigation */}
          {!isMobileView && (
            <div className="nav-menu">
              <Link 
                to="/" 
                className={`nav-link ${isActive("/") ? "active" : ""}`}
              >
                Home
              </Link>

              {/* Rooms Dropdown */}
              <div className="nav-dropdown" ref={roomsRef}>
                <span 
                  className="nav-link dropdown-toggle"
                  onMouseEnter={() => setOpenRooms(true)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      if (!roomsRef.current?.matches(':hover')) {
                        setOpenRooms(false);
                      }
                    }, 100);
                  }}
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
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setOpenRooms(true)}
                      onMouseLeave={() => setOpenRooms(false)}
                    >
                      <Link to="/deluxe" onClick={closeMenu}>Deluxe Room</Link>
                      <Link to="/family" onClick={closeMenu}>Family Suite</Link>
                      <Link to="/cottage" onClick={closeMenu}>Traditional Cottage</Link>
                      <Link to="/budget" onClick={closeMenu}>Budget Room</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Homestays Dropdown */}
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
                    }, 100);
                  }}
                >
                  Homestays <span className="dropdown-arrow">▼</span>
                </span>

                <AnimatePresence>
                  {openHomestay && (
                    <motion.div
                      className="dropdown-menu layered-menu"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setOpenHomestay(true)}
                      onMouseLeave={() => {
                        setOpenHomestay(false);
                        setActiveRegion(null);
                      }}
                    >
                      <div className="menu-column">
                        <h6>Sikkim Regions</h6>
                        <button
                          className={`menu-item ${activeRegion === "North Sikkim" ? "active" : ""}`}
                          onClick={() => setActiveRegion("North Sikkim")}
                          onMouseEnter={() => setActiveRegion("North Sikkim")}
                        >
                          North Sikkim →
                        </button>
                        <button
                          className={`menu-item ${activeRegion === "East Sikkim" ? "active" : ""}`}
                          onClick={() => setActiveRegion("East Sikkim")}
                          onMouseEnter={() => setActiveRegion("East Sikkim")}
                        >
                          East Sikkim →
                        </button>
                        <button
                          className={`menu-item ${activeRegion === "West Sikkim" ? "active" : ""}`}
                          onClick={() => setActiveRegion("West Sikkim")}
                          onMouseEnter={() => setActiveRegion("West Sikkim")}
                        >
                          West Sikkim →
                        </button>
                        <button
                          className={`menu-item ${activeRegion === "South Sikkim" ? "active" : ""}`}
                          onClick={() => setActiveRegion("South Sikkim")}
                          onMouseEnter={() => setActiveRegion("South Sikkim")}
                        >
                          South Sikkim →
                        </button>
                      </div>

                      <div className="menu-column">
                        <h6>Popular Places</h6>
                        {!activeRegion ? (
                          <div className="menu-hint">
                            <p>Hover over a region</p>
                          </div>
                        ) : (
                          <>
                            {activeRegion === "North Sikkim" && (
                              <>
                                <Link to="/homestay/north/lachung" onClick={closeMenu}>Lachung</Link>
                                <Link to="/homestay/north/lachen" onClick={closeMenu}>Lachen</Link>
                              </>
                            )}
                            {activeRegion === "East Sikkim" && (
                              <>
                                <Link to="/homestay/east/gangtok" onClick={closeMenu}>Gangtok</Link>
                                <Link to="/homestay/east/nathula" onClick={closeMenu}>Nathula</Link>
                                <Link to="/homestay/east/tsomgo" onClick={closeMenu}>Tsomgo Lake</Link>
                              </>
                            )}
                            {activeRegion === "West Sikkim" && (
                              <>
                                <Link to="/homestay/west/pelling" onClick={closeMenu}>Pelling</Link>
                                <Link to="/homestay/west/yuksom" onClick={closeMenu}>Yuksom</Link>
                                 <Link to="/homestay/west/rinchenpong" onClick={closeMenu}>Rinchenpong</Link>
                              </>
                            )}
                            {activeRegion === "South Sikkim" && (
                              <>
                                <Link to="/homestay/south/namchi" onClick={closeMenu}>Namchi</Link>
                                <Link to="/homestay/south/ravangla" onClick={closeMenu}>Ravangla</Link>
                                <Link to="/homestay/south/temitea" onClick={closeMenu}>Temitea</Link>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/about" 
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
              >
                About
              </Link>

              <Link 
                to="/gallery" 
                className={`nav-link ${isActive("/gallery") ? "active" : ""}`}
              >
                Gallery
              </Link>

              <Link 
                to="/contact" 
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              >
                Contact
              </Link>
            </div>
          )}

          {/* Desktop Auth Buttons / User Menu */}
          {!isMobileView && (
            <div className="nav-actions">
              {user ? (
                // Logged In View
                <div className="user-logged-in" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span className="user-greeting" style={{ fontWeight: '500', color: '#333' }}>
                    Hi, {user.name}
                  </span>
                  <button 
                    className="btn btn-outline" 
                    onClick={handleLogout}
                    style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                // Guest View
                <>
                  <button className="btn btn-outline" onClick={openLoginModal}>
                    Log in
                  </button>
                  <button className="btn btn-primary" onClick={openSignupModal}>
                    Sign Up
                  </button>
                </>
              )}
            </div>
          )}

          {/* Mobile Hamburger Menu */}
          {isMobileView && (
            <>
              <div 
                className={`hamburger ${isMenuOpen ? "active" : ""}`} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
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
              <div className="mobile-menu-header">
                <h3>{user ? `Hi, ${user.name}` : "Menu"}</h3>
                <button className="close-menu" onClick={closeMenu}>×</button>
              </div>
              
              <div className="mobile-menu-content">
                <Link 
                  to="/" 
                  className={`mobile-nav-link ${isActive("/") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>

                <div className="mobile-dropdown">
                  <div 
                    className="mobile-nav-link dropdown-toggle"
                    onClick={() => setOpenRooms(!openRooms)}
                  >
                    Rooms <span className="dropdown-arrow">{openRooms ? "▲" : "▼"}</span>
                  </div>
                  {openRooms && (
                    <div className="mobile-dropdown-content">
                      <Link to="/rooms" onClick={closeMenu}>All Rooms</Link>
                      <Link to="/Deluxe" onClick={closeMenu}>Deluxe Room</Link>
                      <Link to="/Family" onClick={closeMenu}>Family Suite</Link>
                      <Link to="/Cottage" onClick={closeMenu}>Traditional Cottage</Link>
                      <Link to="/Budget" onClick={closeMenu}>Budget Room</Link>
                    </div>
                  )}
                </div>

                <div className="mobile-dropdown">
                  <div 
                    className="mobile-nav-link dropdown-toggle"
                    onClick={() => setOpenHomestay(!openHomestay)}
                  >
                    Homestays <span className="dropdown-arrow">{openHomestay ? "▲" : "▼"}</span>
                  </div>
                  {openHomestay && (
                    <div className="mobile-dropdown-content">
                      <Link to="/homestay/north/lachung" onClick={closeMenu}>Lachung</Link>
                      <Link to="/homestay/north/lachen" onClick={closeMenu}>Lachen</Link>
                      <Link to="/homestay/north/yumthang" onClick={closeMenu}>Yumthang Valley</Link>
                      <Link to="/homestay/east/gangtok" onClick={closeMenu}>Gangtok</Link>
                      <Link to="/homestay/east/nathula" onClick={closeMenu}>Nathula</Link>
                      <Link to="/homestay/east/tsomgo" onClick={closeMenu}>Tsomgo Lake</Link>
                    </div>
                  )}
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

                {/* Mobile Auth Section */}
                <div className="mobile-auth-section">
                  {user ? (
                     // Mobile Logged In View
                    <div className="auth-buttons-minimal">
                      <button 
                        className="auth-minimal-btn auth-minimal-signup btn-clear"
                        onClick={handleLogout}
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <span className="auth-minimal-text">Log Out</span>
                        <span className="auth-minimal-arrow">←</span>
                      </button>
                    </div>
                  ) : (
                    // Mobile Guest View
                    <div className="auth-buttons-minimal">
                      <button 
                        className="auth-minimal-btn auth-minimal-login btn-submit"
                        onClick={openLoginModal}
                      >
                        <span className="auth-minimal-text">Log in</span>
                        <span className="auth-minimal-arrow">→</span>
                      </button>
                      
                      <div className="auth-divider">
                        <span>or</span>
                      </div>
                      
                      <button 
                        className="auth-minimal-btn auth-minimal-signup btn-clear"
                        onClick={openSignupModal}
                      >
                        <span className="auth-minimal-text">Sign up</span>
                        <span className="auth-minimal-plus">+</span>
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
      {/* This div uses the state variable 'navbarHeight' to set its height in pixels */}
      <div style={{ height: "85px", width: '100%' }}></div>
    </>

  );
};

export default Navbar;