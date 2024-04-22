import styles from "./mainHeader.module.css";

const MainHeader = ({ lowerHeading, mainHeading, imgSrc }) => {
  return (
    <>
      <header className={styles.mainHeaderContainer}>
        <div className={styles.backgroundImg}>
          <img src={imgSrc} alt="header-pics" loading="lazy" />
        </div>
        <div className={styles.mainHeaderWrapper}>
          <h1>{mainHeading}</h1>
          <h5>{lowerHeading}</h5>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
