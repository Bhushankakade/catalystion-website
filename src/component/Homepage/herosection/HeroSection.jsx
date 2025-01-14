import React, { useEffect, useRef } from "react";
import heroImage from "../../../../src/assets/heroimage.mp4";
import "./HeroSection.css";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", () => {
        video.currentTime = 0; // Rewind
        video.play(); // Start playing again
      });
    }
    return () => {
      if (video) video.removeEventListener("ended", () => {});
    };
  }, []);

  return (
    <div className="landing-intro">
      <div className="ion__landingintro-img">
        <video
          ref={videoRef}
          src={heroImage}
          autoPlay
          muted
          className="heroimage"
        />
      </div>
      <div className="landing__intro-section">
        <h1>
          Empowering Consultants, <br /> Connecting Companies
        </h1>
        <p>
          Catalystion brings together expert consultants and ambitious
          businesses to solve critical challenges and drive innovation. Our
          platform connects companies with top professionals for fast, efficient
          solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;
