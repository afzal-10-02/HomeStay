import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { faqData } from '../data/faqData';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <section className="faq-section py-5" style={{ background: 'var(--light-bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Watermark */}
      <div 
        className="position-absolute" 
        style={{ 
          fontSize: '12rem', 
          fontWeight: 900, 
          color: 'rgba(26, 77, 66, 0.03)', 
          zIndex: 0, 
          top: '10%', 
          left: '5%', 
          userSelect: 'none',
          pointerEvents: 'none',
          fontFamily: "'Playfair Display', serif"
        }}
      >
        FAQ
      </div>

      {/* Background Orbs */}
      <div className="bg-3d-elements" style={{ opacity: 0.2, pointerEvents: 'none' }}>
        <div className="bg-orb-1" style={{ width: '400px', height: '400px', top: '-100px', right: '-150px' }}></div>
        <div className="bg-orb-2" style={{ width: '300px', height: '300px', bottom: '-50px', left: '-200px' }}></div>
      </div>

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="d-inline-flex align-items-center mb-3 px-4 py-2 rounded-pill shadow-sm fw-bold" 
              style={{ 
                backgroundColor: '#1a4d42', 
                color: '#ffffff',
                fontSize: '0.85rem',
                letterSpacing: '1px'
              }}
            >
              <i className="fas fa-sparkles me-2"></i> HELP & INFORMATION
            </div>
            
            <h2 className="display-4 fw-bold mb-3" style={{ color: 'var(--primary-color)', fontFamily: "'Playfair Display', serif" }}>
              Got Questions? <span className="gradient-text">We've Got Answers</span>
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '650px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Everything you need to know about your Himalayan journey. 
              Authentic Sikkimese hospitality starts with clarity and trust.
            </p>
          </motion.div>
        </div>

        <Row className="justify-content-center">
          <Col lg={9}>
            <div className="faq-wrapper">
              <Accordion defaultActiveKey="0" flush className="faq-accordion-custom">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Accordion.Item eventKey={index.toString()} className="border-0 mb-3 shadow-sm rounded-4 overflow-hidden" style={{ transition: 'all 0.3s ease' }}>
                      <Accordion.Header>
                        <span className="fw-bold py-1 fs-5" style={{ color: 'var(--primary-color)' }}>
                            {faq.question}
                        </span>
                      </Accordion.Header>
                      <Accordion.Body className="bg-white">
                        <div className="py-2 text-muted" style={{ lineHeight: '1.7', fontSize: '1rem', borderLeft: '4px solid #1a4d42', paddingLeft: '1.25rem' }}>
                          {faq.answer}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>

        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-secondary mb-4 opacity-75">Still have questions about your stay?</p>
          <Link 
            to="/contact" 
            className="cta-button-3d text-decoration-none d-inline-flex"
            style={{ 
               padding: '14px 40px',
               fontSize: '1rem',
               boxShadow: '0 8px 25px rgba(26, 77, 66, 0.15)' 
            }}
          >
            <span style={{ color: '#fff' }}>Ask Our Concierge</span>
            <i className="fas fa-arrow-right ms-2" style={{ color: '#fff' }}></i>
          </Link>
        </motion.div>
      </Container>
      
      <style>
        {`
          .faq-accordion-custom .accordion-item {
            border: 1px solid rgba(26, 77, 66, 0.05) !important;
          }
          .faq-accordion-custom .accordion-item:hover {
            transform: scale(1.01);
            box-shadow: 0 10px 30px rgba(26, 77, 66, 0.08) !important;
            border-color: rgba(26, 77, 66, 0.1) !important;
          }
          .faq-accordion-custom .accordion-button {
            background-color: transparent !important;
            color: var(--primary-color) !important;
            padding: 1.25rem 1.5rem;
            box-shadow: none !important;
            transition: all 0.3s ease;
          }
          .faq-accordion-custom .accordion-button:not(.collapsed) {
            background-color: rgba(26, 77, 66, 0.02) !important;
          }
          .faq-accordion-custom .accordion-button::after {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%231a4d42'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
            transform: rotate(-90deg);
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .faq-accordion-custom .accordion-button:not(.collapsed)::after {
            transform: rotate(0deg);
          }
        `}
      </style>
    </section>
  );
};

export default FAQ;
