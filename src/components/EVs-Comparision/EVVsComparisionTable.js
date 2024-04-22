import { Button } from "@mui/material";
import styles from "./evsComparisionTable.module.css";

const EVVsComparisionTable = ({ imgSrc, tableData }) => {
  return (
    <>
      <section className={styles.tableContainer}>
        <div className={styles.headingCont}>
          <h1>Comparison Table</h1>
          <h5>
            Explore our range of electric vehicles to find your perfect match!
          </h5>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Specification</th>
                {imgSrc?.map((elm, index) => (
                  <th key={index}>
                    <span>
                      <div className={styles.imgContainer}>
                        <img
                          loading="lazy"
                          src={elm?.link}
                          alt={`${elm?.name} pics`}
                        />
                      </div>

                      <div>{elm?.name}</div>

                      <div className={styles.btnContainer}>
                        <Button variant="contained">Buy Now</Button>
                      </div>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tableData?.map((elm, index) => (
                <tr key={index}>
                  <td>{elm?.spec}</td>
                  <td>
                    {elm?.val1?.map((el, idx) => (
                      <p key={idx}>{el}</p>
                    ))}
                  </td>
                  <td>
                    {elm?.val2?.map((el, idx) => (
                      <p key={idx}>{el}</p>
                    ))}
                  </td>
                  <td>
                    {elm?.val3?.map((el, idx) => (
                      <p key={idx}>{el}</p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default EVVsComparisionTable;
