import useCartStore from "../store/useCartStore";
import { FaPlus, FaMinus, FaTrash } from "../ui/icons";

const CartProducts = ({ product }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useCartStore();

  //destructure product
  const { image, name, id, price, amount } = product;

  return (
    <div className="flex items-center gap-4 mb-4 p-4 border-b border-gray-300 rounded-3xl shadow-xl">
      <img
        src={`http://localhost:3000${image}`}
        alt={name}
        className="w-20 h-20 md:w-50 md:h-50 object-cover rounded"
      />
      <div className="flex-1">
        <h4>{name}</h4>
        <div className="flex items-center justify-between">
          <span className="font-light">{price}</span>
          <FaTrash size={20} onClick={() => removeFromCart(id)} className="fill-red-500" />
        </div>
        <div className=" flex items-center gap-5">
          <FaMinus onClick={() => decreaseAmount(id)}/>
          {amount}
          <FaPlus onClick={() => increaseAmount(id)}/>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
