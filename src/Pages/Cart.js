import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { remove } from '../Store/cartSlice'

function Cart() {
    const products=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const handleRemove=(item)=>{
        dispatch(remove(item))
       
    }
  return (
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper'>
        {
            products.map((item, index)=>(
                <div className='cartCard'>
                    <img src={item.image} alt=''/>
                    <h5>{item.title}</h5>
                    <p>{item.price}</p>
                    <button className='btn' onClick={()=>handleRemove(item.id)}>Remove</button>
                </div>
            ))
        }

        </div>
    </div>
  )
}

export default Cart