import { Grid, Typography } from "@mui/material";
import React from "react";

const FooterMenu = ({
  menuTitle = "Departments",
  menuItems = [
    "Surgery and Radiology",
    "Family Medicine",
    "Women's Health",
    "Optician",
    "Pediatrics",
    "Dermatology",
  ],
}) => {
  return (
    <Grid sx={{ display: "block", mx: "35px" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: "24px",
          color: "#fff",
          mb: "46px",
          fontWeight: "600",
          lineHeight: "1.2",
        }}
      >
        {menuTitle}
      </Typography>
      <ul>
        {menuItems.map((item, index) => (
          <li
            style={{
              marginBottom: "21px",
              fontWeight: "600",
              color: "#647589",
              fontSize: "16px",
              listStyle: "none",
              textAlign: "left",
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default FooterMenu;
