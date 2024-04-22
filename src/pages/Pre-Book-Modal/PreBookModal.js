import { useState } from "react";
import MainHeader from "../../components/Main-Header/MainHeader";
import PreBookData from "../../components/Pre-Book-Data/PreBookData";

const PreBookModal = () => {
  return (
    <>
      <MainHeader
        lowerHeading={
          "Pre Book your electric bikes and join the revolution with us!"
        }
        mainHeading={"Pre Book"}
        imgSrc={"/images/header-images/prebook-header-image.jpg"}
      />

      <PreBookData />
    </>
  );
};

export default PreBookModal;
