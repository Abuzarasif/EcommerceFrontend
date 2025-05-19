import React from 'react'

const Women = props => {
  return (
    <>
      <div className='col'>
        <div className='card shadow ' id={props.id}>
          <div className='card-img-top'>
            <img className='img-fluid' src={props.image} alt='' />
          </div>
          <div className='card-body '>
            <h1 className='card-title fs-6 fw-bold'>{props.name}</h1>
            <h1 className='card-title fs-6 fw-bold'>${props.newprice}
            <span className='card-title  ms-3 text-decoration-line-through text-muted fw-lighter'>${props.oldprice}</span>

            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Women
