import React, { useState } from "react";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fifth from "../assets/fifth.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Second = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="sec">
      <Navbar />
      <div className="flex-div">
        <div className="card" style={{ width: "18rem", height: "230px" }}>
          <img
            src={second}
            className="card-img-top"
            alt="..."
            style={{ height: "230px" }}
          />
        </div>

        <div className="card" style={{ width: "18rem", height: "230px" }}>
          <img
            src={third}
            className="card-img-top"
            alt="..."
            style={{ height: "230px" }}
          />
        </div>

        <div className="card" style={{ width: "18rem", height: "230px" }}>
          <img
            src={fifth}
            className="card-img-top"
            alt="..."
            style={{ height: "230px" }}
          />
        </div>

        {/* <div className="card" style={{ width: "18rem", height:"230px" }}>
        <img
          src={first}
          className="card-img-top"
          alt="..."
          style={{ height:"230px" }}
        />
      </div>


      <div className="card" style={{ width: "18rem", height:"230px" }}>
        <img
          src={first}
          className="card-img-top"
          alt="..."
          style={{ height:"230px" }}
        />
      </div>


      <div className="card" style={{ width: "18rem", height:"230px" }}>
        <img
          src={first}
          className="card-img-top"
          alt="..."
          style={{ height:"230px" }}
        />
      </div> */}
      </div>

      <form className="form-one">
        <b>Check Price and Availability</b>
        <div>

          <div class="mb-3">
            <label for="FirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputFirstName"
            />
          </div>

          <div class="mb-3">
            <label for="LastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputLastName"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>


          <div class="mb-3">
            <label for="PhoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              class="form-control"
              id="exampleInputPhoneNumber"
            />
          </div>

          <label>Select a Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
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
      <Footer/>
    </div>
  );
};

export default Second;
