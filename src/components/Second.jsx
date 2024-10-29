import React, { useState } from 'react';
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './Navbar';

const Second = () => {
    
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="sec">

    <Navbar/>
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
        <div>
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
          Book
        </button>
      </form>
    </div>
  );
};

export default Second;
