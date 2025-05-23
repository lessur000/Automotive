import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err))
      .finally(() => setLoading(false)); // Mark loading as complete
  }, []);


  return { products, loading};
};

export default useFetchProducts;
