import { useState } from "react";

import MainHeader from "../../components/Main-Header/MainHeader";
import EVsContent from "../../components/EVs-Display-Content/EVsContent";

const SE03 = () => {
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
    { specification: "Motor", value: ["1500W"] },
    { specification: "Max speed", value: ["55 km/h"] },
    { specification: "Warranty on electronics", value: ["1 year"] },
    { specification: "Max range (@30km/h)", value: ["150 km"] },
    { specification: "Max range (@45km/h)", value: ["110 km"] },
    { specification: "Max range (@full speed)", value: ["90 km"] },
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
        lowerHeading={"Rhyno SE03: 2000W Thrill Ride"}
        mainHeading={"SE03"}
        imgSrc={"/images/ev-images/se03.png"}
      />

      <EVsContent
        imgSrc={images}
        para1={
          "Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge."
        }
        para2={
          "Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno."
        }
        para3={
          "Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!"
        }
        details={tableData}
      />
    </>
  );
};

export default SE03;
