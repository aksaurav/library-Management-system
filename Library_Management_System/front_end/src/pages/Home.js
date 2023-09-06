import React from "react";
import Layouts from "../components/layouts/Layouts";
import { Link } from "react-router-dom";
import Banner from "../public1/images/img-home.jpg";
import "../styles/HomeStyle.css";
const Home = () => {
  return (
    <Layouts>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Library Management</h1>
          <p>This book was authered by ....</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layouts>
  );
};

export default Home;
