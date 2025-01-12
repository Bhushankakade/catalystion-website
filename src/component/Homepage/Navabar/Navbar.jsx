import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./NavbarStyle.css";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

// Modal Component
const Modal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Application Type</h2>
        <Link
          to="register-company"
          className="modal-button modal-company-btn"
          onClick={() => onSelect("company")}
        >
          Apply as Company
        </Link>
        <Link
          to="register-client"
          className="modal-button modal-client-btn"
          onClick={() => onSelect("client")}
        >
          Apply as Client
        </Link>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <ul className="ion__nav-links">
      <li>
        <Link to="#catalyst">Catalyst</Link>
      </li>
      <li>
        <Link to="client">Client</Link>
      </li>
      <li>
        <Link to="aboutus">About Us</Link>
      </li>
      <li>
        <Link to="aboutus">Contact</Link>
      </li>
    </ul>
  );
};

const IonButtons = ({ onOpenModal }) => {
  return (
    <>
      <div className="ionbutton">
        <Link to="ApplyasCatalyst" className="applyascatalyst">
          Apply as Catalyst
        </Link>
      </div>
      <div className="ionbutton">
        <Link className="applyascompany" onClick={onOpenModal}>
          Hire Catalyst
        </Link>
      </div>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For the mobile menu
  const [modalOpen, setModalOpen] = useState(false); // For the modal visibility

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleModalOpen = () => {
    setModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setModalOpen(false); // Close the modal
  };

  const handleSelectApplication = () => {
    setModalOpen(false); // Close the modal after selection
  };

  return (
    <>
      <div className="ion__navbar">
        <div className="ion__logo">
          <h1 className="logo">
            <Link to="#home">
              Catalyst<span>ion</span>
            </Link>
          </h1>
        </div>

        <div
          className={
            isOpen
              ? "ion__nav-liks-container active"
              : "ion__nav-liks-container"
          }
        >
          <Menu />
        </div>

        <div className="ion__buttons">
          <IonButtons onOpenModal={handleModalOpen} />
        </div>

        <div className="ion__navbar-menu menu">
          {isOpen ? (
            <RxCross2 onClick={handleToggleMenu} />
          ) : (
            <RiMenu3Fill onClick={handleToggleMenu} />
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        onSelect={handleSelectApplication}
      />

      {/* Button for responsiveness */}
      <div className="ionbuttonres">
        <div className="ionbutton ionbuttonres">
          <Link
            to="register-catalyst"
            className="applyascatalyst applyascatalystres"
          >
            Apply as Catalyst
          </Link>
        </div>
        <div className="ionbutton ionbuttonres">
          <Link
            to="register-client"
            className="applyascompany applyascompanyres"
            onClick={handleModalOpen}
          >
            Apply as Client
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
