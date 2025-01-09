import "./WhyChooseCatalystion.css";

const WhyChoose = () => {
  return (
    <section id="why-choose-catalystion" className="why-choose-section">
      <div className="container">
        <h2>Why Choose Catalystion?</h2>
        <p className="section-description">
          Catalystion offers a revolutionary approach to business consultancy,
          providing access to top-tier consultants, industry-level training, and
          a platform to foster innovation. Here’s why Catalystion stands out:
        </p>
        <div className="benefits">
          <div className="benefit-item">
            <i className="fas fa-lightbulb benefit-icon"></i>
            <h3>Innovative Services</h3>
            <p>
              Offering unique services like industry games, language learning,
              and training to boost skills.
            </p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-dollar-sign benefit-icon"></i>
            <h3>Affordable Solutions</h3>
            <p>
              Providing cost-effective services, ensuring maximum value for
              businesses of all sizes.
            </p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-chart-line benefit-icon"></i>
            <h3>Platform for Growth</h3>
            <p>
              Our platform fosters business growth through a network of
              catalysts, funders, and clients.
            </p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-headset benefit-icon"></i>
            <h3>Comprehensive Support</h3>
            <p>
              Our team ensures a seamless experience for both consultants and
              clients, providing full support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
