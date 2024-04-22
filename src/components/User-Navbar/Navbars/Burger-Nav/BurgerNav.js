import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import styles from "./burgerNav.module.css";

const BurgerNav = () => {
  const [openBurgerNav, setOpenBurgerNav] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  return (
    <>
      <nav className={styles.navFlex}>
        <NavLink to={"/"}>
          <img
            height={"80px"}
            width={"170px"}
            src="/images/logo/Rhyno-Logo-Italic-Transperant.png"
            alt="logo-dhramshala"
          />
        </NavLink>

        <IconButton color="warning" onClick={() => setOpenBurgerNav(true)}>
          <GiHamburgerMenu className={styles.burgerIcon} />
        </IconButton>
      </nav>

      <section className={openBurgerNav ? styles.navContent : ""}>
        <ul
          className={`${styles.navWrapper} ${
            openBurgerNav ? styles.isactive : styles.inactive
          }`}>
          <IconButton
            className={styles.crossBtn}
            color="error"
            onClick={() => setOpenBurgerNav(false)}>
            <RxCross1 />
          </IconButton>

          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#252525" : "",
                borderBottom: isActive ? "2px solid #252525" : "",
              })}
              to={"/about"}
              onClick={() => setOpenBurgerNav(false)}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              className={styles.subMenuContainer}
              onClick={() => setActiveSubMenu(!activeSubMenu)}>
              Products
              <FaChevronDown
                className={`${
                  activeSubMenu
                    ? styles.svgStyleActive
                    : styles.svgStyleInActive
                }`}
              />
            </NavLink>

            <ul
              className={`${styles.subMenu} ${
                activeSubMenu ? styles.isSubActive : styles.isSubInactive
              }`}>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#252525" : "",
                    borderBottom: isActive ? "2px solid #252525" : "",
                  })}
                  onClick={() => setOpenBurgerNav(false)}
                  to={"/products/se03-lite"}>
                  SE03 Lite
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#252525" : "",
                    borderBottom: isActive ? "2px solid #252525" : "",
                  })}
                  onClick={() => setOpenBurgerNav(false)}
                  to={"/products/se03"}>
                  SE03{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#252525" : "",
                    borderBottom: isActive ? "2px solid #252525" : "",
                  })}
                  onClick={() => setOpenBurgerNav(false)}
                  to={"/products/se03-max"}>
                  SE03 Max
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#252525" : "",
                    borderBottom: isActive ? "2px solid #252525" : "",
                  })}
                  onClick={() => setOpenBurgerNav(false)}
                  to={"/products/compare-all"}>
                  Compare All EVs
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#252525" : "",
                borderBottom: isActive ? "2px solid #252525" : "",
              })}
              to={"/contact"}
              onClick={() => setOpenBurgerNav(false)}>
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#252525" : "",
                borderBottom: isActive ? "2px solid #252525" : "",
              })}
              to={"/prebook"}
              onClick={() => setOpenBurgerNav(false)}>
              Pre-Book
            </NavLink>
          </li>

          <div className={styles.iconCont}>
            <li>
              <NavLink
                target="_blank"
                to={"https://www.instagram.com/rhyno.in?igsh=OXA5MHJiZnRiMjU3"}>
                <GrInstagram className={styles.icon} />
              </NavLink>
            </li>
            <li>
              <NavLink
                target="_blank"
                to={"https://www.linkedin.com/company/rhyno-wheels/"}>
                <GrLinkedin className={styles.icon} />
              </NavLink>
            </li>
          </div>
        </ul>
      </section>
    </>
  );
};

export default BurgerNav;
