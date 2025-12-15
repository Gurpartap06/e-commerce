// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import './Cart.css';
// import { clearCart, removeFromCart } from '../slice/Cartslice';
// import address from './address';

// const Cart = () => {
//   const cartItems = useSelector(state => state.cart.items);
//   useEffect(() => {
//     // localStorage.setItem("cart",JSON.stringify(cartItems))
//     localStorage.setItem("cart", JSON.stringify(cartItems))

//   }, [cartItems])

//   const dispatch = useDispatch()




//   return (
//     <>
//       <div className="product-container">
//         {cartItems.length === 0 ? (
//           <p className="text-center text-xl">🛒 Your cart is empty.</p>
//         ) : (
//           cartItems.map((item) => (
//             <div key={item.id} className="product-card">
//               <img src={item.img} alt={item.title} className="product-image" />

//               <div className="product-details">
//                 <div className="product-header">
//                   <h3>Bewakoof®</h3>
//                 </div>

//                 <p className="description">{item.title}</p>
//                 <p>Size: <strong>{item.selectedSize}</strong></p>
//                 <p>Quantity: <strong>{item.quantity}</strong></p>
//                 <p className="shipping">🚚 Ships in <strong>1-2 days</strong></p>
//               </div>

//               <div className="sectionprice-">
//                 <p className="price">₹{699 * item.quantity}</p>
//                 <p className="savings">You saved ₹{(2199 - 699) * item.quantity}</p> <br />


//                 <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-10" onClick={() => {
//                   dispatch(removeFromCart(item.id))
//                 }}>Remove</button>

//               </div>



//               <div className='mt-30'>
//                 <Link
//                   to="/address"
//                   className=" mt-28 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
//                    font-medium rounded-lg text-sm px-5 py-3 me-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//                 >Shipping Details
//                 </Link>
//               </div>


//             </div>
//           ))
//         )}



//       </div>
//       {/* <div>
//     <button className='border-2 bg-blue-500 shadow-lg shadow-blue-500/50' onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
//     </div> */}

//       <div className="flex justify-center my-6">
//         <button
//           className="px-6 py-2 border-2 border-blue-600 bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:bg-blue-600 transition duration-300"
//           onClick={() => dispatch(clearCart())}
//         >
//           Clear Cart
//         </button>


//       </div>



//     </>
//   );
// };

// export default Cart;


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../slice/Cartslice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-xl">🛒 Your cart is empty.</p>
      </div>
    );
  }

  return (
    <>
      {/* Cart Items */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-6 border rounded-lg p-4 shadow-sm"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-40 h-auto object-cover rounded"
            />

            {/* Details */}
            <div className="flex-1 space-y-2">
              <h3 className="font-bold text-lg">Bewakoof®</h3>
              <p className="text-sm">{item.title}</p>
              <p className="text-sm">
                Size: <strong>{item.selectedSize}</strong>
              </p>
              <p className="text-sm">
                Quantity: <strong>{item.quantity}</strong>
              </p>
              <p className="text-sm">🚚 Ships in <strong>1-2 days</strong></p>
            </div>

            {/* Price & Actions */}
            <div className="flex flex-col justify-between items-start md:items-end gap-3">
              <div>
                <p className="text-lg font-semibold">
                  ₹{699 * item.quantity}
                </p>
                <p className="text-sm text-green-600">
                  You saved ₹{(2199 - 699) * item.quantity}
                </p>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="px-4 py-2 text-sm rounded bg-gray-800 text-white hover:bg-gray-900"
              >
                Remove
              </button>

              <Link
                to="/address"
                className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Shipping Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Clear Cart */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => dispatch(clearCart())}
          className="px-6 py-2 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition"
        >
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default Cart;
