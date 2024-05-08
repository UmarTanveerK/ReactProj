import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";

const TopHead = () => {
  return (
    <div>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          bgcolor: "#E3E3E3",
          height: "60px",
          flexDirection: { xs: "row", sm: "row" },
          justifyContent: {
            xs: "space-around",
            sm: "flex-start",
            md: "space-between",
          },
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            color: "#647589",
            alignItems: "center",
            marginBottom: { xs: "10px", sm: 0 },
            ml: "250px",
          }}
        >
          <PhoneEnabledIcon sx={{ fontSize: "medium", mr: "7px" }} />
          <Typography
            sx={{
              fontSize: "14px",
              color: "#647589",
              fontWeight: 400,
              fontStyle: "normal",
              fontFamily: "Rubik,sans-serif",
            }}
          >
            +1 800 833 9780
          </Typography>
          <EmailIcon sx={{ fontSize: "medium", mr: "7px", ml: "50px" }} />
          <Typography
            sx={{
              fontSize: "14px",
              color: "#647589",
              fontWeight: 400,
              fontStyle: "normal",
              fontFamily: "Rubik,sans-serif",
            }}
          >
            info@example.com
          </Typography>
        </Typography>
        <Button
          sx={{
            px: "40px",
            bgcolor: "#e12454",
            borderRadius: "0px",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#fff",
            justifyContent: "flex-end",
            "&:hover": { bgcolor: "#8fbf69" },
            marginTop: { xs: "10px", sm: 0 },
            height: "100%",
            mr: "100px",
          }}
        >
          Make Appointment
        </Button>
      </Box>
    </div>
  );
};

export default TopHead;
