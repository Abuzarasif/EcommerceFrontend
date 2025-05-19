        import React from 'react'
        const Item = props => {
        return (
            <>
            <div className="col ">
                <div  className='card  shadow     '>
                <img src={props.image} className='card-imge-top img-fluid' />
                <div className='card-body'>
                    {/* <p>{props.id}</p> */}
                    <p  className='card-title fw-bolder text-dark'>{props.name} </p>
                    {/* <p className='card-title'> {props.category}</p> */}
                    <p className='card-title fw-bold'>{props.newprice} 
                    <span className='text-decoration-line-through fw-light text-muted ms-3'>{props.oldprice}</span>


                    </p>
                </div>
                </div>


    </div>
                
            </>
        )
        }
        export default Item
