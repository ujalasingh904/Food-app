import React from 'react'
import "../Css/footer.css"
import image1 from "../assets/Foodie.png"
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <>
    <div className="Footer ">
        <div className="container my-5">
            <div className="row gx-0 align-items-baseline">
                <div className="col-md-3 footer_col1">
                    <img src={image1} alt="" />
                    <div className="py-3">
                        <FaFacebookF className='footer_icons' />
                        <FaYoutube className='footer_icons' />
                        <FaTwitter className='footer_icons' />
                        <IoLogoWhatsapp className='footer_icons' /> 
                    </div>
                </div>
                <div className="col-md-9 footer_col2">
                    <div className="row">
                        <div className="col-md-3">
                            <h3>Home</h3>
                            <ul className='list-unstyled pt-3'>
                                <li><a href="/"> Home</a></li>
                                <li><a href="/"> Packages</a></li>
                                <li><a href="/"> About us</a></li>
                                <li><a href="/"> Contact us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className='pb-3'>Packages</h3>
                            <p>Quality</p>
                            <p>Help</p>
                            <p>Share</p>
                            <p>Carees</p>
                        </div>
                        <div className="col-md-3">
                            <h3 className='pb-3'>About Us</h3>
                            <p>+91 244-522-1542</p>
                            <p>hello@gmail.com</p>
                            <p>demo@gmail.com</p>
                        </div>
                        <div className="col-md-3">
                            <h3 className='pb-3'>Contact</h3>
                            <p>Terms & Conditons</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="para">
                <p >
                   Copyright © 2023 CarryOn. All rights reserved | Design by <b>Ujala Singh</b>
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer