import React from 'react'
import logo from '../../../assets/logo.png'
import pintester from '../../../assets/pintester_icon.png'
import insta from '../../../assets/instagram_icon.png'
import wp from '../../../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <>
    <div className="container ">
        <div className='d-flex justify-content-center align-items-center py-4'>
<img src={logo} alt="" />
<span className='ps-3 fs-2 fw-bold'>SHOPPER</span>
        </div>

<ul className='list-unstyled d-flex justify-content-center '>
   <li className='px-1 px-sm-3'>Company</li>
   <li className='px-1 px-sm-3'>Products</li>
   <li className='px-1 px-sm-3'>Offices</li>
   <li className='px-1 px-sm-3'>About</li>
   <li className='px-1 px-sm-3'>Contact</li>
    </ul>    
    <div className='d-flex justify-content-center py-4'>
        <img  src={insta}  className='px-3' alt="" /><img className='px-3' src={pintester} alt="" /><img className='px-3' src={wp} alt="" />
    </div>
    <hr  />
    </div>
    <p className='text-center'>
        Copyright @2025 - All Rights Reserved
    </p>
    </>
  )
}

export default Footer