import React,{useState,useEffect} from 'react'
import { add } from '../Store/cartSlice'
import { useDispatch } from 'react-redux'


const Product = () => {
    const[product,setProduct]=useState([0])
    const dispatch=useDispatch();
 

    useEffect(()=>{
        
        
        const fetchProduct=async()=>{
            const  res= await fetch('https://fakestoreapi.com/products')
        
          
             const data=await res.json();
             console.log(data)
             setProduct(data)
        }
        fetchProduct()
        
    },[])
    const handleAdd=(item)=>{
         dispatch(add(item))

    }
  return (
    <div className='ProductsWrapper'>
        {
            product.map((item,index)=>(

    
               < div className='card' key={index}>
               <img src={item.image} alt=''  className=''/>
               <h4>{item.title}</h4>
               <h5>{item.price}</h5>

               <button className='btn' onClick={()=>handleAdd(item)}>Add to Cart</button>
               
               </div>
            ))
        }
    </div>
  )
}

export default Product