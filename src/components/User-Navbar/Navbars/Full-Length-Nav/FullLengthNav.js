import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";

import styles from "./fullLengthNav.module.css";

const FullLengthNav = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  const mouseEnter = () => {
    setActiveSubMenu(true);
  };

  const mouseLeave = () => {
    setActiveSubMenu(false);
  };

  return (
    <>
      <nav className={styles.navFlex}>
        <NavLink to={"/"}>
          <img
            height={"80px"}
            width={"170px"}
            src="/images/logo/Rhyno-Logo-Italic-Transperant.png"
            alt="logo"
          />
        </NavLink>

        <ul className={styles.navItems}>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#252525" : "",
                borderBottom: isActive ? "2px solid #252525" : "",
              })}
              to={"/about"}>
              About Us
            </NavLink>
          </li>

          <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <NavLink className={styles.subMenuContainer}>
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
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className={`${styles.subMenu} ${
                activeSubMenu ? styles.isactive : styles.inactive
              }`}>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#252525" : "",
                    borderBottom: isActive ? "2px solid #252525" : "",
                  })}
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
              to={"/contact"}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#252525" : "",
                borderBottom: isActive ? "2px solid #252525" : "",
              })}
              to={"/prebook"}>
              Pre-Book
            </NavLink>
          </li>
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
        </ul>
      </nav>
    </>
  );
};

export default FullLengthNav;
