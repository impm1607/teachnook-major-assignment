import { useState, Fragment } from "react";
import styles from "./contactUs.module.css";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import MainHeader from "../../components/Main-Header/MainHeader";
import MapLocation from "../../components/MapLocation/MapLocation";

const ContactUs = () => {
  const [contactInfo] = useState([
    {
      name: "Mail",
      value: "info@rhyno.in",
      icon: <IoMdMail />,
    },
    {
      name: "Mobile",
      value: "+91-9023987528",
      icon: <MdLocalPhone />,
    },
    {
      name: "Location",
      value:
        "Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.",
      icon: <FaLocationDot />,
    },
  ]);

  return (
    <>
      <MainHeader
        lowerHeading={"Ride the Future: Join the Electric Bike Revolution!"}
        mainHeading={"Contact Us"}
        imgSrc={"/images/header-images/contact-us-img.jpg"}
      />

      <section className={styles.contactContainer}>
        <h1>Contact Information</h1>

        <ul>
          {contactInfo?.map((elm, index) => (
            <Fragment key={index}>
              <li>
                <span className={styles.iconCont}>
                  {elm?.icon} {elm?.name}:
                </span>
                <span>{elm?.value}</span>
              </li>
            </Fragment>
          ))}
        </ul>

        <MapLocation />
      </section>
    </>
  );
};

export default ContactUs;
