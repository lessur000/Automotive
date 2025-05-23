import { Link } from "react-router-dom";
import Rusgine from "/Logo.png";
import styles from "../../styles/twStyles";
import {
  GiHamburgerMenu,
  TfiClose,
  MdAccountCircle,
  FaShoppingCart,
} from "../ui/icons";
import useHeader from "../../hooks/useHeader";
import useToggleCart from "../../hooks/useToggleCart";
import SidebarCartMenu from "../product/SidebarCartMenu";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const { isMenuOpen, handleNav, usersToggle, handleUsers } = useHeader();
  const { toggleCart, handleCart } = useToggleCart();
  const { itemAmount } = useCartStore();

  return (
    <header className={`fixed bg-black/50 w-full z-30`}>
      <div className="flex items-center justify-between mx-5">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src={Rusgine}
            alt="Logo"
            className="w-[100px] sm:w-[130px] h-auto"
          />
        </Link>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3 text-white">
          <FaShoppingCart
            size={30}
            onClick={handleCart}
            className="cursor-pointer"
          />
          <MdAccountCircle
            size={30}
            onClick={handleUsers}
            className="cursor-pointer"
          />
          {isMenuOpen ? (
            <TfiClose
              size={30}
              onClick={handleNav}
              className="cursor-pointer"
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              onClick={handleNav}
              className="cursor-pointer"
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 md:gap-7 text-white">
          <nav className="font-semibold lg:text-xl">
            <ul className={`${styles.flexItemCenter} gap-4`}>
              <Link to={"/ShopParts"} className="nav-link">
                Shop Parts
              </Link>
              <Link to={"/AboutUs"} className="nav-link">
                About
              </Link>
              <Link className="nav-link">Contact</Link>
            </ul>
          </nav>

          <div className="relative">
            <FaShoppingCart
              size={30}
              onClick={handleCart}
              className="cursor-pointer"
            />
            <div className="bg-red-500 absolute -top-4 -right-4 rounded-full px-2 text-white">
              {itemAmount}
            </div>
          </div>
          <MdAccountCircle
            size={30}
            onClick={handleUsers}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* SidebarCartMenu */}
      <SidebarCartMenu toggleCart={toggleCart} handleCart={handleCart} />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="fixed left-0 top-0 bg-black w-full h-full z-20">
          <ul className={`${styles.flexCol} gap-4 text-white mt-20`}>
            <Link to={"/ShopParts"}>Shop Parts</Link>
            <Link to={"/AboutUs"}>About</Link>
            <Link>Contact</Link>
          </ul>
        </nav>
      )}

      {/* Users */}
      {usersToggle && (
        <div className="fixed right-10 top-23 bg-white  z-20">
          <ul
            className={`${styles.flexCol} gap-4 text-black py-3 px-5 rounded`}
          >
            <Link
              to={"/Login"}
              className="active:bg-blue-500 active:text-white rounded py-2 px-3"
            >
              Login
            </Link>
            <Link
              to={"/Signup"}
              className="active:bg-blue-500 active:text-white rounded py-2 px-3"
            >
              Signup
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
