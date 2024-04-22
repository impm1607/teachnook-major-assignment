import { useState } from "react";

import MainHeader from "../../components/Main-Header/MainHeader";
import EVsContent from "../../components/EVs-Display-Content/EVsContent";

const SE03Lite = () => {
  const [tableData] = useState([
    {
      specification: "Battery",
      value: ["1.8Kwh"],
    },
    {
      specification: "Battery features",
      value: ["LFP with 1500 cycles", "Active Balancing", "Waterproof (IP67)"],
    },
    { specification: "Battery warranty", value: ["3 years"] },
    { specification: "Charging time", value: ["3 hours (12A)"] },
    { specification: "Motor", value: ["1500W"] },
    { specification: "Max speed", value: ["55 km/h"] },
    { specification: "Warranty on electronics", value: ["1 year"] },
    { specification: "Max range (@30km/h)", value: ["100 km"] },
    { specification: "Max range (@45km/h)", value: ["90 km"] },
    { specification: "Max range (@full speed)", value: ["70 km"] },
    {
      specification: "Other key benefits",
      value: [
        "Fire-safe Battery",
        "Range prediction",
        "Comfortable ride",
        "Stable and safe",
      ],
    },
  ]);

  const [images] = useState([
    "/images/ev-images/color-change-EVs-1.png",
    "/images/ev-images/color-change-EVs-2.png",
    "/images/ev-images/color-change-EVs-3.png",
    "/images/ev-images/color-change-EVs-4.png",
  ]);

  return (
    <>
      <MainHeader
        lowerHeading={"Rhyno SE03 Lite: Compact Efficiency"}
        mainHeading={"SE03 Lite"}
        imgSrc={"/images/ev-images/se03-lite.png"}
      />

      <EVsContent
        imgSrc={images}
        para1={
          "This Rhyno is an entry-level variant tailored for medium-power, single-person usage. This machine maintains the Rhyno standards with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno but is designed with a smaller battery and motor."
        }
        para2={
          "Offering the same elegance, comfort, and style, this variant is tailored for those seeking an easy-on-the-pocket solution without sacrificing essential benefits. With an 80-100 km range on a single charge and a top speed of 55 km/h, the Rhyno SE03 Lite ensures effortless commuting."
        }
        para3={
          "If you're in pursuit of thrills or frequently ride with a pillion, we recommend exploring our higher-power variants. Here are some technical details for the SE03 Lite that you might find valuable"
        }
        details={tableData}
      />
    </>
  );
};

export default SE03Lite;
