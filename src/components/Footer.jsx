import { Grid } from "@mui/material";
import React from "react";
import FooterCard from "./FooterCard";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "rgba(19,35,47,.94)",
        p: "100px",
        position: "relative",
        height: "550px",
      }}
    >
      <FooterCard />
      <Grid sx={{ display: "flex", justifyContent: "right", mr: "100px" }}>
        <FooterMenu />
        <FooterMenu
          menuTitle="Departments"
          menuItems={ [
            "Departments",
            "Our Doctors",
            "News",
            "Shop",
            "Contact Us",
            "Book an Appointment"
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default Footer;
