// // I WANT TO CHANGE ZUSTAND STATE MANAGEMENT

// import { createContext, useEffect, useState } from "react";

// // Create the context
//  const ProductContext = createContext();
 

// export const ProductContextProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/products");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log("Fetched data:", data); 
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <ProductContext.Provider value={products}>
//       {children}
//     </ProductContext.Provider>
//   );
// };


