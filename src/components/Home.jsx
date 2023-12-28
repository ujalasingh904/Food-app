import React from 'react'
import '../Css/home.css'
import image2 from '../assets/image2.png'
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot ,FaPhone} from "react-icons/fa6";
const Home = () => {
  return (
    <>
        {/***********************************/}
    <div className="Home">
        <div className="container-fluid Home-Main">
            <div className="row gx-0 align-items-center">
        
        {/***********************************/}
                <div className="col-md-6">
                    <div className="home_col1">
                       <h1 className='pe-md-5'>Your Favourite Food Delivered Hot & Fresh</h1>
                       {/* <h1>Delivered Hot &</h1>
                       <h1>Fresh</h1> */}
                       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolorum. Incidunt doloribus perferendis laboriosam, quia consequatur voluptatibus nulla a veniam quis dolores error.</p>
                       <button className="btn2">Order Now &rarr;</button>
                    </div>
                </div>
        {/***********************************/}
                <div className="col-md-6">
                    <div className="home_col2">
                        <img src={image2} alt="Loading" />
                    </div>
                </div>
        {/***********************************/}
            </div>
        </div>
    </div>
    {/***********************************/}
    <div className="Delivery">
        <div className="container text-center">
            <div className="row gx-0 row_gap">
                <div className="col-md-4">
                    <div className="Delivery_col">
                        <FaRegClock className='new_icon' />
                        <h5>Today 10:00 am - 7:00 pm</h5>
                        <p>Working hours</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Delivery_col">
                        <FaLocationDot className='new_icon'/>
                        <h5>NaharPur Rupa Gurugram 100</h5>
                        <p>Get Directions</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Delivery_col">
                        <FaPhone className='new_icon'/>
                        <h5>+91 8985464145</h5>
                        <p>Call Online</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home