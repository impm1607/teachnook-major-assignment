import { useState } from "react";
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

import styles from "./normalCarousel.module.css";

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

const NormalCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [icons] = useState([
    <GiCarBattery />,
    <GiCarWheel />,
    <GiPathDistance />,
    <GiAchievement />,
    <BsTools />,
  ]);

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
        <h1>Our SOP</h1>

        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {slides?.map((elm, index) => (
              <div key={index} className={styles.contentWrapper}>
                <span>{icons[index]}</span>
                <h1>{elm?.name}</h1>
                <p>{elm?.value}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default NormalCarousel;
