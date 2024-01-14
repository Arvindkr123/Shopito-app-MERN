import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <h2>
          Shop<span>Ito</span>
        </h2>
      </Link>
    </div>
  );
};

const activeLink = ({ isActive }) => {
  return isActive ? styles.active : "";
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  const cart = (
    <div className={styles.cart}>
      <Link to="/cart">
        Cart
        <FaShoppingCart size={20} />
        <p>0</p>
      </Link>
    </div>
  );
  return (
    <header>
      <div className={styles.header}>
        <Logo />
        <nav className={showMenu ? styles["show-nav"] : styles["hide-nav"]}>
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : styles["nav-wrapper"]
            }
            onClick={hideMenu}
          ></div>
          <ul>
            <li className={styles["logo-mobile"]}>
              <Logo />
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to={"/shop"} className={activeLink}>
                Shop
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <NavLink to="login" className={activeLink}>
                Login
              </NavLink>
              <NavLink to="register" className={activeLink}>
                Register
              </NavLink>
              <NavLink to="order-history" className={activeLink}>
                My Order
              </NavLink>
            </span>
            <>{cart}</>
          </div>
        </nav>
        {/*[-][-] response for other screen start [-][-]  */}
        <div className={styles["menu-icon"]} onClick={toggleMenu}>
          {cart}
          <HiOutlineMenuAlt3 size={20} />
        </div>
        {/* [-][-]  response for other screen end [-][-]  */}
      </div>
    </header>
  );
};

export default Header;
