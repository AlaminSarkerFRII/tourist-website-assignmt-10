import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  return (
    <div className="container">
      <div className="service-details p-3 text-center">
        <img className="w-100" src={img} alt="" />
        <p className="description mt-2">{description}</p>
        <p className="text-info fw-bold mt-5">{name}</p>
        <p className="text-danger">price: ${price} </p>
        <button className="btn btn-primary w-50 mx-auto">Buy This</button>
      </div>
    </div>
  );
};

export default Service;
