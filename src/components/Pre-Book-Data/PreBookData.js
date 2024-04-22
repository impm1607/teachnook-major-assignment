import { useState } from "react";

import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import styles from "./preBook.module.css";

const PreBookData = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    email: "",
    evType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.prebookContainer}>
        <h1>Choose Your EV</h1>

        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <FormControl fullWidth required>
            <InputLabel id="demo-simple-select-label">
              Select EV Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="evType"
              value={data?.evType}
              label="Select EV Type"
              onChange={handleChange}>
              <MenuItem value={""}>Select Options</MenuItem>
              <MenuItem value={"SE03 Lite"}>SE03 Lite</MenuItem>
              <MenuItem value={"SE03"}>SE03</MenuItem>
              <MenuItem value={"SE03 Max"}>SE03 Max</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            name="name"
            onChange={handleChange}
            value={data?.name}
            fullWidth
            required
          />

          <TextField
            id="outlined-basic"
            label="Enter Your Address"
            variant="outlined"
            name="address"
            onChange={handleChange}
            value={data?.address}
            fullWidth
            required
          />

          <TextField
            id="outlined-basic"
            label="Enter Your Email ID"
            variant="outlined"
            name="email"
            type="email"
            onChange={handleChange}
            value={data?.email}
            fullWidth
            required
          />

          <Button variant="contained" type="submit">
            Check Out
          </Button>
        </form>
      </div>
    </>
  );
};

export default PreBookData;
