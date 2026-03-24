import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import experiencesData from '../data/experiencesData';

const Experiences = () => {
    const [filteredExperiences, setFilteredExperiences] = useState(experiencesData);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState(30000);

    const categories = ['All', ...new Set(experiencesData.map(exp => exp.category))];

    useEffect(() => {
        const filtered = experiencesData.filter(exp => {
            const matchesCategory = activeFilter === 'All' || exp.category === activeFilter;
            const matchesSearch = exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                exp.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesPrice = exp.price <= priceRange;
            return matchesCategory && matchesSearch && matchesPrice;
        });
        setFilteredExperiences(filtered);
    }, [activeFilter, searchQuery, priceRange]);

    // Unique Feature: Adventure Score Calculation
    const calculateAdventureScore = (exp) => {
        const difficultyWeight = exp.difficulty_level * 25;
        const altitudeWeight = parseInt(exp.altitude_max) / 100;
        const durationWeight = parseInt(exp.duration) * 5;
        return Math.min(100, Math.round((difficultyWeight + altitudeWeight + durationWeight) / 2));
    };

    return (
        <div className="experiences-page">
            {/* Hero Section */}
            <div className="experiences-hero">
                <div className="hero-overlay"></div>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-content text-center text-white"
                    >
                        <Badge className="mb-3 px-3 py-2 rounded-pill border-0 custom-badge-gradient text-white">
                            UNFORGETTABLE ADVENTURES
                        </Badge>
                        <h1 className="display-3 fw-bold mb-4">Sikkim Experiences</h1>
                        <p className="lead mb-0">From tranquil monasteries to adrenaline-pumping treks, discover the heart of the Himalayas.</p>
                    </motion.div>
                </Container>
            </div>

            {/* Unique Feature: Adventure Matcher */}
            <section className="adventure-matcher py-5">
                <Container>
                    <div className="matcher-card p-4 p-md-5 rounded-4 shadow-lg text-white">
                        <Row className="align-items-center">
                            <Col lg={7}>
                                <h2 className="mb-3">Find Your Perfect Vibe</h2>
                                <p className="opacity-75 mb-4">Adjust the filters below to match your adrenaline level and budget.</p>
                                
                                <div className="filter-controls">
                                    <div className="mb-4">
                                        <label className="form-label d-flex justify-content-between">
                                            <span>Max Budget</span>
                                            <span className="fw-bold">₹{priceRange}</span>
                                        </label>
                                        <input 
                                            type="range" 
                                            className="form-range custom-range" 
                                            min="1000" 
                                            max="30000" 
                                            step="500"
                                            value={priceRange}
                                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                        />
                                    </div>

                                    <div className="category-pills d-flex flex-wrap gap-2">
                                        {categories.map(cat => (
                                            <button
                                                key={cat}
                                                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                                                onClick={() => setActiveFilter(cat)}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} className="d-none d-lg-block text-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="compass-icon"
                                >
                                    <i className="fa-solid fa-compass fa-8x opacity-25"></i>
                                </motion.div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className="experiences-grid-section pb-5 mt-4 mt-lg-0">
                <Container>
                    <div className="section-header d-flex justify-content-between align-items-center mb-5 flex-column flex-lg-row gap-4">
                        <div className="text-center text-lg-start">
                            <h2 className="display-6 fw-bold mb-2">Recommended for You</h2>
                            <p className="text-muted lead fs-6">Showing {filteredExperiences.length} handpicked activities in Sikkim</p>
                        </div>
                        <div className="search-wrapper w-100 w-lg-auto">
                            <div className="search-box-premium">
                                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                                <input 
                                    type="text" 
                                    placeholder="Where to next? (e.g. Trekking, Pelling)" 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="premium-input"
                                />
                                {searchQuery && (
                                    <button className="clear-search" onClick={() => setSearchQuery('')}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <Row className="g-4">
                        <AnimatePresence mode='popLayout'>
                            {filteredExperiences.map((exp) => (
                                <Col key={exp.id} md={6} lg={4}>
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card className="experience-card h-100 border-0 shadow-sm overflow-hidden">
                                            <div className="card-img-wrapper">
                                                <Card.Img variant="top" src={exp.images[0]} />
                                                <div className="category-badge">{exp.category}</div>
                                                <div className="adventure-score">
                                                    <div className="score-circle">
                                                        <span>{calculateAdventureScore(exp)}</span>
                                                        <small>PTS</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <Card.Body className="p-4">
                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                    <h3 className="h5 mb-0 fw-bold">{exp.name}</h3>
                                                    <div className="rating">
                                                        <i className="fa-solid fa-star text-warning"></i>
                                                        <span className="ms-1 fw-bold">{exp.rating}</span>
                                                    </div>
                                                </div>
                                                <div className="exp-meta mb-3">
                                                    <span className="me-3"><i className="fa-regular fa-clock me-1"></i>{exp.duration}</span>
                                                    <span><i className="fa-solid fa-signal me-1"></i>{exp.difficulty}</span>
                                                </div>
                                                <Card.Text className="text-secondary small mb-4">
                                                    {exp.description}
                                                </Card.Text>
                                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                                    <div className="price">
                                                        <span className="text-muted small">Starts from</span>
                                                        <div className="h4 mb-0 fw-bold text-primary">₹{exp.price}</div>
                                                    </div>
                                                    <Link to={`/experience/${exp.id}`} className="btn-explore text-decoration-none">
                                                        Details <i className="fa-solid fa-arrow-right ms-2"></i>
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))}
                        </AnimatePresence>
                    </Row>

                    {filteredExperiences.length === 0 && (
                        <div className="text-center py-5">
                            <i className="fa-solid fa-mountain-sun fa-4x text-muted mb-3"></i>
                            <h3>No experiences found</h3>
                            <p className="text-muted">Try adjusting your filters or search terms.</p>
                            <button className="btn btn-outline-primary mt-3" onClick={() => {
                                setActiveFilter('All');
                                setSearchQuery('');
                                setPriceRange(30000);
                            }}>Reset All Filters</button>
                        </div>
                    )}
                </Container>
            </section>
        </div>
    );
};

export default Experiences;
