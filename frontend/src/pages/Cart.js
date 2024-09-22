import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Cart({ cartItems, setCartItems }) {

  const [complete, setComplete] = useState(false);

  function increment(item){
    const getItem = cartItems.map((i) =>{
      if(i.product._id == item.product._id && i.qty < item.product.stock){
        i.qty++;
      }
      return i;
    })
    setCartItems(getItem);

  }

  function decrement(item){
    const getItem = cartItems.map((i) =>{
      if(item.qty > 1){
        i.qty--;
      }
      return i;
    })
    setCartItems(getItem);
  }

  function removeCart(item){
    const getItem = cartItems.filter((i) =>{
      if(i.product._id !== item.product._id){
        return i;
      }
    })

    setCartItems(getItem);
  }

  function placeOrderHandler(){
    fetch('https://mini-ecommerce-backend-three.vercel.app/order', {
      method:"POST",
      headers:{'Content-Type' : 'application/json'},
      body:JSON.stringify(cartItems)
    })
    .then(() =>{
      setCartItems([]);
      setComplete(true);
      toast.success('Order Placed Successfully');
    })
  }

  let total = cartItems.reduce((acc, item) => (
    acc + (item.product.price * item.qty)
  ), 0)

  return cartItems.length? <div className="container container-fluid" id="cartPageBG">

    <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>

    <div className="row d-flex justify-content-between">
      <div className="col-12 col-lg-8">

        {cartItems.map((item) => (
          <Fragment>
            <hr />
            <div className="cart-item">
              <div className="row">

                <div className="col-6 col-md-4 col-lg-3">
                  <img src={item.product.images[0].image} alt={item.product.name} height="90" width="115"/>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <Link to={'/product/' + item.product._id}>{item.product.description}</Link>
                </div>


                <div className="col-6 col-md-4 col-lg-2 mt-4 mt-lg-0">
                  <p id="card_item_price">${item.product.price}</p>
                </div>

                <div className="col-6 col-md-4 col-lg-3 mt-4 mt-lg-0">
                  <div className="stockCounter d-inline">
                    
                    <span className="btn btn-danger minus" onClick={() => decrement(item)}>-</span>

                    <input type="number" className="form-control count d-inline" value={item.qty} readOnly />

                    <span className="btn btn-primary plus" onClick={() => increment(item)}>+</span>
                  </div>
                </div>

                <div className="col-6 col-md-1 col-lg-1 mt-4 mt-lg-0">
                  <i id="delete_cart_item" onClick={() => removeCart(item)} className="fa fa-trash btn btn-danger"></i>
                </div>

              </div>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="col-12 col-lg-3 my-4">
        <div id="order_summary">
          <h4>Order Summary</h4>
          <hr />
          <p>Subtotal:  
            <span className="order-summary-values">{cartItems.reduce((acc, item) => {return acc + item.qty}, 0)} (Units)</span>
          </p>
          <p>Est. total: 
            <span className="order-summary-values">${Number(total).toFixed(2)}</span>
          </p>

          <hr />
          <button id="checkout_btn" onClick={placeOrderHandler} className="btn btn-primary btn-block">Place Order</button>
        </div>
      </div>
    </div>
  </div>: (!complete? <h1 className="mt-5">Your cart is empty!</h1>:<Fragment>
    <h1 className="mt-5">Order Success</h1>
    <video src="/animations/order placed.mp4" autoPlay={true}></video>
    <p>Your order has been placed Successfully..</p>
  </Fragment>)
}