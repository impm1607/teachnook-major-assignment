import { Fragment } from "react";
import { Button } from "@mui/material";
import EVsColourChange from "../EVs-Colour-Change/EVsColourChange";

import styles from "./evContent.module.css";

const EVsContent = ({ para1, para2, para3, details, imgSrc }) => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imgWrapper}>
          <EVsColourChange imgSrc={imgSrc} />
        </div>

        <div className={styles.flexWrapper}>
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>
        </div>
      </div>

      <div className={styles.specificationContainer}>
        <h1>Specifications</h1>

        <ul>
          {details?.map((elm, index) => (
            <li key={index}>
              <h5>{elm?.specification}: </h5>

              {elm?.value?.map((el, idx) => (
                <Fragment key={idx}>
                  {idx === elm?.value?.length - 1 ? <p>{el}</p> : <p>{el},</p>}
                </Fragment>
              ))}
            </li>
          ))}
        </ul>

        <div className={styles.btnContainer}>
          <Button variant="contained">Buy Now</Button>
        </div>
      </div>
    </section>
  );
};

export default EVsContent;
