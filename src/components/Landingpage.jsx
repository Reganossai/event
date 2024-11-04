import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import first from "../assets/flomain.jpg";
import second from "../assets/second.jpg";
import third from "../assets/fams.jpg";
import fourth from "../assets/renas.jpg";
import fifth from "../assets/crystal.jpg";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-div">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={first}
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "190px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Florian Thauvin</h5>
            <p className="card-text">
              With a capacity of up to 400 people, the Florian Thauvin is an
              exquisite space fit for weddings and special occasions. For over
              20 years, thousands of clients have trusted us with their most
              treasured occasions as we help transform their vision into
              memories that last a lifetime.
            </p>
            <Link to="/first" className="btn btn-primary">
              Take a look
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={second}
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "190px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Timmy Crens</h5>
            <p className="card-text">
              With a capacity of up to 300 people, the Timy crens is an
              exquisite space fit for weddings and special occasions. For over
              20 years, thousands of clients have trusted us with their most
              treasured occasions as we help transform their vision into
              memories that last a lifetime.
            </p>
            <Link to="/second" className="btn btn-primary">
              Take a look
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={third}
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "190px" }}
          />
          <div className="card-body">
            <h5 className="card-title">The Fams</h5>
            <p className="card-text">
              With a capacity of up to 300 people, the Fams is an exquisite
              space fit for weddings and special occasions. For over 20 years,
              thousands of clients have trusted us with their most treasured
              occasions as we help transform their vision into memories that
              last a lifetime.
            </p>
            <Link to="/third" className="btn btn-primary">
              Take a look
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={fourth}
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "190px" }}
          />
          <div className="card-body">
            <h5 className="card-title">The Renaissance</h5>
            <p className="card-text">
              With a capacity of up to 450 people, the Renaissance is an
              exquisite space fit for weddings and special occasions. For over
              20 years, thousands of clients have trusted us with their most
              treasured occasions as we help transform their vision into
              memories that last a lifetime.
            </p>
            <Link to="/fourth" className="btn btn-primary">
              Take a look
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={fifth}
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "190px" }}
          />
          <div className="card-body">
            <h5 className="card-title">The Crystal Ball</h5>
            <p className="card-text">
              With a capacity of up to 140 people, the Crystal ball is an
              exquisite space fit for weddings and special occasions. For over
              20 years, thousands of clients have trusted us with their most
              treasured occasions as we help transform their vision into
              memories that last a lifetime.
            </p>
            <Link to="/fifth" className="btn btn-primary">
              Take a look
            </Link>
          </div>
        </div>
{/* 
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://images.unsplash.com/photo-1542189800-ffe910d48d28?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D"
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "190px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#!" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Landingpage;
