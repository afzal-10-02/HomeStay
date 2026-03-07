import React, { useState } from "react";

const RoomReviews = ({ reviews }) => {
  // Fallback dummy data
  const dummyReviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      date: "October 2025",
      rating: 5,
      text: "Absolutely loved our stay here! The room was spotless, the view of the mountains was breathtaking, and the hospitality was top-notch. Highly recommend!"
    },
    {
      id: 2,
      name: "Priya Patel",
      date: "September 2025",
      rating: 4,
      text: "Very cozy and comfortable room. The amenities were exactly as described. The hosts were incredibly warm and made us feel right at home."
    },
    {
      id: 3,
      name: "Amit Kumar",
      date: "August 2025",
      rating: 5,
      text: "A perfect home away from home. The bed was incredibly comfortable, and waking up to the local scenery was a dream. Will definitely be coming back!"
    }
  ];

  const displayReviews = reviews && reviews.length > 0 ? reviews : dummyReviews;

  // State to track the current review index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider controls
  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === displayReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? displayReviews.length - 1 : prevIndex - 1
    );
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  // Helper function to render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? "text-warning" : "text-muted"}`}
        style={{ fontSize: "0.7rem", marginRight: "2px" }}
      ></i>
    ));
  };

  const currentReview = displayReviews[currentIndex];

  return (
    <div className="room-reviews-slider mt-3">
      {/* Section Header */}
      {/* Section Header */}
      <div className="section-divider mb-4 text-center">
        <h3 className="h4 mb-3" style={{ color: "#1F2933" }}>
          <i className="fas fa-comment-dots me-2" style={{ color: "rgb(30, 111, 92)" }}></i>
          Guest Reviews
        </h3>
      </div>

      {/* The Sliding Box Container */}
      <div className="position-relative mx-auto" style={{ maxWidth: "800px" }}>
        
        {/* Review Card */}
        <div
          className="review-card p-2 p-md-2 rounded shadow-sm text-center"
          style={{
            backgroundColor: "#f8f9fa",
            borderTop: "4px solid #1E6F5C",
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Quote Icon Background (Optional styling touch) */}
          <div className="mb-3">
            <i className="fas fa-quote-left fs-1" style={{ color: "rgba(30, 111, 92, 0.1)" }}></i>
          </div>

          {/* Review Text */}
          <p className="fs-5 mb-4 fst-italic" style={{ color: "#4B5563", lineHeight: "1.6" }}> "{currentReview.text}"
          </p>

          {/* Stars */}
          <div className="mb-3">{renderStars(currentReview.rating)}</div>

          {/* Reviewer Info */}
          <div>
            <h5 className="mb-0 fs-6" style={{ color: "#1F2933", fontWeight: "600" }}>
              {currentReview.name}
            </h5>
            <small style={{ color: "#6B7280" }}>{currentReview.date}</small>
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={prevReview}
          className="btn position-absolute top-50 translate-middle-y start-0 d-none d-md-block"
          style={{
            marginLeft: "-50px",
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            color: "#1E6F5C"
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextReview}
          className="btn position-absolute top-50 translate-middle-y end-0 d-none d-md-block"
          style={{
            marginRight: "-50px",
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            color: "#1E6F5C"
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Mobile Arrows & Dots Indicator */}
      <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
        {/* Mobile Prev Arrow (Visible only on small screens) */}
        <button 
          onClick={prevReview} 
          className="btn btn-sm d-md-none"
          style={{ color: "#1E6F5C" }}
        >
          <i className="fas fa-chevron-left fs-4"></i>
        </button>

        {/* Dots */}
        <div className="d-flex gap-2">
          {displayReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: currentIndex === index ? "#1E6F5C" : "#D1D5DB",
                transition: "background-color 0.3s ease",
                padding: 0
              }}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Next Arrow (Visible only on small screens) */}
        <button 
          onClick={nextReview} 
          className="btn btn-sm d-md-none"
          style={{ color: "#1E6F5C" }}
        >
          <i className="fas fa-chevron-right fs-4"></i>
        </button>
      </div>
    </div>
  );
};

export default RoomReviews;