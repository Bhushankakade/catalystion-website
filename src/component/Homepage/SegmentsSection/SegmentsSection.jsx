import "./SegmentsSection.css";

const SegmentsSection = () => {
  const segments = [
    { icon: "fas fa-laptop-code", title: "Technology" },
    { icon: "fas fa-chart-line", title: "Finance" },
    { icon: "fas fa-tshirt", title: "Textile" },
    { icon: "fas fa-book", title: "Education" },
    { icon: "fas fa-users", title: "Human Resources" },
    { icon: "fas fa-bullhorn", title: "Marketing" },
    { icon: "fas fa-cogs", title: "Engineering" },
    { icon: "fas fa-medkit", title: "Healthcare" },
    { icon: "fas fa-briefcase", title: "Consulting" },
    { icon: "fas fa-leaf", title: "Sustainability" },
    { icon: "fas fa-palette", title: "Creative Arts" },
    { icon: "fas fa-rocket", title: "Aerospace" },
    { icon: "fas fa-handshake", title: "Business Development" },
    { icon: "fas fa-globe", title: "Global Trade" },
    { icon: "fas fa-balance-scale", title: "Law" },
  ];

  return (
    <section className="segments">
      <h2 className="section-title">Explore Our Segments</h2>
      <div className="segments-container">
        {segments.map((segment, index) => (
          <div key={index} className="segment-card">
            <i className={`${segment.icon} icon`}></i>
            <h3 className="segment-title">{segment.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SegmentsSection;
