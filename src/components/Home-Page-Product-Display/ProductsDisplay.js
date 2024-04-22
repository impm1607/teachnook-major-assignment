import styles from "./productsDisplay.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const ProductsDisplay = ({ imageData }) => {
  const navigate = useNavigate()
  const redirectpage = (link) => {
    navigate(link)
  }
  return (
    <>
      <div>
        {imageData?.map((elm, index) => (
          <div
            key={index}
            className={
              index % 2 !== 0
                ? styles.productContainerReverse
                : styles.productContainer
            }>
            <div className={styles.imgContainer}>
              <img loading="lazy" src={elm?.link} alt={`${elm?.name} pics`} />
            </div>

            <div className={styles.dataContainer}>
              <h1>{elm?.name}</h1>

              <p>{elm?.brief}</p>

              {/* <NavLink to={elm?.redirect}>Learn more</NavLink> */}
              <Button variant="contained" onClick={()=>redirectpage(elm?.redirect)}> Learn more </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsDisplay;
