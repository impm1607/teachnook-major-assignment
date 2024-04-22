import { NavLink } from "react-router-dom";
import { GrInstagram, GrLinkedin } from "react-icons/gr";

import styles from "./userFooter.module.css";

const UserFooter = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.flexWrapper}>
          <h1>Policies</h1>

          <div className={styles.contentContainer}>
            <h5>Privacy Policy</h5>
            <h5>Refund Policy</h5>
            <h5>Website Policy</h5>
          </div>
        </div>

        <div className={styles.flexWrapper}>
          <h1>Quick Links</h1>

          <div className={styles.contentContainer}>
            <NavLink to={"/contact"}>
              <h5>Contact Us</h5>
            </NavLink>

            <NavLink
              target="_blank"
              to={"https://www.linkedin.com/company/rhyno-wheels/"}>
              <h5>Career</h5>
            </NavLink>

            <NavLink to={"/rentals"}>
              <h5>Rentals</h5>
            </NavLink>
          </div>
        </div>

        <div className={styles.flexWrapper}>
          <h1>Our Products</h1>

          <div className={styles.contentContainer}>
            <NavLink to={"/products/se03-lite"}>
              <h5>SE03-Lite</h5>
            </NavLink>

            <NavLink to={"/products/se03"}>
              <h5>SE03</h5>
            </NavLink>

            <NavLink to={"/products/se03-max"}>
              <h5>SE03-Max</h5>
            </NavLink>

            <NavLink to={"/products/compare-all"}>
              <h5>Compare All</h5>
            </NavLink>
          </div>
        </div>

        <div className={styles.flexWrapper}>
          <h1>Connect With Us</h1>

          <div className={styles.iconBtn}>
            <NavLink
              target="_blank"
              to={"https://www.instagram.com/rhyno.in?igsh=OXA5MHJiZnRiMjU3"}>
              <GrInstagram />
            </NavLink>

            <NavLink
              target="_blank"
              to={"https://www.linkedin.com/company/rhyno-wheels/"}>
              <GrLinkedin />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFooter;
