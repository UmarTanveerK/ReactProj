import { Box, Typography, Button, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Consultant = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"slide1.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(19,35,47,.94)",
          width: "100%",
          pt: "120px",
          pb: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#899dab",
              mb: "28px",
              fontSize: { lg: "18px", md: "18px", sm: "18px", xs: "14px" },
              fontWeight: "600",
              mt: "0",
              lineHeight: "1.1",
              display: "block",
            }}
          >
            Stay healthy & strong to enjoy life
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { lg: "60px", md: "40px", sm: "60px", xs: "40px" },
              mb: "18px",
              lineHeight: "1.2",
              color: "#fff",
              letterSpacing: "-.3px",
              mt: "0",
              fontWeight: "600",
              display: "block",
              width: { lg: "1000px", md: "800px" },
              margin: "0 auto",
            }}
          >
            Trust Us To Be There To Help All & Make Things Well Again.
          </Typography>
          <IconButton
            sx={{
              mt: "50px",
              display: "flex",
              justifyContent: "center",
              bgcolor: "#8fbf69",
              "&:hover": {
                bgcolor: "#e12454",
                boxShadow: "0 8px 16px 0 rgba(225,36,84,.2)",
              },
              borderRadius: "50px",
              boxShadow: "0 4px 8px 0 rgba(143, 191, 105, 0.2)",
              width: { lg: "300px", md: "300px", sm: "300px", xs: "180px" },
              height: { lg: "60px", md: "60px", sm: "60px", xs: "55px" },
              margin: "50px auto",
            }}
          >
            <AddIcon
              sx={{
                bgcolor: "white",
                color: "black",
                fontSize: "medium",
                border: "solid white 20px",
                borderRadius: "50%",
                p: "0px",
                height: { lg: "15px", md: "15px", sm: "15px", xs: "10px" },
                width: { lg: "15px", md: "15px", sm: "15px", xs: "10px" },
              }}
            />
            <Button
              sx={{
                p: "15px 50px",
                color: "white",
                letterSpacing: "1px",
                fontSize: { md: "16px", sm: "14px", xs: "10px" },
                height: "60px",
                whiteSpace: "nowrap",
              }}
            >
              Get A Consultant
            </Button>
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Consultant;
