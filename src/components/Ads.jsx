import { Box, Typography, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const Ads = () => {
  return (
    <>
      
        <Box sx={{ display:{ md:"flex" , sm:"block" , xs:"block"}, justifyContent:"space-between", backgroundImage: `url(${"bgblue.jpg"})`,
          px: {lg:"100px" , md:"30px", sm:"0px" , xs:"0px"},
          py: "100px", }}>
          <Box sx={{ textAlign: "left" , mb:{md:"0px" , sm:"200px" , xs:"200px"}}}>
            <Typography
              variant="h5"
              sx={{
                color: "#899dab",
                mb: "28px",
                fontSize: {lg:"18px" , md:"14px" , sm:"18px" , xs:"14px"},
                fontWeight: "600",
                mt: "0",
                lineHeight: "1.1",
                display: "block",
              }}
            >
              We are available 24/7
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize:{lg:"60px" , md:"40px" , sm:"60px" , xs:"40px"},
                mb: "18px",
                lineHeight: "1.2",
                color: "#fff",
                letterSpacing: "-.3px",
                mt: "0",
                fontWeight: "600",
                display: "block",
                width:{ lg:"500px" , md:"350px"},
              }}
            >
              We Always Ready For A Challenge.
            </Typography>
            <IconButton
              sx={{
                mt: "50px",
                display: "flex",
                bgcolor: "#e12454",
                "&:hover": { bgcolor: "#8fbf69" , boxShadow: "0 4px 8px 0 rgba(143, 191, 105, 0.2)" },
                borderRadius: "50px",
                boxShadow: "0 8px 16px 0 rgba(225,36,84,.2)",

                width: { lg: "323px", md: "180px" , sm:"323px" ,xs:"180px" },
                height: {lg:"67px" , md:"55px", sm:"67px", xs:"55px"},
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
                  height: {lg:"20px" , md:"10px", sm:"20px", xs:"10px"},
                  width: { lg: "20px", md: "10px" , sm:"20px" ,xs:"10px" }
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
          <Box>
            <Box sx={{ display: {md:"flex" , sm:"flex", xs:"block"}, width: "500px", mb: "60px" }}>
              <Typography
                variant="h1"
                sx={{
                  color: "#8fb569",
                  width: "140px",
                  mr: "95px",
                  fontSize: "60px",
                  lineHeight: "1.22",
                  letterSpacing: "-.3px",
                  fontWeight: "600",
                  display: "block",
                }}
              >
                1M+
              </Typography>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Person2Icon sx={{ fontSize: "28px", color: "#fff" }} />{" "}
                  <Typography
                    variant="h5"
                    sx={{
                      width: "100%",
                      display: "inline-block",
                      color: "#fff",
                      mb: "15px",
                      fontSize: "18px",
                      fontWeight: "600",
                      lineHeight: "1.1",
                      mt: "0",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    Satisfied Patients{" "}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      width:{ md:"100%",sm:"100%",xs:"30%"},
                      display:{ md:"inline-block",sm:"inline-block",xs:"block"},
                      color: "#899dab",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "26px",
                      mb: "15px",
                      mt: "0",
                      textAlign: "left",
                    }}
                  >
                    Consectetur Lorem ipsum dolor sit amet, adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: {md:"flex" , sm:"flex", xs:"block"}, width: "500px" }}>
              <Typography
                variant="h1"
                sx={{
                  color: "#8fb569",
                  width: "140px",
                  mr: "80px",
                  fontSize: "60px",
                  lineHeight: "1.22",
                  letterSpacing: "-.3px",
                  fontWeight: "600",
                  display: "block",
                }}
              >
                100M+
              </Typography>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <ThumbUpOffAltIcon sx={{ fontSize: "28px", color: "#fff" }} />{" "}
                  <Typography
                    variant="h5"
                    sx={{
                      width: "100%",
                      display: "inline-block",
                      color: "#fff",
                      mb: "15px",
                      fontSize: "18px",
                      fontWeight: "600",
                      lineHeight: "1.1",
                      mt: "0",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    World Awards{" "}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      width:{ md:"100%",sm:"100%",xs:"30%"},
                      display:{ md:"inline-block",sm:"inline-block",xs:"block"},
                      color: "#899dab",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "26px",
                      mb: "15px",
                      mt: "0",
                      textAlign: "left",
                    }}
                  >
                    Consectetur Lorem ipsum dolor sit amet, adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
    </>
  );
};

export default Ads;
