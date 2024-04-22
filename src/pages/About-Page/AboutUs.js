import MainHeader from "../../components/Main-Header/MainHeader";
import styles from "./aboutsUs.module.css";

const AboutUs = () => {
  return (
    <>
      <MainHeader
        lowerHeading={"Rhyno EVs: Our Story and Mission"}
        mainHeading={"About Us"}
        imgSrc={"/images/header-images/about-us-header.jpg"}
      />

      <section className={styles.aboutContainer}>
        <h1>Rhyno EVs: Our Vision and Mission</h1>

        <div className={styles.aboutWrapper}>
          <div className={styles.aboutContent}>
            <p>
              <span>Established in 2019 </span> by an automotive engineer with a
              vision for <span> sustainable and robust mobility solutions</span>
              , Rhyno EV is not just a company; it's a collective effort of a
              dynamic team of young individuals passionately driving{" "}
              <span>innovation</span> in the{" "}
              <span>electric vehicle industry</span>. We believe in engineering
              solutions that solve problems.
            </p>

            <p>
              With <span>our first product</span>, we've taken a bold step to
              create something more than just a vehicle;{" "}
              <span>
                it's a unique experience of elegance, comfort and style
              </span>
              , addressing the pitfalls of conventional electric scooters. Our
              design{" "}
              <span>
                prioritizes safety, eliminating concerns of fires and ensuring a
                longer battery lifespan
              </span>{" "}
              with our battery technology. Perfectly suited for fleet operators,
              especially in tourist-centric locations like Goa, our rugged yet
              aesthetically appealing scooters are engineered for longevity and
              reliability. Join us as we pioneer a new era in sustainable and
              dependable electric transportation.
            </p>
          </div>

          <div className={styles.imgContainer}>
            <img
              src="/images/logo/about-us-bottom-img.png"
              alt="about-us-rhyno-evs"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
