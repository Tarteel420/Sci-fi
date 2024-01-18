import React, { useState } from "react";

function ContactForm() {
  const formContainerStyles = {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "50px auto 0", // Added marginBottom of 50px
  };

  const donationButtonsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  };


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    agree: false,
    donationAmount: 0,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your logic here to send the form data to a backend or perform any other action.
  };

  return (
    <div className="video-container" style={{height:"500px"}}>
      <video 
        className="bg-video"
        src="../videos/contact.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          top: "0",
          left: "0",
          objectFit: "cover",
        }}
      />
      
      
      <div style={formContainerStyles}>
        <div style={donationButtonsContainerStyles}>
          <p> <span style={{fontFamily:"cursive", fontSize:"30px"}}> Get in Touch <br /></span>
           You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit us personally</p>
         
        </div>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">First Name:</label>
            <input
              style={{ marginLeft: "0", width: "100%" }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="name">Last Name:</label>
            <input
              style={{ marginLeft: "0", width: "100%" }}
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              style={{ marginLeft: "0",width: "100%" }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              style={{ marginLeft: "0", width: "100%" }}
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              style={{ marginLeft: "0", width: "100%", height: "50px" }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" style={{ marginTop: "10px", background: "#aad8cd" }}>
            MESSAGE
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default ContactForm;
