import "./SegmentsSection.css";

const SegmentsSection = () => {
  const segments = [
    { icon: "fas fa-flask", title: "Petrochemicals" }, // Represents science/chemicals
    { icon: "fas fa-vial", title: "Specialty Chemicals" }, // Represents laboratory chemicals
    { icon: "fas fa-seedling", title: "Agrochemicals" }, // Represents agriculture
    { icon: "fas fa-pills", title: "Pharmaceutical Chemicals" }, // Represents pharmaceuticals
    { icon: "fas fa-fill-drip", title: "Dyes and Pigments" }, // Represents color dyes
    { icon: "fas fa-box", title: "Plastics and Polymers" }, // Represents packaging/plastics
    { icon: "fas fa-tools", title: "Adhesives and Sealants" }, // Represents tools/assembly
    { icon: "fas fa-tshirt", title: "Textile Chemicals" }, // Represents textiles
    { icon: "fas fa-oil-can", title: "Oil and Gas Processing" }, // Represents oil processing
    { icon: "fas fa-brush", title: "Paints and Coatings" }, // Represents painting
    { icon: "fas fa-water", title: "Water Treatment Chemicals" }, // Represents water treatment
    { icon: "fas fa-soap", title: "Cleaning Chemicals" }, // Represents cleaning
    { icon: "fas fa-apple-alt", title: "Food Additives" }, // Represents food processing
    { icon: "fas fa-recycle", title: "Rubber and Elastomers" }, // Represents recycled materials
    { icon: "fas fa-microchip", title: "Electronic Chemicals" }, // Represents electronics
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
