import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Row, Col, Badge, Card, Button } from 'react-bootstrap';
import experiencesData from '../data/experiencesData';

const ExperienceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [experience, setExperience] = useState(null);
    const [activeTab, setActiveTab] = useState('Overview');
    const [compatibilityScore, setCompatibilityScore] = useState(0);

    useEffect(() => {
        const found = experiencesData.find(exp => exp.id === parseInt(id));
        if (found) {
            setExperience(found);
            setCompatibilityScore(Math.floor(Math.random() * (98 - 75 + 1)) + 75);
        } else {
            navigate('/experiences');
        }
    }, [id, navigate]);

    if (!experience) return null;

    return (
        <div className="experience-detail-page bg-light pb-5">
            {/* Gallery / Hero */}
            <div className="detail-hero position-relative overflow-hidden mb-5">
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="hero-img-container h-100 w-100"
                >
                    <img src={experience.images[0]} alt={experience.name} className="w-100 h-100 object-fit-cover" />
                </motion.div>
                <div className="hero-overlay"></div>
                <div className="hero-content text-left text-white px-3 px-md-5">
                    <Container>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <Badge bg="primary" className="px-3 py-2 border-0">{experience.category}</Badge>
                                <Badge bg="info" className="px-3 py-2 border-0 text-dark"><i className="fa-solid fa-cloud-moon me-2"></i>{experience.bestSeason[0]}</Badge>
                            </div>
                            <h1 className="display-4 fw-bold mb-3">{experience.name}</h1>
                            <p className="lead opacity-75 mb-0" style={{maxWidth: '700px'}}>{experience.longDescription}</p>
                        </motion.div>
                    </Container>
                </div>
            </div>

            <Container className="detail-container">
                <Row className="gx-5">
                    <Col lg={8}>
                        {/* Interactive Navigation */}
                        <div className="detail-nav d-flex gap-4 mb-4 border-bottom">
                            {['Overview', 'Inclusions', 'Activities', 'Reviews'].map(tab => (
                                <button
                                    key={tab}
                                    className={`detail-tab-btn ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="section-content bg-white p-4 p-md-5 rounded-4 shadow-sm mb-4">
                            {activeTab === 'Overview' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                    <h2 className="h3 mb-4 fw-bold">Experience Highlights</h2>
                                    <Row className="g-4">
                                        <Col sm={6}>
                                            <div className="info-box d-flex align-items-center gap-3 p-3 rounded-3 bg-light transition border-0">
                                                <div className="icon-wrapper text-primary fs-3">
                                                    <i className="fa-solid fa-mountain"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h6 mb-0 text-muted">Max Altitude</h4>
                                                    <p className="mb-0 fw-bold">{experience.altitude_max}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className="info-box d-flex align-items-center gap-3 p-3 rounded-3 bg-light transition border-0">
                                                <div className="icon-wrapper text-success fs-3">
                                                    <i className="fa-solid fa-users"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h6 mb-0 text-muted">Group Size</h4>
                                                    <p className="mb-0 fw-bold">{experience.groupSize}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className="info-box d-flex align-items-center gap-3 p-3 rounded-3 bg-light transition border-0">
                                                <div className="icon-wrapper text-warning fs-3">
                                                    <i className="fa-solid fa-signal"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h6 mb-0 text-muted">Difficulty</h4>
                                                    <p className="mb-0 fw-bold">{experience.difficulty}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className="info-box d-flex align-items-center gap-3 p-3 rounded-3 bg-light transition border-0">
                                                <div className="icon-wrapper text-info fs-3">
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h6 mb-0 text-muted">Rating</h4>
                                                    <p className="mb-0 fw-bold">{experience.rating} / 5 ({experience.reviews} reviews)</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="mt-5">
                                        <h3 className="h4 mb-3 fw-bold">Recommended Season</h3>
                                        <div className="d-flex flex-wrap gap-2 text-dark">
                                            {experience.bestSeason.map(s => <Badge key={s} bg="light" text="dark" className="border px-3 py-2 fs-6">{s}</Badge>)}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Inclusions' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                    <h2 className="h3 mb-4 fw-bold">What's Included</h2>
                                    <ul className="list-unstyled d-grid gap-3" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                                        {experience.included.map((item, idx) => (
                                            <li key={idx} className="d-flex align-items-center gap-3">
                                                <i className="fa-solid fa-circle-check text-success fs-4"></i>
                                                <span className="fw-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                            {activeTab === 'Activities' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                    <h2 className="h3 mb-4 fw-bold">Planned Itinerary</h2>
                                    <p className="text-muted">A detailed breakdown of your {experience.duration} adventure...</p>
                                    <div className="timeline-mockup">
                                        <div className="timeline-item d-flex gap-4 pb-4 border-left ps-4 position-relative">
                                            <div className="dot"></div>
                                            <div>
                                                <h4 className="h6 fw-bold">Arrival & Briefing</h4>
                                                <p className="small text-secondary mb-0">Meet your guide and prepare for the journey.</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item d-flex gap-4 pb-4 border-left ps-4 position-relative">
                                            <div className="dot"></div>
                                            <div>
                                                <h4 className="h6 fw-bold">The Main Event</h4>
                                                <p className="small text-secondary mb-0">Experience {experience.name} in its full glory.</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="detail-sidebar sticky-top" style={{top: '120px', zIndex: 5}}>
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="compat-card bg-dark text-white p-4 rounded-4 shadow-lg mb-4 text-center overflow-hidden position-relative"
                            >
                                <div className="glow"></div>
                                <h3 className="h6 text-uppercase fw-bold text-info mb-3">Vibe Compatibility</h3>
                                <div className="score-display mb-3">
                                    <span className="display-4 fw-bold text-gradient">{compatibilityScore}%</span>
                                </div>
                                <p className="small opacity-75 mb-0">This experience matches your traveler profile perfectly.</p>
                                <div className="progress mt-3 bg-secondary" style={{height: '6px'}}>
                                    <motion.div 
                                        className="progress-bar bg-info" 
                                        initial={{ width: 0 }} 
                                        animate={{ width: `${compatibilityScore}%` }} 
                                        transition={{ delay: 1, duration: 1.5 }}
                                    ></motion.div>
                                </div>
                            </motion.div>

                            <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-4">
                                <Card.Body className="p-4 text-center">
                                    <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                                        <div className="h3 mb-0 fw-bold">₹{experience.price}</div>
                                        <span className="text-muted">/ person</span>
                                    </div>
                                    <Button variant="primary" className="w-100 py-3 rounded-pill fw-bold shadow-sm mb-3 border-0">
                                        Book This Adventure
                                    </Button>
                                    <p className="text-center small text-muted mb-0">Instant confirmation & Best price guarantee</p>
                                </Card.Body>
                            </Card>

                            <div className="weather-preview p-4 rounded-4 border bg-white text-center">
                                <i className="fa-solid fa-sun fa-3x text-warning mb-3"></i>
                                <div className="h5 mb-1 fw-bold">Perfect Weather</div>
                                <p className="small text-muted mb-0">Clear skies forecast for {experience.name}.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExperienceDetail;
