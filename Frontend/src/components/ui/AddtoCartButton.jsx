import { useState } from "react";
import useCartStore from "../store/useCartStore";

const AddtoCartButton = ({ product }) => {
  const [clicked, setClicked] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleClicked = () => {
    addToCart(product, product.id);
    setClicked(true);

    setTimeout(() => {
        setClicked(false);
      }, 100);
  };
  return (
    <button
      onClick={handleClicked}
      className={`py-2 px-3 rounded-xl cursor-pointer ${
        clicked ? "bg-blue-500 text-white" : "bg-white text-black"
      }`}
    >
        Add to Cart
    </button>
  );
};

export default AddtoCartButton;
