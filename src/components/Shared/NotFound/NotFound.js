import React from "react";
import imgs from "../../Images/404.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div>
        <img src={imgs} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
