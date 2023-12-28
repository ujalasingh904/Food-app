import React from 'react'
import chicken from "../assets/chicken.png"
import truck from "../assets/truck.png"
import hand from "../assets/hand.png"
import "../Css/work.css"

const Work = () => {
  return (
    <>
    <div className="Work">
        <div className="container text-center">
                <span className='main-span'>Work</span>
                <h1 className='main-h2'>How it Works</h1>
                <div className="row row_new">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className='main-p'>
                        Lorem ipsum dolor sit amet consectetur adipisici elit. Natus asperiores sint magni obcaecati iu   aliquid modi quas quis exercitationem         officiis.
                        </p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                
            <div className="row gx-0  align-items-center  work-main px-md-5">
                <div className="col-md-4">
                    <div className="work-col1">
                        <img src={chicken} alt="Loading" />
                        <h5>Pick Meals</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic animi iste sequi illo repudiandae accusamus, deserunt cum earum reiciendis ullam.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-col1">
                        <img src={truck} alt="Loading" />
                        <h5>Choose How Often</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic animi iste sequi illo repudiandae accusamus, deserunt cum earum reiciendis ullam.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-col1">
                        <img src={hand} alt="Loading" />
                        <h5>Fast Deliveries</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic animi iste sequi illo repudiandae accusamus, deserunt cum earum reiciendis ullam.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Work