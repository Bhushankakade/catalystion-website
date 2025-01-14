import "./HeroSection.css";
import heroImage from "../../../../src/assets/heroimage.mp4";

const home = () => {
  return (
    <>
      <div className="landing-intro">
        <div className="ion__landingintro-img">
          <video src={heroImage} autoPlay loop className="heroimage" />
        </div>

        <div className="landing__intro-section">
          <h1>
            Empowering Consultants, <br /> Connecting Companies
          </h1>
          <p>
            Catalystion brings together expert consultants and ambitious
            businesses to solve critical challenges and drive innovation. Our
            platform connects companies with top professionals for fast,
            efficient solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default home;
