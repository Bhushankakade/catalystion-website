import "./HowItWorks.css";

const HowItWorks = () => {
  const catalystSteps = [
    {
      icon: "fa-user-plus",
      title: "Sign Up",
      description: "Create your profile.",
    },
    {
      icon: "fa-file-alt",
      title: "Screening",
      description: "Pass subject tests and guidelines.",
    },
    {
      icon: "fa-check-circle",
      title: "Verification",
      description: "We verify your credentials.",
    },
    {
      icon: "fa-briefcase",
      title: "Start Earning",
      description: "Get started with real-world projects.",
    },
  ];

  const clientSteps = [
    {
      icon: "fa-pencil-alt",
      title: "Start Project",
      description: "Share your challenge.",
    },
    {
      icon: "fa-search",
      title: "Select a Catalyst",
      description: "Review expert profiles.",
    },
    {
      icon: "fa-handshake",
      title: "Collaborate",
      description: "Work together and solve your problem.",
    },
    {
      icon: "fa-credit-card",
      title: "Pay for Solutions",
      description: "Simple and transparent payment.",
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <h2>How It Works</h2>

        {/* For Catalysts */}
        <div className="process">
          <h3>For Catalysts</h3>
          <div className="steps">
            {catalystSteps.map((step, index) => (
              <div key={index} className="step-item">
                <i className={`fas ${step.icon} step-icon`}></i>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Clients */}
        <div className="process">
          <h3>For Clients</h3>
          <div className="steps">
            {clientSteps.map((step, index) => (
              <div key={index} className="step-item">
                <i className={`fas ${step.icon} step-icon`}></i>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
