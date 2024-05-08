import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: { md: "flex", sm: "block" },
          my: "100px",
          mx: { md: "100px", sm: "0px" },
        }}
      >
        <Box
          sx={{
            minWidth: { lg: "50%", md: "35%" },
            minHeight: { lg: "50%", md: "35%" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "100%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            <img src="icm.png" alt="" height="210px" width="210px" />
          </Box>
          <img
            src="ab.webp"
            alt=""
            height="100%"
            width="100%"
            style={{ boxShadow: "0 16px 16px 0 rgba(0,0,0,0.2)" }}
          />
        </Box>
        <Box
          sx={{
            mx: "50px",
            my: "50px",
            width: { lg: "100%", md: "80%" },
            height: { lg: "100%", md: "80%" },
          }}
        >
          <Typography
            sx={{
              mb: "27px",
              fontSize: "18px",
              fontFamily: "Rubik,sans-serif",
              fontWeight: "600",
              color: "#647589",
              textAlign: "left",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "60px", sm: "50px", xs: "35px" },
              lineHeight: "1.22",
              letterSpacing: "-.3px",
              fontFamily: "Poppins,sans-serif",
              fontWeight: "600",
              color: "#223645",
              textAlign: "left",
              mb: "27px",
            }}
          >
            Short Story About MediDove Clinic.
          </Typography>
          <Box sx={{ width: { md: "510px", sm: "400px" }, mb: "40px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "26px",
                color: "#647589",
                mb: "15px",
                textAlign: "left",
              }}
            >
              {" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia.
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "26px",
                color: "#647589",
                mb: "15px",
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", sm: "column", xs: "column" },
            }}
          >
            <img src="av.webp" alt="" height="80px" width="80px" />
            <Box sx={{ mt: "15px", ml: "25px" }}>
              <Typography
                sx={{
                  mb: "13px",
                  fontSize: "20px",
                  fontFamily: "Poppins,sans-serif",
                  color: "#223645",
                  fontWeight: "600",
                  lineHeight: "1.1",
                  textAlign: "left",
                }}
              >
                Rosalina D. Williamson
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins,sans-serif",
                  color: "#e12454",
                  fontWeight: "600",
                  lineHeight: "1.1",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  textAlign: "left",
                }}
              >
                FOUNDER
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
