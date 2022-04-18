import React from "react";
import "./About.css";
import myPic from "../../Images/my-profile-pic/imgae-1.png";

const About = () => {
  return (
    <div className="container">
      <div className="row g-5 mt-5 d-flex  align-items-center">
        <div className="col-md-6 col-lg-9 col-sm-12 w-50 mx-auto">
          <h1 className="">
            Hi !! I'm <br />
            <span className="text-info fw-bold">Alamin Sarker</span>
          </h1>
          <p className="fs-5">
            I want be world best web developer and good at problem solving . For
            this reason I am searching a good platform to learn and guide to me
            thats i can achieve my goals . one day i found programming hero
            platform and it is good responsibilities which i knows before i
            joining .
          </p>
          <br />
          <p className="fs-5">
            I am working so hard for achieve my goals . after complete my office
            time i can practies a short time in my 24 hours. i working whole
            time at night till 2 or 3 am . after thats i going to my office at 7
            : 30am , its so difficult to mange this but i'm trying to my best .
            <cite>In Sha Allah , I will be Success very soon.</cite>
          </p>
          <button className="btn btn-info">Read More....</button>
        </div>
        <div className="img-container col-md-6 col-lg-3 col-sm-12 mt-5">
          <img src={myPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
