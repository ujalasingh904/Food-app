import React from "react";
import ujala from "../assets/ujala.png"
import "../Css/testimonal.css"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Testimomnal = () => {
  return (
    <>
      <div className="Testimomnal">
        <div className="container py-5 my-md-5 row_col">
          <div className="text-center">
            <span className="main-span ">Testimonial</span>
          </div>
          <h1 className="main-h2 text-center">What They are Saying</h1>
           <div className="row row_col">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <p className="main-p text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi iure dolorum earum odio, neque modi.
                </p>
                </div>
                <div className="col-md-2"></div>
            </div>
            {/* //////////////////////////////////////////////////////// */}
          <div className="row gx-0 text-center py-5 row_col">
            <div className="col-md-1 col-2"></div>
            <div className="col-md-10 col-8">
              <div className="testimonal_col">
                <img src={ujala} alt="Loading" className="img-fluid" />
                <p className="pt-4 pb-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat error dolorum veniam inventore, odit provident aperiam consequatur adipisci sed eligendi?
                </p>
                
                <FaStar  className="menu_col_icon1 star_icon"/>
                <FaStar  className="menu_col_icon1 star_icon"/>
                <FaStar  className="menu_col_icon1 star_icon"/>
                <FaStar  className="menu_col_icon1 star_icon"/>
                <FaRegStar className="menu_col_icon1 star_icon "/>
                <h4 className="pt-3 ">Ujala Singh</h4>
              </div>
            </div>
            <div className="col-md-1  col-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimomnal;
