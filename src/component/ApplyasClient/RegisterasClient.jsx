import React, { useState } from "react";
import axios from "axios";
import "./RegisterasClient.css";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    productService: "",
    purposeOfJoining: "",
    contactPersonName: "",
    clientLevel: "startup", // Default value
  });

  const [errorMessages, setErrorMessages] = useState({}); // State for error messages
  const [submitted, setSubmitted] = useState(false); // State for submission status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessages({}); // Clear error messages on input change
  };

  const validateForm = () => {
    const errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Confirm email validation
    if (formData.email !== formData.confirmEmail) {
      errors.confirmEmail = "Email and Confirm Email must match.";
    }

    // Product/Service validation
    if (!formData.productService || formData.productService.length < 10) {
      errors.productService =
        "Product/Service must be at least 10 characters long.";
    }

    // Purpose of Joining validation
    if (!formData.purposeOfJoining || formData.purposeOfJoining.length < 10) {
      errors.purposeOfJoining =
        "Purpose of Joining must be at least 10 characters long.";
    }

    // Contact Person Name validation
    if (!formData.contactPersonName || formData.contactPersonName.length < 2) {
      errors.contactPersonName =
        "Contact Person Name must be at least 2 characters long.";
    }

    // Client Level validation (optional)
    if (formData.clientLevel === "") {
      errors.clientLevel = "Please select a client level.";
    }

    return errors; // Return the errors object
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(); // Validate the form
    console.log("Validation Errors:", errors); // Log errors to console
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors); // Set error messages if there are validation errors
      return; // Prevent form submission
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/client/clientSubmit",
        formData
      );
      console.log("Form data submitted successfully:", response.data);

      setSubmitted(true); // Set submitted state to true
      setFormData({
        email: "",
        confirmEmail: "",
        productService: "",
        purposeOfJoining: "",
        contactPersonName: "",
        clientLevel: "startup",
      });
      setErrorMessages({}); // Clear previous error messages
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="client-form-container">
      {submitted ? (
        <div className="thank-you-message-client">
          <h1>Thank You!</h1>
          <p>Your submission has been received successfully.</p>
          <p>We will get back to you shortly.</p>
        </div>
      ) : (
        <>
          <h1 className="client-form-title">Client Registration Form</h1>
          <form className="client-registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errorMessages.email && (
                <p className="error-message">{errorMessages.email}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Email:</label>
              <input
                type="email"
                name="confirmEmail"
                className="form-input"
                value={formData.confirmEmail}
                onChange={handleChange}
                required
              />
              {errorMessages.confirmEmail && (
                <p className="error-message">{errorMessages.confirmEmail}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Product/Service:</label>
              <textarea
                name="productService"
                className="form-textarea"
                value={formData.productService}
                onChange={handleChange}
                required
              />
              {errorMessages.productService && (
                <p className="error-message">{errorMessages.productService}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Purpose of Joining:</label>
              <textarea
                name="purposeOfJoining"
                className="form-textarea"
                value={formData.purposeOfJoining}
                onChange={handleChange}
                required
              />
              {errorMessages.purposeOfJoining && (
                <p className="error-message">
                  {errorMessages.purposeOfJoining}
                </p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Contact Person Name:</label>
              <input
                type="text"
                name="contactPersonName"
                className="form-input"
                value={formData.contactPersonName}
                onChange={handleChange}
                required
              />
              {errorMessages.contactPersonName && (
                <p className="error-message">
                  {errorMessages.contactPersonName}
                </p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Client Level:</label>
              <select
                name="clientLevel"
                className="form-select"
                value={formData.clientLevel}
                onChange={handleChange}
              >
                <option value="">Select Client Level</option>
                <option value="startup">Startup</option>
                <option value="intermediate">Intermediate</option>
                <option value="bigfirm">Big Firm</option>
              </select>
              {errorMessages.clientLevel && (
                <p className="error-message">{errorMessages.clientLevel}</p>
              )}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ClientForm;
