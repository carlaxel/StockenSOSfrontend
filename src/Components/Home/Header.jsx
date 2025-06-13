import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import styles from "./Header.module.css";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: "16px 48px",
  fontSize: "1.8rem",
  fontWeight: 300,
  borderRadius: "10px",
  textTransform: "none",
  backgroundColor: "rgba(0, 194, 219, 1)",
  color: "white",
  minWidth: "300px",
  "&:hover": {
    backgroundColor: 'rgba(0, 174, 199, 1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  },
  '@media (max-width: 600px)': {
    fontSize: '1.8rem',
    minWidth: '65%',
    fontWeight: '300',
  },
  transition: 'all 0.3s ease',
}));

function Header(props) {
  const [allowReg, setAllowReg] = useState(true);

  useEffect(() => {
    let today = new Date();
    let regFinished = new Date("Jul 17 2025 23:59:59 GMT+0200");
    if (today > regFinished) {
      setAllowReg(false);
    }
  }, []);
  
  return (
    <div className={`${styles.Header} ${styles.shadow}`}>
      <div className={`${styles.HeaderBox}`}>
        <h1 className={`${styles.H1}`}>Stocken SOS 2025</h1>
        
        <div className={styles.anmalanDiv}>
          {allowReg ? (
            <Link to="/registration" style={{ textDecoration: 'none' }}>
              <StyledButton variant="contained" disableElevation>
                Anmälan 2025
              </StyledButton>
            </Link>
          ) : (
            <StyledButton variant="contained" disabled disableElevation>
              Anmälan 2025
            </StyledButton>
          )}
          <h4 className={styles.H4}>19 Juli 13:00</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
