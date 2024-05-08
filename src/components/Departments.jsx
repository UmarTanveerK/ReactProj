import { Box, Typography } from "@mui/material";
import React from "react";
import DepCard from "./DepCard";

const Departments = () => {
  return (
    <div style={{ backgroundColor: "#f4f9fc" }}>
      <Box sx={{ position: "relative", mb: "100px", pt: "60px" }}>
        <img src="nrs.webp" alt="" />
        <br></br>
        <img src="NL.png" alt="" style={{ marginTop: "60px" }} />
        <Typography
          sx={{
            position: "absolute",
            top: "110px",
            mb: "28px",
            fontSize: "18px",
            fontFamily: "Rubik,sans-seri",
            fontWeight: "600",
            color: "#647589",
            width: "100%",
            textAlign: "center",
          }}
        >
          Departments
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            top: "160px",
            mb: "18px",
            lineHeight: "1.2",
            fontSize: { md: "60px", sm: "40px", xs: "30px" },
            letterSpacing: "-.3px",
            fontFamily: "Poppins,sans-serif",
            fontWeight: "600",
            color: "#223645",
            width: "100%",
            textAlign: "center",
          }}
        >
          Managed Your Heathcare Services
        </Typography>
      </Box>
      <Box
        sx={{
          display: { md: "flex", sm: "block", xs: "block" },
          mx: { md: "100px", sm: "50px", xs: "0px" },
        }}
      >
        <DepCard />
        <DepCard image="card2.webp" title=" Dental Care" />
        <DepCard image="card3.webp" title="Eye Care" />
      </Box>
      <Box
        sx={{
          display: { md: "flex", sm: "block", xs: "block" },
          mx: { md: "100px", sm: "50px", xs: "0px" },
          pb: "80px",
        }}
      >
        <DepCard image="card4.webp" title="Blood Cancer" />
        <DepCard image="card5.webp" title="Neurology Sargery" />
        <DepCard image="card6.webp" title="Allergic Issue" />
      </Box>
    </div>
  );
};

export default Departments;
