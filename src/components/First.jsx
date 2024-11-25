import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import first from "../assets/flo1.jpg";
import second from "../assets/flo2.jpg";
import third from "../assets/flo3.jpg";
import fourth from "../assets/flo4.jpg";
import fifth from "../assets/flo5.jpg";
import sixth from "../assets/flo6.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const First = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: null,
  });

  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          date: formData.date ? formData.date.toLocaleDateString() : "No date selected",
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("Failed to send email. Please try again.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="sec">
      <Navbar />
      <div className="flex-div">
        <div className="card" style={{ width: "18rem", height: "230px" }}>
          <img src={first} className="card-img-top" alt="..." style={{ height: "230px" }} />
        </div>
        <div className="card" style={{ width: "18rem", height: "230px" }}>
          <img src={second} className="card-img-top" alt="..." style={{ height: "230px" }} />
        </div>
        <div className="card" style={{ width: "18rem", height: "230px" }}>
          <img src={third} className="card-img-top" alt="..." style={{ height: "230px" }} />
        </div>
        <div className="card" style={{ width: "18rem", height: "230px" }}>
          <img src={fourth} className="card-img-top" alt="..." style={{ height: "230px" }} />
        </div>
        <div className="card" style={{ width: "18rem", height: "230px" }}>
          <img src={fifth} className="card-img-top" alt="..." style={{ height: "230px" }} />
        </div>
        <div className="card" style={{ width: "18rem", height: "230px" }}>
          <img src={sixth} className="card-img-top" alt="..." style={{ height: "230px" }} />
        </div>
      </div>
      <form className="form-one" onSubmit={handleSubmit}>
        <b>Check Price and Availability</b>
        <div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <label>Select a Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Click to select a date"
            dateFormat="MMMM d, yyyy"
            className="date-input"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <p className="lapa">Call +1(888)377-7633 for Price and Availability</p>
      <Footer />
    </div>
  );
};

export default First;
