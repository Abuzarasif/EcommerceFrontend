import React from 'react'
import Heroimg from '../assets/hero_image.png'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
    <div className="container-fluid h-100" style={{backgroundColor:'#FBE1FE'}}>
        <div className="row">
            <div className="col-12 col-md-6 py-2 py-md-none  d-flex flex-column justify-content-center align-items-center  lh-1">
                <div className='h-100  d-flex flex-column justify-content-center'>
                <p className='fs-5 '>
                    NEW ARRIVALS ONLY
                </p>
                <h2 className='fs-1 fw-bold '>
                    new 🖐️
                </h2 >
                <h2 className='fs-1 fw-bold '> collections    </h2>
                <h2 className='fs-1 fw-bold '>
                    for eveyone
                </h2>
                <button className='btn rounded-pill bg-danger text-white'>Latest collection <FaArrowRight />
  </button>
  </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
<img src={Heroimg} className='h-100 w-75' />

            </div>
        </div>

    </div>
    </>
  )
}

export default Hero