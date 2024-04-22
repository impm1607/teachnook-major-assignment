import { useState } from "react";
import MainHeader from "../../components/Main-Header/MainHeader";
import EVVsComparisionTable from "../../components/EVs-Comparision/EVVsComparisionTable";

const CompareAll = () => {
  const [images] = useState([
    {
      link: "/images/ev-images/color-change-EVs-2.png",
      name: "Rhyno SE03 Lite",
    },
    {
      link: "/images/ev-images/color-change-EVs-3.png",
      name: "Rhyno SE03",
    },
    {
      link: "/images/ev-images/color-change-EVs-4.png",
      name: "Rhyno SE03 Max",
    },
  ]);

  const [tableData] = useState([
    {
      spec: "Battery",
      val1: ["1.8KwH"],
      val2: ["2.7KwH"],
      val3: ["2.7KwH"],
    },
    {
      spec: "Battery Features",
      val1: ["LFP with 1500 cycles", "Active Balancing", "Waterproof (IP67)"],
      val2: ["LFP with 1500 cycles", "Active Balancing", "Waterproof (IP67)"],
      val3: ["LFP with 1500 cycles", "Active Balancing", "Waterproof (IP67)"],
    },
    {
      spec: "Battery Warranty",
      val1: ["3 years"],
      val2: ["3 years"],
      val3: ["3 years"],
    },
    {
      spec: "Charging time",
      val1: ["3 hours (12A)"],
      val2: ["4 hours (12A)"],
      val3: ["4 hours (12A)"],
    },
    {
      spec: "Motor",
      val1: ["1500W"],
      val2: ["1500W"],
      val3: ["1500W"],
    },
    {
      spec: "Max speed",
      val1: ["55 km/h"],
      val2: ["55 km/h"],
      val3: ["65 km/h"],
    },
    {
      spec: "Warranty on Electronics",
      val1: ["1 year"],
      val2: ["1 year"],
      val3: ["1 year"],
    },
    {
      spec: "Max range (@30km/h)",
      val1: ["100 km"],
      val2: ["150 km"],
      val3: ["120 km"],
    },
    {
      spec: "Max range (@45km/h)",
      val1: ["90 km"],
      val2: ["110 km"],
      val3: ["100 km"],
    },
    {
      spec: "Max range (@full speed)",
      val1: ["60 km"],
      val2: ["90 km"],
      val3: ["80 km"],
    },
    {
      spec: "Other key benefits",
      val1: [
        "Fire-safe Battery",
        "Range Prediction",
        "Comfortable Ride",
        "Stable and Safe",
      ],
      val2: [
        "Fire-safe Battery",
        "Range Prediction",
        "Comfortable Ride",
        "Stable and Safe",
      ],
      val3: [
        "Fire-safe Battery",
        "Range Prediction",
        "Comfortable Ride",
        "Stable and Safe",
      ],
    },
  ]);

  return (
    <>
      <MainHeader
        lowerHeading={"Comparing Our EVs"}
        mainHeading={"Our Products"}
        imgSrc={"/images/ev-images/comapare-all-EVs.png"}
      />

      <EVVsComparisionTable imgSrc={images} tableData={tableData} />
    </>
  );
};

export default CompareAll;
