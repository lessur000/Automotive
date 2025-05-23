import useCartStore from "../store/useCartStore";
import CartProducts from "./CartProducts";
import { TfiClose } from "../ui/icons";
import { motion as Motion } from "framer-motion";
import { sidebarNav } from "../../utils/Motion";

const SidebarCartMenu = ({ handleCart, toggleCart }) => {
  const { cart, total, subTotal, deliveryFee, itemAmount } = useCartStore();
  return (
    <>
      {toggleCart && (
        <Motion.div
          initial="hidden"
          animate={toggleCart ? "open" : "hidden"}
          variants={sidebarNav("right")}
          className="fixed right-0 top-0 h-full  w-full sm:w-[500px] p-5 bg-white shadow-lg overflow-x-auto"
        >
          <div className="flex justify-between items-center">
            <div className="relative">
              <div className="p-4 font-bold text-lg text-black">Your Cart</div>
              <div className="bg-red-500 absolute top-1 right-0 rounded-full px-2 text-white">
                {itemAmount}
              </div>
            </div>
            <TfiClose size={30} className="fill-black" onClick={handleCart} />
          </div>

          {/* Add to cart items here  */}
          <div className="flex flex-col gap-y-2 h-[520px] lg:h-[720px] overflow-y-auto overflow-x-hidden">
            {cart.map((product) => (
              <CartProducts product={product} key={product.id} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="border border-gray-500/50 rounded-xl mt-20 p-10">
            <div className="space-y-5">
              <h1 className="font-bold text-3xl">Order Summary</h1>
              <div className="flex items-center justify-between">
                <h6 className="text-[#000000]/60 text-xl font-semibold">
                  Subtotal
                </h6>
                <span className="font-bold">{subTotal.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between">
                <h6 className="font-semibold text-xl text-[#000000]/60">
                  Delivery Fee
                </h6>
                <span className="font-bold">{deliveryFee}</span>
              </div>
              <div className="border-t-2 border-gray-500/50" />
              <div className="flex items-center justify-between">
                <h6 className="font-semibold text-xl text-[#000000]/60">
                  Total:
                </h6>
                <span className="font-bold">{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </Motion.div>
      )}
    </>
  );
};

export default SidebarCartMenu;
