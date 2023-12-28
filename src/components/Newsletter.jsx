import React from "react";
import "../Css/Newsletter.css"

const Newsletter = () => {
  return (
    <>
      <div className="Newsletter">
        <div className="container pt-5">
          <div className="row gx-0 text-center row_col">
            <div className="col-md-2"></div>
            <div className="col-md-8">

                <h2 className="main-h2">Have Question in mind?</h2>
                <h2 className="main-h2">Let us help you</h2>
              <div className="Newsletter_col">

                <div className="input-group my-5 p-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn2 btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Send
                  </button>
                </div>

              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
