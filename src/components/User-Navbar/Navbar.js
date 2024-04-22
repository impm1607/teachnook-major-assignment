import useScreenResize from "../../hooks/useScreenResize";

import FullLengthNav from "./Navbars/Full-Length-Nav/FullLengthNav";
import BurgerNav from "./Navbars/Burger-Nav/BurgerNav";

import styles from "./navbar.module.css";

const Navbar = () => {
  const screenSize = useScreenResize();

  return (
    <>
      <header className={styles.navContainer}>
        {screenSize?.width > 880 ? <FullLengthNav /> : <BurgerNav />}
      </header>
    </>
  );
};

export default Navbar;
