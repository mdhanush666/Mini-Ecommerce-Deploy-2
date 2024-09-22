import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import {toast} from 'react-toastify';


export default function ProductDetail({cartItems, setCartItems}){

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  let {id} = useParams();

  useEffect(() =>{
    fetch('https://mini-ecommerce-backend-three.vercel.app/product/'+id)
    .then(res => res.json())
    .then(res => setProduct(res.product))
  },[]);

  const addToCart = () =>{
    const itemExist = cartItems.find((item) => item.product._id == product._id);

    if(!itemExist){     
      const newItem = {product,qty};      
      setCartItems((state) => [...state, newItem]);
      toast.success(`Item Successfully Added to Cart`);
    }
    else{
      toast.info('Item is already added to the card!')
    }   
  } 

  const increment = () =>{
    if(qty < product.stock){
      setQty(qty+1)
    }
    else{
      toast.error('you have selected the maximum stock');
    }
  }

  const decrement = () =>{
    qty>1? setQty(qty-1):setQty(1)
  }

  return product && <div className="container container-fluid">
          <div className="row f-flex justify-content-around">
            
              <div className="col-12 col-md-6 col-lg-4 img-fluid" id="product_image">
                  <img src={product.images[0].image} className="d-flex mx-auto img-fluid" alt="sdf" />
              </div>

              <div className="col-12 col-lg-6 mt-5">
                  <h3>{product.name}</h3>
                  <p id="product_id">Product # {product._id}</p>

                  <hr />

                  <div className="rating-outer">
                      <div className="rating-inner" 
                          style={{width:`${(product.ratings / 5) * 100}%`}}>
                      </div>
                  </div>
            

                  <hr />

                  <p id="product_price">${product.price}</p>
                  <div className="stockCounter d-inline">
                      <span className="btn btn-danger minus" onClick={decrement}>-</span>

                      <input type="number" className="form-control count d-inline" value={qty} readOnly />

                      <span className="btn btn-primary plus" onClick={increment}>+</span>
                  </div>
                  <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" onClick={addToCart} disabled={product.stock == 0} >Add to Cart</button>

                  <hr />

                  <p>Status: 
                    <span id="stock_status" 
                          className={product.stock > 0? 'text-success' : 'text-danger'}>{product.stock > 0? 'In Stock' : 'Out of Stock'}
                    </span>
                    {` (${product.stock} available)`}
                  </p>

                  <hr />

                  <h4 className="mt-2">Description:</h4>
                  <p>{product.description}</p>
                  <hr />
                  <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
          
                  <div className="rating w-50"></div>
              
              </div>

          </div>
  </div>
}