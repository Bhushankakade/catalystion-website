import { useEffect } from "react";
import "./IonsInNumber.css";

const StatisticsSection = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter) => {
              const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = target / 200;

                if (count < target) {
                  counter.innerText = Math.ceil(count + increment);
                  setTimeout(updateCount, 20);
                } else {
                  counter.innerText = `${target}+`;
                }
              };
              updateCount();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const section = document.querySelector(".statistics-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="statistics-section">
      <div className="container">
        {/* Section Heading */}
        <h2>Catalystion in Numbers</h2>
        <p>Our Impact and Reach</p>

        {/* Statistics Blocks */}
        <div className="statistics">
          <div className="stat-item">
            <i className="fas fa-users"></i>
            <div className="stat-number" data-target="500">
              0
            </div>
            <p>Consultants</p>
          </div>
          <div className="stat-item">
            <i className="fas fa-handshake"></i>
            <div className="stat-number" data-target="100">
              0
            </div>
            <p>Companies Supported</p>
          </div>
          <div className="stat-item">
            <i className="fas fa-check-square"></i>
            <div className="stat-number" data-target="1000">
              0
            </div>
            <p>Successful Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
