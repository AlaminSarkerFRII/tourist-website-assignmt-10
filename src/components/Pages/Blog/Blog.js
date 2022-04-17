import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container">
      <div className="row mt-5 g-5 ">
        <div className="col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-2">
                Difference with authorize and authentication
              </h5>
              <p className="card-text fs-4">
                Authentication means to confirm your own identity, while
                authorization means to grant access to the system. In simple
                terms, authentication verifies who you are, while authorization
                verifies what you have access to
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-2">
                why are you using firebase whats other option have to ?
              </h5>
              <p className="card-text fs-4">
                Reasons for using Firebase, Backend-as-a-Service (BaaS), is a
                platform by Google that provides functionalities and helps with
                the backend development of your Android, iOS, or web and even
                some products that support Unity3D too.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title  fs-2">
                what other service does firebase hooks provide than
                authentication ?
              </h5>
              <p className="card-text fs-4">
                firebase hooks provides Cloud Functions for Firebase is a
                serverless framework that lets you automatically run backend
                code in response to events triggered by Firebase features and
                HTTPS requests. Your JavaScript or TypeScript code is stored in
                Google's cloud and runs in a managed environment. There's no
                need to manage and scale your own servers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
