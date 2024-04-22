import { Fragment, useState } from "react";
import { IconButton } from "@mui/material";
import styles from "./evsColorChange.module.css";

const EVsColourChange = ({ imgSrc }) => {
  const [displayImage, setDisplayImage] = useState(0);

  return (
    <div className={styles.colorChangerContainer}>
      <div className={styles.imgContainer}>
        {imgSrc?.map((_, index) => (
          <Fragment className={styles.imgContainer} key={index}>
            {index === displayImage && (
              <img
                className={styles.imgStyles}
                src={imgSrc[index]}
                alt="color-change-images"
              />
            )}
          </Fragment>
        ))}
      </div>

      <div className={styles.colorsContainer}>
        <IconButton onClick={() => setDisplayImage(0)}>
          <div className={styles.red}></div>
        </IconButton>

        <IconButton onClick={() => setDisplayImage(1)}>
          <div className={styles.blue}></div>
        </IconButton>

        <IconButton onClick={() => setDisplayImage(2)}>
          <div className={styles.golden}></div>
        </IconButton>

        <IconButton onClick={() => setDisplayImage(3)}>
          <div className={styles.black}></div>
        </IconButton>
      </div>
    </div>
  );
};

export default EVsColourChange;
