import { useState } from "react";

const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [usersToggle, setUsersToggle] = useState(false);
  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUsers = () => {
    setUsersToggle(!usersToggle);
  };

  return { isMenuOpen, handleNav, usersToggle, handleUsers };
};

export default useHeader;
