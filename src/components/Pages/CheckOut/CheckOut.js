import React from "react";
import "./CheckOut.css";

const CheckOut = () => {
  return (
    <div className="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div className="form-info col md-5">
          <form>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="address"
            />
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="inputZip"
                placeholder="phone"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary mt-2">
              Add Shipping
            </button>
          </form>
        </div>
        <div className="col-md-7">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_5tkzkblw.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
