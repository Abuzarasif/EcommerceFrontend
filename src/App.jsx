  import React from 'react'
  import Navbar from './Components/Navbar/Navbar'
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import Store from './Pages/Store'
  import Men from './Pages/Men'
  import Women from './Pages/Women'
  import Kid from './Pages/Kid'
  import Hero from './Pages/Hero'
  import Item from './Pages/Item'
  import requireData from './assets/all_product.js'
  import data from './assets/data.js'
  import newarrival from './assets/new_collections.js'
import New from './Pages/New.jsx'
import Newsletter from './Newsletter.jsx'
import Footer from './Components/Navbar/Footer/Footer.jsx'
import Login from './Components/Navbar/Login/Login.jsx'
  const App = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar />

          <Hero />
          <div className="container ">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 my-0  g-4">
            
          {requireData.map((cval)=>
          <Item id={cval.id} name={cval.name} category={cval.category} image={cval.image} newprice={cval.new_price} oldprice={cval.old_price} />

  )
          }
          </div>
</div>


<div className="container">
    <div className="text-center">
     <h1 className='fs-1 fw-bold'>
      Womens Outfit
      </h1> 
    </div>
<div className="row row-cols-1 row-cols-sm-2  row-cols-md-4">

{
  data.map((cval)=>(
    <Women id={cval.id} name={cval.name} image={cval.image} oldprice={cval.old_price} newprice={cval.new_price} />
  ))
}
</div>

</div>

<div className="container">
  <h1 className='fs-1 fw-bold text-center'>
New Arrivals
  </h1>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
    {newarrival.map((cval)=>(
<New id={cval.id} name={cval.name} image={cval.image} oldprice={cval.old_price} newprice={cval.new_price}/>
    ))}
  </div>
</div>

<Newsletter/>
<Footer/>
<Login/>


          <Routes>
            <Route path='/' element={<Store />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women
            
            />} />
            <Route path='/kid' element={<Kid />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }

  export default App
