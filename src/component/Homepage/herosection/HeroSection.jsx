import "./HeroSection.css";

const home = () => {
  return (
    <>
      <div className="landing-intro">
        <div className="ion__landingintro-img">
          <img
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=1024x1024&w=is&k=20&c=rsMEfrDiYh3Y2CbJ8OQYRfJZ2kOGBneREKETBn0vyjU="
            className="ion__landingintro-image"
          />
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
