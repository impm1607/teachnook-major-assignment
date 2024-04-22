import useScreenResize from "../../hooks/useScreenResize";
import RotatingCarousel from "./Rotating-Carousel/RotatingCarousel";
import NormalCarousel from "./Normal-Carousel/NormalCarousel";

const CarouselsHome = ({ slides }) => {
  const screenSize = useScreenResize();

  return (
    <>
      {screenSize?.width > 729 ? (
        <RotatingCarousel slides={slides} />
      ) : (
        <NormalCarousel slides={slides} />
      )}
    </>
  );
};

export default CarouselsHome;
