import { useTypewriter, Cursor } from "react-simple-typewriter";

import styles from "./homeHeader.module.css";

const HomeHeader = ({ lowerHeading, changingText, imgSrc }) => {
  const [text] = useTypewriter({
    words: changingText,
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <header className={styles.mainHeaderContainer}>
        <div className={styles.backgroundImg}>
          <img src={imgSrc} alt="header-pics" loading="lazy" />
        </div>
        <div className={styles.mainHeaderWrapper}>
          <h5>
            {lowerHeading} <span>{text}</span>
            <span style={{ color: "#ededed" }}>
              <Cursor cursorStyle="|" />
            </span>
          </h5>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
