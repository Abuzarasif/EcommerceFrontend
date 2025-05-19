import React from 'react'

const New = (props) => {
  return (
    <>
    <div className="col ">
        <div className="card shadow">
            <div className="card-img-top">
<img className='img-fluid' src={props.image} alt="" />
            </div>
            <div className="card-body">
                <h1 className="card-title fs-6 fw-bold">
                    {props.name}
                </h1>
                <h1 className="card-title fs-6 fw-bold">
{props.newprice}
<span className='fw-light text-muted text-decoration-line-through ms-3'>
    {props.oldprice}
</span>

                </h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default New