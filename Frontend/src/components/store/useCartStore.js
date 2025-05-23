import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],
  itemAmount: 0,
  subTotal: 0,
  total: 0,
  deliveryFee: 25,

  //Add to cart
  addToCart: (product, id) => {
    const cart = get().cart;
    const existingItem = cart.find((item) => item.id === id);

    let updateCart = existingItem
      ? cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        )
      : [...cart, { ...product, id, amount: 1 }];

    set({ cart: updateCart });
    get().calculateTotals();
  },

  //Remove From Cart
  removeFromCart: (id) => {
    const updateCart = get().cart.filter((item) => item.id !== id);
    set({ cart: updateCart });
    get().calculateTotals();
  },

  //Increase Amount
  increaseAmount: (id, product) => {
    const cart = get().cart;
    const existingItem = cart.find((item) => item.id === id);

    let updateCart = existingItem
      ? cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        )
      : [...cart, { ...product, id, amount: 1 }];

    set({ cart: updateCart });
    get().calculateTotals();
  },

  //Decrease Amount
  decreaseAmount: (id) => {
    let updateCart = get()
      .cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      )
      .filter((item) => item.amount > 0);
    set({ cart: updateCart });
    get().calculateTotals();
  },

  //ClearCart
  clearCart: () => {
    set({ cart: [], itemAmount: 0, subTotal: 0, total: 0 });
  },

  //Recalculate total
  calculateTotals: () => {
    const cart = get().cart;
    //if cart is empty reset values
    if (cart.length === 0) {
      set({
        itemAmount: 0,
        subTotal: 0,
        total: 0,
        deliveryFee: 25,
      });
      return;
    }
    //calculate the total item count
    const itemAmount = cart.reduce((acc, item) => acc + item.amount, 0);
    //calculate subtotal
    const subTotal = cart.reduce(
      (acc, item) => acc + item.amount * item.price,
      0
    );

    //calculate total
    const deliveryFee = get().deliveryFee;
    const total = subTotal + deliveryFee;
    set({ itemAmount, subTotal, deliveryFee, total });
  },
}));

export default useCartStore;
