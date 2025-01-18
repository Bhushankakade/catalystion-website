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
            Catalystion played a pivotal role in addressing challenges in the
            competitive detergent market. Their expertise in market research,
            innovative packaging solutions, and social media strategies brought
            significant positive changes to our business. We are grateful for
            their support in transforming our brand and strengthening its
            presence in the market.
          </p>
        </div>
        <div className="testimonial">
          <h4>Ankur, Founder of Fatty Acids Esters</h4>
          <p>
            Catalystion has been instrumental in helping us take our polymer
            business to the next level. They supported us in developing a
            professional and user-friendly website, making it easier to showcase
            our products and connect with clients. Their insights in technical
            product development also played a key role in improving our
            offerings. Their expertise and commitment have truly made a positive
            impact on our business growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
