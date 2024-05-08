import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import PlanCard from "./PlanCard";

const OurPlans = () => {
  const [selectedButton, setSelectedButton] = useState("monthly");

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };
  return (
    <div style={{ backgroundColor: "#f4f9fc" }}>
      <Box
        sx={{
          display: {md:"flex" , sm:"block", xs:"block"},
          justifyContent: "space-between",
          px:{md: "100px" , sm:"100px" , xs:"0px"},
          py: "80px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <img src="nrs.webp" alt="" />
          <br></br>
          <img src="NL.png" alt="" />
          <Typography
            sx={{
              position: "absolute",
              top: "50px",
              mb: "28px",
              fontSize: "18px",
              fontFamily: "Rubik,sans-seri",
              fontWeight: "600",
              color: "#647589",
              width: "100%",
              textAlign: "left",
            }}
          >
            Our Plans
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              top: "100px",
              mb: "18px",
              lineHeight: "1.2",
              fontSize: { md: "60px", sm: "40px", xs: "30px" },
              letterSpacing: "-.3px",
              fontFamily: "Poppins,sans-serif",
              fontWeight: "600",
              color: "#223645",
              width:{ sm:"500px" , xs:"200px"},
              textAlign: "left",
            }}
          >
            Pricing & Plans
          </Typography>
        </Box>
        <Box sx={{ justifyContent: "center", justifyItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent:{md:"normal",sm:"space-between",xs:"space-between"},
              border: "2px solid #eae7ff",
              borderRadius: "40px",
              bgcolor: "#fff",
              mt:{sm:"50px" , xs:"50px"}
            }}
          >
            <Button
              onClick={() => handleButtonClick("monthly")}
              sx={{
                borderRadius: "40px",
                color: selectedButton === "monthly" ? "#fff" : "#223645",
                p:{ lg:"30px 50px" , md:"30px 50px" , sm:"30px 50px" , xs:"30px 0px"},
                lineHeight: "1",
                fontSize:{md:"14px" , sm:"14px" , xs:"10px"},
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: {md:"600" , sm:"600" , xs:"400"},
                background: selectedButton === "monthly" ? "#e12454" : "",
                "&:hover": {
                  background:
                    selectedButton === "monthly" ? "#e12454" : "transparent",
                },
              }}
            >
              Monthly
            </Button>
            <Button
              onClick={() => handleButtonClick("yearly")}
              sx={{
                borderRadius: "40px",
                color: selectedButton === "yearly" ? "#fff" : "#223645",
                p:{ lg:"30px 50px" , md:"30px 50px" , sm:"30px 50px" , xs:"30px 0px"},
                lineHeight: "1",
                fontSize:{md:"14px" , sm:"14px" , xs:"10px"},
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: {md:"600" , sm:"600" , xs:"400"},
                background: selectedButton === "yearly" ? "#e12454" : "",
                "&:hover": {
                  background:
                    selectedButton === "yearly" ? "#e12454" : "transparent",
                },
              }}
            >
              Yearly
            </Button>
          </Box>
        </Box>

        
      </Box>
      {selectedButton === "monthly" && (
        <div className="Monthly">
          <Box sx={{ display:{lg:"flex" , md:"block" , sm:"block"}, px:{lg: "100px" , md:"100px",sm:"0px",xs:"0px"}, pb: "80px" }}>
            <PlanCard />
            <PlanCard image="adv.webp" title="Advanced" price="599.00" />
            <PlanCard image="advntg.webp" title="Advantage" price="999.00" />
          </Box>
        </div>
      )}

      {selectedButton === "yearly" && (
        <div className="Yearly">
        <Box sx={{ display:{lg:"flex" , md:"block" , sm:"block"},px:{lg: "100px" , md:"100px",sm:"0px",xs:"0px"}, pb: "80px" }}>
          <PlanCard />
          <PlanCard image="adv.webp" title="Advanced" price="599.00" />
          <PlanCard image="advntg.webp" title="Advantage" price="999.00" />
        </Box>
      </div>
      )}
    </div>
  );
};

export default OurPlans;