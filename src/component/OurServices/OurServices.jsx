import React from "react";
import "./OurServices.css";

const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-search",
      title: "Research & Analysis",
      description:
        "Comprehensive research to provide actionable insights for your business.",
    },
    {
      icon: "fas fa-chart-bar",
      title: "Data Visualization",
      description: "Transform raw data into meaningful visual insights.",
    },
    {
      icon: "fas fa-globe",
      title: "Market Entry Strategy",
      description:
        "Strategic planning for successful market entry and expansion.",
    },
    {
      icon: "fas fa-rocket",
      title: "Startup Consulting",
      description: "Expert advice to help startups achieve sustainable growth.",
    },
    {
      icon: "fas fa-box",
      title: "Supply Chain Optimization",
      description: "Streamline your supply chain for maximum efficiency.",
    },
    {
      icon: "fas fa-briefcase",
      title: "Business Development",
      description: "Identify and capitalize on new business opportunities.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Sales Strategy",
      description: "Develop strategies to boost your sales and revenue.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Digital Transformation",
      description: "Leverage technology to transform your business processes.",
    },
    {
      icon: "fas fa-cogs",
      title: "Process Improvement",
      description:
        "Enhance operational efficiency through optimized processes.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Risk Management",
      description: "Identify and mitigate risks to safeguard your business.",
    },
    {
      icon: "fas fa-tools",
      title: "Technical Support",
      description: "Professional support to resolve technical challenges.",
    },
    {
      icon: "fas fa-industry",
      title: "Industrial Automation",
      description: "Automate processes to improve efficiency and reduce costs.",
    },
    {
      icon: "fas fa-file-alt",
      title: "Regulatory Compliance",
      description: "Ensure adherence to industry standards and regulations.",
    },
    {
      icon: "fas fa-vial",
      title: "Chemical Testing",
      description:
        "Reliable testing services for chemical properties and safety.",
    },
    {
      icon: "fas fa-handshake",
      title: "Partnership Building",
      description:
        "Foster collaborations with industry leaders and innovators.",
    },
    {
      icon: "fas fa-book",
      title: "Training Programs",
      description: "Empower your team with skill-based training and workshops.",
    },
  ];

  return (
    <div className="services" id="services">
      <h1 className="services-title">Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <i className={`${service.icon} icon`}></i>
            <div className="service-title">{service.title}</div>
            <div className="service-description">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
