import React from 'react'

const Newsletter = () => {
  return (
    <>
    <div style={{backgroundColor:"#FBE1FE"}} className="container  text-center my-5 py-5">
        <h1>
            Get Exclusive offers on your Email
        </h1>
        <p>
            Subscribe to our news letter and stay updated 
        </p>
        <div className='d-flex   justify-content-center '>
           <div className='w-50  position-relative'>
            <input type="text" className='form-control  p-1  p-sm-2 '  placeholder='Your Email id' />
            <button className='btn  rounded-end bg-dark  text-white position-absolute end-0 top-0 px-sm-2 px-1   py-sm-2 py-1 ' >Subscribe</button>
        </div>
        </div>
        

    </div>
    </>
  )
}

export default Newsletter

// import React from 'react';

// const Newsletter = () => {
//   return (
//     <>
//       <div style={{ backgroundColor: "#FBE1FE" }} className="container text-center my-5 py-5">
//         <h1>Get Exclusive offers on your Email</h1>
//         <p>Subscribe to our newsletter and stay updated</p>
        
//         <div className="d-flex justify-content-center">
//           <div className="position-relative w-50">
//             <input
//               type="text"
//               className="form-control p-3 pe-5" // extra padding on end to avoid overlapping button
//               placeholder="Enter your email"
//             />
//             <button
//               className="btn btn-dark position-absolute top-0 end-0 h-100 rounded-end"
//               style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Newsletter;
    