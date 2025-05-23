import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://automotive-o3rx.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err))
      .finally(() => setLoading(false)); // Mark loading as complete
  }, []);


  return { products, loading};
};

export default useFetchProducts;
