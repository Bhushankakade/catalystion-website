import React from "react";
import "./ClientPage.css";

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1>Empowering the Chemical Industry with Expert Solutions</h1>
        <p>
          Partner with Catalystion for innovative and practical consultancy
          services tailored to the chemical sector.
        </p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>
          About Catalyst<span>ion</span>
        </h2>
        <p>
          Catalystion is dedicated to providing specialized consultancy services
          to the chemical industry, helping businesses tackle challenges and
          achieve sustainable growth through innovative strategies.
        </p>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="cards">
          {[
            {
              icon: "fas fa-flask",
              title: "Process Optimization",
              description:
                "Enhancing chemical processes for maximum efficiency and cost-effectiveness.",
            },
            {
              icon: "fas fa-leaf",
              title: "Sustainability Consulting",
              description:
                "Developing eco-friendly practices and ensuring compliance with environmental regulations.",
            },
            {
              icon: "fas fa-lightbulb",
              title: "R&D Support",
              description:
                "Assisting in research and development for new chemical products and innovations.",
            },
            {
              icon: "fas fa-industry",
              title: "Manufacturing Solutions",
              description:
                "Improving production workflows and scaling operations effectively.",
            },
            {
              icon: "fas fa-shield-alt",
              title: "Regulatory Compliance",
              description:
                "Ensuring adherence to industry standards and legal requirements.",
            },
            {
              icon: "fas fa-chart-bar",
              title: "Market Analysis",
              description:
                "Providing insights and strategies to navigate market trends and demands.",
            },
          ].map((service, index) => (
            <div key={index} className="card">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonial">
          <h4>Dilip Agarwal, Founder of Nirmala Udyog</h4>
          <p>
            Catalystion helped us overcome significant challenges in the
            competitive detergent market. Their comprehensive market research,
            innovative packaging recommendations, and targeted social media
            campaigns transformed our business.
          </p>
          <ul>
            <li>Increased market share by 20% within 4 months.</li>
            <li>Boosted customer engagement on social media by 35%.</li>
            <li>
              Achieved a 25% increase in sales volume for Ravjee Detergent.
            </li>
            <li>
              Enhanced customer satisfaction, resulting in a 15% increase in
              repeat purchases.
            </li>
            <li>
              Strengthened brand perception, establishing Ravjee as a trusted
              household detergent.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
