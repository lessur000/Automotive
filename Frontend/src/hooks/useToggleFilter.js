import { useState } from "react";

const useToggleFilter = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => setIsToggle((prev) => !prev);
  return { isToggle, toggle };
};

export default useToggleFilter;
