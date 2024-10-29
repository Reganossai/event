import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-div">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://img.peerspace.com/image/upload/w_1200,c_limit/c_crop,g_custom,f_auto,q_auto,dpr_auto/l_PS-logo,g_south_east,x_20,y_20,w_175,o_75/in7zztxq4xtopyhfjrcd"
          className="card-img-top"
          alt="..."
          style={{ width: "18rem", height:"190px" }}
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
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src={second}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/second" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src={third}
          className="card-img-top"
          alt="..."
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
      </div>


      <div className="card" style={{ width: "18rem" }}>
        <img
          src={fourth}
          className="card-img-top"
          alt="..."
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
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src={fifth}
          className="card-img-top"
          alt="..."
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
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://images.unsplash.com/photo-1542189800-ffe910d48d28?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D"
          className="card-img-top"
          alt="..."
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
      </div>



      
      </div>
    </div>
  );
};

export default Landingpage;
