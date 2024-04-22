import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {
  GiCarWheel,
  GiCarBattery,
  GiPathDistance,
  GiAchievement,
} from "react-icons/gi";
import { BsTools } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./rotatingCarousel.module.css";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <IoIosArrowForward
      className={`${className} ${styles.nextArrow}`}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <IoIosArrowBack
      className={`${className} ${styles.prevArrow}`}
      onClick={onClick}
    />
  );
}

const RotatingCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [rotationAngle, setRotationAngle] = useState(0);

  const totalSlides = 5;

  useEffect(() => {
    const angle = (360 / totalSlides) * currentSlide;
    setRotationAngle(angle);
  }, [currentSlide, totalSlides]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    fade: true,

    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {slides?.map((elm, index) => (
              <div key={index}>
                <h1>{elm?.name}</h1>
                <p>{elm?.value}</p>
              </div>
            ))}
          </Slider>
        </div>

        <div className={styles.icon}>
          <ul
            style={{
              transform: `rotate(${rotationAngle}deg)`,
              transition: "transform 0.3s ease-in-out",
            }}>
            {[0, 1, 2, 3, 4].map((index) => (
              <li
                key={index}
                className={
                  currentSlide === index ? styles.active : styles.inActive
                }>
                {currentSlide === index && (
                  <>
                    {index === 0 && <GiCarBattery />}
                    {index === 1 && <GiCarWheel />}
                    {index === 2 && <GiPathDistance />}
                    {index === 3 && <GiAchievement />}
                    {index === 4 && <BsTools />}
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.heading}>
            <h1>Our SOP</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default RotatingCarousel;
