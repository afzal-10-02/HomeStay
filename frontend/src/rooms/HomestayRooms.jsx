import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "Budget Room", path: "/budget" },
  { title: "Cottage Room", path: "/cottage" },
  { title: "Family Suite", path: "/family" },
  { title: "Deluxe Suite", path: "/deluxe" }
];

const HomestayService = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleRoomClick = (index, path) => {
    setActive(index);
    setTimeout(() => navigate(path), 300);
  };

  return (
    <div className="homestay-service-wrapper">
      <div className="homestay-service-container">
        
        {/* LEFT - IMAGE */}
        <div className="homestay-left">
          <img
            src="/assets/homestay/samdrupte.avif"
            className="homestay-image"
            alt="Our Room Services"
          />
        </div>

        {/* RIGHT - SERVICE LIST */}
        <div className="homestay-right">
          <h2 className="service-heading">Our Room Services</h2>

          <div className="services-list">
            {services.map((item, index) => (
              <div
                key={index}
                onClick={() => handleRoomClick(index, item.path)}
                className={`service-item ${active === index ? "active" : ""}`}
              >
                <div className="service-item-content">
                  <span className="service-toggle">
                    {active === index ? "−" : "+"}
                  </span>
                  <span className="service-item-title">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* STYLES */}
      <style>{`

        .homestay-service-wrapper {
          padding: 60px 20px;
          background: #ffffff;
        }

        .homestay-service-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 50px;
          align-items: center;
        }

        .homestay-left {
          flex: 1;
          min-width: 0;
        }

        .homestay-right {
          flex: 1;
          min-width: 0;
        }

        .homestay-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
          object-fit: cover;
        }

        .service-heading {
          font-weight: 700;
          font-size: 36px;
          color: #0d4a7a;
          margin-bottom: 10px;
          text-decoration: underline;
          text-decoration-color: #0d4a7a;
          text-decoration-thickness: 2px;
          text-underline-offset: 8px;
          font-family: 'Arial', sans-serif;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 30px;
        }

        .service-item {
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 6px;
          overflow: hidden;
        }

        .service-item-content {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
        }

        .service-toggle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #5dade2;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .service-item-title {
          font-size: 16px;
          font-weight: 600;
          color: inherit;
          margin: 0;
          letter-spacing: 0.3px;
        }

        /* Default state */
        .service-item {
          background: white;
          border: none;
        }

        .service-item:hover .service-toggle {
          background: #4a9cd6;
        }

        /* Active state */
        .service-item.active {
          background: linear-gradient(135deg, #0d3f5c 0%, #1a5f7a 100%);
          color: white;
        }

        .service-item.active .service-toggle {
          background: white;
          color: #0d3f5c;
          font-weight: bold;
        }

        .service-item.active .service-item-title {
          color: white;
          font-weight: 700;
        }

        @media (max-width: 992px) {
          .homestay-service-container {
            flex-direction: column;
            gap: 40px;
          }

          .homestay-left,
          .homestay-right {
            flex: 1 1 100%;
          }

          .service-heading {
            font-size: 32px;
            text-align: right;
          }
        }

        @media (max-width: 768px) {
          .homestay-service-wrapper {
            padding: 40px 16px;
          }

          .homestay-service-container {
            gap: 25px;
          }

          .service-heading {
            font-size: 28px;
            text-align: right;
            margin-bottom: 20px;
          }

          .service-toggle {
            width: 32px;
            height: 32px;
            font-size: 16px;
          }

          .service-item-title {
            font-size: 15px;
          }

          .service-item-content {
            padding: 10px 14px;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .homestay-service-wrapper {
            padding: 30px 12px;
          }

          .service-heading {
            font-size: 24px;
          }

          .service-toggle {
            width: 28px;
            height: 28px;
            font-size: 14px;
          }

          .service-item-title {
            font-size: 14px;
          }
        }

      `}</style>
    </div>
  );
};

export default HomestayService;
