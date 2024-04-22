import { IconButton } from "@mui/material";
import { FaApple } from "react-icons/fa6";
import { FcAndroidOs } from "react-icons/fc";

import MainHeader from "../../components/Main-Header/MainHeader";

import styles from "./rentals.module.css";

const Rentals = () => {
  return (
    <>
      <MainHeader
        lowerHeading={"Ride Rhyno: Go Electric, Go Green!"}
        mainHeading={"Rentals"}
        imgSrc={"/images/header-images/rentals-header.jpg"}
      />

      <section className={styles.rentalContainer}>
        <h1>Rental Options</h1>

        <div className={styles.imgContentContainer}>
          <img src="/images/ev-images/rentals-image.png" alt="rentals-pics" />

          <div className={styles.contentContainer}>
            <p>
              Explore the roars of <span>Rhyno</span> at your own pace with our
              rental options! Test the waters with our flexible rental model,{" "}
              <span>available for a week or a month,</span> allowing you to
              experience the Rhyno firsthand before committing. Simply{" "}
              <span>visit</span> our <span>authorized dealerships</span> to
              unlock this opportunity.
            </p>

            <p>
              Additionally, we're <span>redefining campus commuting</span> with
              our rental fleet <span>tailored for college students.</span>{" "}
              Navigate your daily commute effortlessly by{" "}
              <span>renting Rhyno</span> vehicles on an{" "}
              <span>hourly basis</span> through our{" "}
              <span>user-friendly mobile app.</span> Embrace the freedom to ride
              and explore a new dimension in sustainable and convenient
              transportation.
            </p>

            <div className={styles.downloadContainer}>
              <h5>Download our rental app:- </h5>

              <div className={styles.iconContainer}>
                <div className={styles.icons}>
                  <IconButton color="inherit">
                    <FaApple />
                  </IconButton>
                  <p>iOS</p>
                </div>

                <div className={styles.icons}>
                  <IconButton color="success">
                    <FcAndroidOs />
                  </IconButton>
                  <p>Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rentals;
