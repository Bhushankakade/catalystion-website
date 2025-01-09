// import React from "react";
import "./MyAccordian.css";
import PropTypes from "prop-types";

const MyAccordian = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="accordian-item">
      <div className="accordian-title" onClick={onToggle}>
        {question}
        <span className="accordian-icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordian-content">{answer}</div>}
    </div>
  );
};

MyAccordian.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MyAccordian;
