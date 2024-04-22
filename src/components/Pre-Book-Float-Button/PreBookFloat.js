import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FaCartShopping } from "react-icons/fa6";

import styles from "./preBookFloat.module.css";

const PreBookFloat = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.btnContainer}>
        <IconButton
          onClick={() => navigate("/prebook")}
          color="inherit"
          size="large">
          <FaCartShopping />
        </IconButton>
      </div>
    </>
  );
};

export default PreBookFloat;
