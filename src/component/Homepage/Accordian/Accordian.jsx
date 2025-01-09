import { useState } from "react";
import "./Accordian.css";
import { accordian } from "../../../assets/accordianData";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion item is open

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if the same item is clicked, else open the new one
  };

  return (
    <section className="main-div">
      <h1>FAQ</h1>
      {accordian.map((curElem, index) => (
        <MyAccordian
          key={curElem.id}
          question={curElem.question}
          answer={curElem.answer}
          isOpen={openIndex === index} // Determine if this accordion should be open
          onToggle={() => handleToggle(index)} // Pass the toggle handler
        />
      ))}
    </section>
  );
};

export default Accordian;
