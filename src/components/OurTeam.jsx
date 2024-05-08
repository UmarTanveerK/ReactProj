import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: { md: "100px", sm: "50px", xs: "0px" },
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box sx={{  mb: "100px", pt: "60px" }}>
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
              maxWidth: "100%",
              textAlign: "left",
            }}
          >
            Our Team
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
              maxWidth: { md: "500px", sm: "350px", xs: "250px" },
              textAlign: "left",
            }}
          >
            A Professional & Care Provider
          </Typography>
        </Box>
        <Box>
          <IconButton
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              bgcolor: "#e12454",
              "&:hover": { bgcolor: "#8fbf69" },
              borderRadius: "50px",
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",

              width: { md: "323px", sm: "150px" },
              height: "67px",
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
              }}
            />
            <Button
              sx={{
                p: "15px 50px 15px 50px",
                color: "white",
                letterSpacing: "1px",
                fontSize: { md: "14px", sm: "12px", xs: "10px" },
              }}
            >
              Make Appointment
            </Button>
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: "flex", sm: "block", xs: "block" },
          mx: { md: "100px", sm: "50px", xs: "0px" },
          pb: "0px",
        }}
      >
        <TeamCard />
        <TeamCard
          image="dentist.webp"
          title="Diconda PIran Will"
          Role="DENTIST"
        />
        <TeamCard
          image="neurologist.webp"
          title="Hulk M. Kenbon"
          Role="NEUROLOGIST"
        />
      </Box>
      <Box
        sx={{
          display: { md: "flex", sm: "block", xs: "block" },
          mx: { md: "100px", sm: "50px", xs: "0px" },
          mt: "-100px",
        }}
      >
        <TeamCard
          image="consultant.webp"
          title="Haliam Z. Dicolaz"
          Role="CONSULTANT"
        />
        <TeamCard
          image="dentist2.webp"
          title="Nicolas D. Case"
          Role="DENTIST"
        />
        <TeamCard
          image="neurologist2.webp"
          title="Phumdon H. Norman"
          Role="NEUROLOGIST"
        />
      </Box>
    </>
  );
};

export default OurTeam;
