import { FaPlay } from "react-icons/fa";
import image3 from "../assets/image3.png";
import '../Css/about.css';
const About = () => {
  return (
    <>
     <div className="About">
        <div className="container-fluid">
            <div className="row gx-0 align-items-center">
                <div className="col-md-6 order-2 order-md-1">
                    <div className="About_col1">
                        <img src={image3} alt="Loading" className="img-fluid"/>
                    </div>
                </div>

                <div className="col-md-6 order-1 order-md-1">
                    <div className="About_col2 pe-md-5 me-md-5 ps-md-5">
                        <span>About</span>
                        <h1>Food is An Important Part</h1>
                        <h1>Of a Balanced Diet</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores sint magni obcaecati iure aliquid modi quas quis exercitationem officiis.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores sint magni obcaecati iure aliquid modi quas quis exercitationem officiis.</p>
                        <div className="about_col2_btns  ">
                            <button className="btn2" type="button">Learn More</button>
                            <button className="btn3 mx-3" type="button"><FaPlay className="btn3_play"/> Watch Video</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
     </div>



    </>
  )
}

export default About