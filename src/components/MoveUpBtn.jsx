import React from "react";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const MoveUpBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{ position: "fixed", bottom:{ md:"70px" , sm:"70px" ,xs:"70px"}, right:{ md:"50px" , sm:"50px" ,xs:"50px"}, zIndex: "1000" }}
    >
      <IconButton
        sx={{
          bgcolor: "#e12454",
          "&:hover": {
            bgcolor: "#8fbf69",
          },
          color: "black",
          borderRadius: "50%",
          p: "0px",
          ml: "30px",
          transition: "box-shadow 0.1s",

          width: { md: "50px", sm: "40px", xs: "30px" },
          height: { md: "50px", sm: "40px", xs: "30px" },
        }}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};

export default MoveUpBtn;
