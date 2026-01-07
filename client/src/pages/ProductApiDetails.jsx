
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const ProductApiDetails = () => {

//     const {_id} = useParams()
//     console.log("uuuuuuuu",_id)

//     const [product,setProduct] = useState(null)
//     const [loading,setLoading] = useState(true)


//     useEffect(()=> {

//         const fetchById =  async () =>{
//             const response  = await fetch(`http://localhost:9090/api/productApi/productCheck/${_id}`)

//             const result = await response.json()
//             console.log("rrrrrrrrrrrrr",result)
//             setProduct(result.product)
//             setLoading(false)
//         }
//          fetchById()
//     },[_id])

//     if(loading){
//         return <p>Loading.........!!!!</p>
//     }

//   return (
//     <>
    
//     <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      
//       <img
//         src={`http://localhost:9090/assests/images/${product.avatar}`}
//         alt={product.brand}
//         className="rounded-lg shadow"
//       />

//       <div>
//         <h1 className="text-2xl font-bold">{product.brand}</h1>
//         <p className="text-gray-600">{product.description}</p>

//         <p className="text-xl font-semibold mt-3">
//           ₹{product.price}
//         </p>
//       </div>

//     </div>

//     </>
//   )
// }

// export default ProductApiDetails

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductApiDetails = () => {
  const { _id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchById = async () => {
      try {
        const response = await fetch(
          `https://e-commerce-1-w203.onrender.com/api/productApi/productCheck/${_id}`
        );
        const result = await response.json();
        setProduct(result.product);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchById();
  }, [_id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Image Section */}
        <div className="w-full h-[350px] md:h-[450px] bg-gray-100 rounded-lg flex items-center justify-center">
          <img
            src={`https://e-commerce-1-w203.onrender.com/assests/images/${product.avatar}`}
            alt={product.brand}
            className="w-full h-full object-contain p-4"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            {product.brand}
          </h1>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-green-600">
            ₹{product.price}
          </p>

          <button className="mt-4 w-full md:w-auto bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductApiDetails;
