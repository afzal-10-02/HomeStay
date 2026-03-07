import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const services = [
  { title: "Budget Room", path: "/budget" },
  { title: "Cottage Room", path: "/cottage" },
  { title: "Family Suite", path: "/family" },
  { title: "Deluxe Suite", path: "/deluxe" },
  { title: "Mountain View Room", path: "/mountain" },
  { title: "Farm Room", path: "/farm" }
];

const HomestayService = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Detect active item from URL
  const activeIndex = services.findIndex(
    (item) => item.path === location.pathname
  );

  return (
    <div className="homestay-service-wrapper">
      <div className="homestay-service-container">

        {/* LEFT IMAGE */}
        <div className="homestay-left">
          <img
            src="/assets/homestay/samdrupte.avif"
            className="homestay-image"
            alt="Our Room Services"
          />
        </div>

        {/* RIGHT LIST */}
        <div className="homestay-right">
          <h2 className="service-heading">Our Room Services</h2>

          <div className="services-list">
            {services.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className={`service-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="service-item-content">
                  <span className="service-toggle">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                  <span className="service-item-title">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= CSS ================= */}
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

        .homestay-left,
        .homestay-right {
          flex: 1;
        }

        .homestay-image {
          width: 100%;
          border-radius: 10px;
          object-fit: cover;
        }

        .service-heading {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 25px;
          font-family: Arial, sans-serif;
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 8px;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .service-item {
          cursor: pointer;
          border-radius: 8px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .service-item-content {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
        }

        .service-toggle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #1e6f5c;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          transition: 0.3s;
        }

        .service-item-title {
          font-size: 16px;
          font-weight: 600;
        }

        .service-item:hover .service-toggle {
          background: #155d4c;
        }

        .service-item.active {
          background: linear-gradient(135deg, #1e6f5c, #1e6f5c);
          color: #fff;
        }

        .service-item.active .service-toggle {
          background: #fff;
          color: #1e6f5c;
        }

        .service-item.active .service-item-title {
          color: #fff;
          font-weight: 700;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .homestay-service-container {
            flex-direction: column;
          }

          .service-heading {
            text-align: center;
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .service-heading {
            font-size: 28px;
          }

          .service-toggle {
            width: 32px;
            height: 32px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .service-heading {
            font-size: 24px;
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
