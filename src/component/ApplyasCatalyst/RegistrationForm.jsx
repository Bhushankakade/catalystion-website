import React, { useState } from "react";
import "./RegistrationForm.css";
import axios from "axios";

const RegisterCatalyst = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userDetail: {
      name: "",
      mobileNumber: "",
      emailAddress: "",
      confirmEmail: "",
    }, // Added confirmEmail
    degreeVerification: {
      rollNo: "",
      bachelorsDegree: "",
      collegeName: "",
      specification: "",
      collegeLocation: "",
    },
    Segment: { preference1: "", preference2: "", preference3: "" },
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => {
    const validationErrors = validateStep(step);
    if (Object.keys(validationErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    setFormData((prevData) => ({
      ...prevData,
      [keys[0]]: { ...prevData[keys[0]], [keys[1]]: value },
    }));
  };

  const validateStep = (step) => {
    let validationErrors = {};

    if (step === 1) {
      if (!formData.userDetail.name || formData.userDetail.name.length <= 2) {
        validationErrors.name = "Name must be more than 2 characters.";
      }
      if (
        !formData.userDetail.mobileNumber ||
        isNaN(formData.userDetail.mobileNumber)
      ) {
        validationErrors.mobileNumber = "Mobile number must be numeric.";
      }
      if (!formData.userDetail.emailAddress) {
        validationErrors.emailAddress = "Email address is required.";
      }
      if (
        formData.userDetail.emailAddress !== formData.userDetail.confirmEmail
      ) {
        validationErrors.confirmEmail = "Email and Confirm Email must match.";
      }
    }

    if (step === 2) {
      if (!formData.degreeVerification.rollNo)
        validationErrors.rollNo = "Roll number is required";
      if (!formData.degreeVerification.bachelorsDegree)
        validationErrors.bachelorsDegree = "Bachelor's degree is required";
      if (!formData.degreeVerification.collegeName)
        validationErrors.collegeName = "College name is required";
      if (!formData.degreeVerification.specification)
        validationErrors.specification = "Specification is required";
      if (!formData.degreeVerification.collegeLocation)
        validationErrors.collegeLocation = "College location is required";
    }

    if (step === 3) {
      // Validate preferences
      if (
        !formData.Segment.preference1 &&
        !formData.Segment.preference2 &&
        !formData.Segment.preference3
      ) {
        validationErrors.preference1 = "At least one preference is required.";
      }
    }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalValidationErrors = validateStep(step);
    if (Object.keys(finalValidationErrors).length > 0) {
      setErrors(finalValidationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/catalyst/register",
        formData
      );
      console.log("Submitted successfully:", response.data);
      setSubmitted(true);

      // Reset form data after submission
      setFormData({
        userDetail: {
          name: "",
          mobileNumber: "",
          emailAddress: "",
          confirmEmail: "",
        }, // Reset confirmEmail
        degreeVerification: {
          rollNo: "",
          bachelorsDegree: "",
          collegeName: "",
          specification: "",
          collegeLocation: "",
        },
        Segment: { preference1: "", preference2: "", preference3: "" },
      });

      setErrors({});
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="form-container">
      {submitted ? (
        <div className="thank-you-message-catalyst">
          <h2>Thank You!</h2>
          <p>Your registration has been submitted successfully.</p>
          <p>We will get back to you shortly.</p>
        </div>
      ) : (
        <>
          <h1 className="form-title-catalyst">Register as Catalyst</h1>
          <form className="catalyst-form" onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <h2>User Details</h2>
                <div className="form-group">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    name="userDetail.name"
                    className="form-input-catalyst"
                    value={formData.userDetail.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && (
                    <p className="error-message">{errors.name}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile Number:</label>
                  <input
                    type="text"
                    name="userDetail.mobileNumber"
                    className="form-input-catalyst"
                    value={formData.userDetail.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                  {errors.mobileNumber && (
                    <p className="error-message">{errors.mobileNumber}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address:</label>
                  <input
                    type="email"
                    name="userDetail.emailAddress"
                    className="form-input-catalyst"
                    value={formData.userDetail.emailAddress}
                    onChange={handleChange}
                    required
                  />
                  {errors.emailAddress && (
                    <p className="error-message">{errors.emailAddress}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm Email:</label>
                  <input
                    type="email"
                    name="userDetail.confirmEmail" // Ensure this references the correct state
                    className="form-input-catalyst"
                    value={formData.userDetail.confirmEmail} // Ensure this references the correct state
                    onChange={handleChange}
                    required
                  />
                  {errors.confirmEmail && (
                    <p className="error-message">{errors.confirmEmail}</p>
                  )}
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h2>Degree Verification</h2>
                <div className="form-group">
                  <label className="form-label">Roll No:</label>
                  <input
                    type="text"
                    name="degreeVerification.rollNo"
                    className="form-input-catalyst"
                    value={formData.degreeVerification.rollNo}
                    onChange={handleChange}
                    required
                  />
                  {errors.rollNo && (
                    <p className="error-message">{errors.rollNo}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Bachelor's Degree:</label>
                  <input
                    type="text"
                    name="degreeVerification.bachelorsDegree"
                    className="form-input-catalyst"
                    value={formData.degreeVerification.bachelorsDegree}
                    onChange={handleChange}
                    required
                  />
                  {errors.bachelorsDegree && (
                    <p className="error-message">{errors.bachelorsDegree}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">College Name:</label>
                  <input
                    type="text"
                    name="degreeVerification.collegeName"
                    className="form-input-catalyst"
                    value={formData.degreeVerification.collegeName}
                    onChange={handleChange}
                    required
                  />
                  {errors.collegeName && (
                    <p className="error-message">{errors.collegeName}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Specification:</label>
                  <input
                    type="text"
                    name="degreeVerification.specification"
                    className="form-input-catalyst"
                    value={formData.degreeVerification.specification}
                    onChange={handleChange}
                    required
                  />
                  {errors.specification && (
                    <p className="error-message">{errors.specification}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">College Location:</label>
                  <input
                    type="text"
                    name="degreeVerification.collegeLocation"
                    className="form-input-catalyst"
                    value={formData.degreeVerification.collegeLocation}
                    onChange={handleChange}
                    required
                  />
                  {errors.collegeLocation && (
                    <p className="error-message">{errors.collegeLocation}</p>
                  )}
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <h2>Preferences</h2>
                {/* Preference Fields */}
                <div className="form-group">
                  <label>Preference 1:</label>
                  <input
                    type="text"
                    name="Segment.preference1"
                    className="form-input-catalyst"
                    value={formData.Segment.preference1}
                    onChange={handleChange}
                    required
                  />
                  {errors.preference1 && (
                    <p className="error-message">{errors.preference1}</p>
                  )}
                </div>

                {/* Preference 2 */}
                <div className="form-group">
                  <label htmlFor="preference2">Preference 2:</label>
                  <input
                    type="text"
                    name="Segment.preference2"
                    className="form-input-catalyst"
                    id="preference2"
                    value={formData.Segment.preference2}
                    onChange={handleChange}
                  />
                </div>

                {/* Preference 3 */}
                <div className="form-group">
                  <label htmlFor="preference3">Preference 3:</label>
                  <input
                    type="text"
                    name="Segment.preference3"
                    className="form-input-catalyst"
                    id="preference3"
                    value={formData.Segment.preference3}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            {/* Navigation buttons */}
            <div className="navigation-buttons">
              {step > 1 && (
                // Previous button only shows when not on first step
                <button type="button" onClick={prevStep}>
                  Previous
                </button>
              )}
              {step === 3 ? (
                // Submit button when on the last step
                <button type="submit">Submit</button>
              ) : (
                // Next button for other steps
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterCatalyst;
