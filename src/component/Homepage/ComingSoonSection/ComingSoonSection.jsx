import "./ComingSoonSection.css";

const ComingSoonSection = () => {
  const features = [
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Expert Training Modules",
      description:
        "Take your skills to the next level with industry-specific, expert-led training modules.",
    },
    {
      icon: "fas fa-language",
      title: "Language Learning",
      description:
        "Break down language barriers with tailored, industry-specific language modules.",
    },
    {
      icon: "fas fa-gamepad",
      title: "Interactive Games",
      description:
        "Learn by doing with gamified, real-world industry challenges!",
    },
    {
      icon: "fas fa-book-open",
      title: "Curated Library Access",
      description:
        "Get exclusive access to a library of industry books, research papers, and guides.",
    },
    {
      icon: "fas fa-rocket",
      title: "Fund Your Ideas",
      description:
        "Share your groundbreaking ideas and connect with funders who believe in your vision.",
    },
    {
      icon: "fas fa-robot",
      title: "Idea Rating Bot",
      description:
        "Our smart bot rates your business ideas, providing tailored suggestions for market success.",
    },
    {
      icon: "fas fa-store",
      title: "Marketplace",
      description:
        "Discover Catalystion’s upcoming marketplace for business networking and solutions.",
    },
    {
      icon: "fas fa-comments-dollar",
      title: "Instant Consultant Access",
      description:
        "Connect instantly with consultants and pay per minute for expert advice.",
    },
    {
      icon: "fas fa-gift",
      title: "Digital Welcome Kit",
      description:
        "Receive a digital welcome kit packed with resources to jumpstart your Catalystion journey!",
    },
  ];

  return (
    <section id="coming-soon" className="coming-soon-section">
      <div className="container">
        <h2>Exciting New Features – Coming Soon!</h2>
        <p className="section-description">
          Join the Waitlist and get ready for a wave of revolutionary tools and
          opportunities designed to take your Catalystion experience to the next
          level.
        </p>

        <div className="features-path">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <i className={feature.icon + " feature-icon"}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
