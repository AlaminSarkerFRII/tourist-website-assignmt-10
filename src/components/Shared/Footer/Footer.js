import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer-container mt-5">
      <div className="info ms-3 ">
        <h2>
          Visited <cite className="text-danger"> Alamin Photography </cite>
        </h2>
      </div>
      <div className="social-link">
        <h2>link</h2>
        <Link to="/home">Home</Link>
        <Link to="/about"> About Me </Link>
        <Link to="/blog"> Blogs</Link>
      </div>
      <div className="icons">
        <BsFacebook className="fs-2 mx-2 text-danger" />
        <FcGoogle className="fs-2  mx-2"> </FcGoogle>
        <FaGooglePlay className="fs-2  mx-2 text-danger"></FaGooglePlay>
        <AiFillLinkedin className="fs-2  mx-2 text-danger" />
      </div>
    </footer>
  );
};

export default Footer;
