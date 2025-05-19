import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [selectmenu, setselectmenu] = useState('store')

  return (
    <>
    <div className="container-fluid g-0  text-black py-2 ">
        <div className="row g-0">
            <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center">
                <img src={logo} alt="" />
                <p className='fs-3'>SHOPPER</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-5 ">
                <ul className='h-100 list-unstyled  d-flex justify-content-evenly align-items-center fs-5 fw-semibold'>
  <li onClick={()=>{setselectmenu('shop')}} ><Link  style={{color:'black'}}  className='text-decoration-none text-black' to='/'>     Shop{selectmenu === 'shop' && <hr className='pb-1 bg-danger ' />}</Link></li>
  <li onClick={()=>{setselectmenu('men')}}><Link  style={{color:'black'}}  className='text-decoration-none text-black' to='/Men'> Men {selectmenu==='men'&&<hr className='pb-1 bg-danger ' />}</Link></li>
  <li onClick={()=>{setselectmenu('women')}}><Link  style={{color:'black'}}  className='text-decoration-none text-black' to='/Women'> Women{selectmenu==='women'&&<hr className='pb-1 bg-danger ' />} </Link></li>
  <li onClick={()=>{setselectmenu('kid')}}><Link  style={{color:'black'}}  className='text-decoration-none text-black' to='/Kids'> Kids {selectmenu==='kid'&&<hr className='pb-1 bg-danger ' />}</Link></li>
</ul>

            </div>
            <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center align-items-center">
                <Link className='text-decoration-none text-black' to='/login'><button className='btn btn-danger rounded-pill px-4 py-2  me-5'>Login </button></Link>
                <FaShoppingCart size={30}/>

            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar