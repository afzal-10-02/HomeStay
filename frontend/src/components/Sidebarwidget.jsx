import { useState, useEffect } from "react";

const SidebarWidget = ({ dataUrl }) => {
  const [services, setServices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Fetch JSON data
    fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, [dataUrl]);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="ft-service-sidebar-widget headline ul-li-block">
      <div className="service-category-widget">
        <span className="service-title">Homestay Services</span>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <a
                href={service.link}
                className={activeIndex === index ? "active-course" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  toggleItem(index);
                }}
              >
                <span className="toggle-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>{" "}
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarWidget;
