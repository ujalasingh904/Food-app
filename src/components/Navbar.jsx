import image1 from '../assets/Foodie.png'
import '../Css/navbar.css'
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container Nav_main">
          <a className="navbar-brand" href="#">
            <img src={image1} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav_ul px-md-3 ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#">
                  Packages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>

            </ul>
            <form className="d-flex align-items-center nav_last" role="search">
                <FaShoppingCart className='icon'/>
              <button className="btn1" type="button">
                Booking Now
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
