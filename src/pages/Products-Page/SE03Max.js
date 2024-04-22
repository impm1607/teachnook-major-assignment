import { useState } from "react";

import MainHeader from "../../components/Main-Header/MainHeader";
import EVsContent from "../../components/EVs-Display-Content/EVsContent";

const SE03Max = () => {
  const [tableData] = useState([
    {
      specification: "Battery",
      value: ["2.7Kwh"],
    },
    {
      specification: "Battery features",
      value: ["LFP with 1500 cycles", "Active Balancing", "Waterproof (IP67)"],
    },
    { specification: "Battery warranty", value: ["3 years"] },
    { specification: "Charging time", value: ["4 hours (12A)"] },
    { specification: "Motor", value: ["2000W"] },
    { specification: "Max speed", value: ["65 km/h"] },
    { specification: "Warranty on electronics", value: ["1 year"] },
    { specification: "Max range (@30km/h)", value: ["120 km"] },
    { specification: "Max range (@45km/h)", value: ["100 km"] },
    { specification: "Max range (@full speed)", value: ["80 km"] },
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
        lowerHeading={"Rhyno SE03 Max: Reliable Travel Companion"}
        mainHeading={"SE03 Max"}
        imgSrc={"/images/ev-images/se03-max.png"}
      />

      <EVsContent
        imgSrc={images}
        para1={
          "This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge."
        }
        para2={
          "While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches. "
        }
        details={tableData}
      />
    </>
  );
};

export default SE03Max;
