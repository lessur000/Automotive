import { useState } from "react"

const useToggleCart = () => {
  const [toggleCart, setToggleCart] = useState(false);

  const handleCart = () => {
    setToggleCart(!toggleCart);
  }

  return {handleCart, toggleCart}
}

export default useToggleCart