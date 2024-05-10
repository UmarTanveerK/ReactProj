import { Grid, Box, Typography, IconButton, Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import BlogCard from "./BlogCard";
import BlogBarCard from "./BlogBarCard";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const News = () => {
  return (
    <Grid sx={{ px: "100px", position: "relative" ,pb:"100px" , height:"1300px" }}>
      <Grid
        sx={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: "100px", pt: "60px" }}>
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
            News
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
            Get Every Single Updates Here.
          </Typography>
        </Box>
        <Box>
          <IconButton
            sx={{
              mt: "50px",
              display: { md: "flex", sm: "none", xs: "none" },
              justifyContent: "center",
              bgcolor: "#e12454",
              "&:hover": {
                bgcolor: "#8fbf69",
                boxShadow: "0 8px 16px 0 rgba(143, 191, 105, 0.2) ",
                alignSelf: "center",
              },
              borderRadius: "50px",
              boxShadow: "0 4px 8px 0  rgba(225,36,84,.2)",
              width: { lg: "190px", md: "190px", sm: "190px", xs: "180px" },
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
                height: { lg: "13px", md: "13px", sm: "13px", xs: "10px" },
                width: { lg: "13px", md: "13px", sm: "13px", xs: "10px" },
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
              OUR BLOG
            </Button>
          </IconButton>
        </Box>
      </Grid>
      <Grid sx={{ display: { lg: "flex", md: "block" } }}>
        <Grid sx={{ display: "flex" }}>
          <BlogCard sx={{ mx: "10px" }} />
          <BlogCard image="Blog2.webp" sx={{ mx: "10px" }} />
        </Grid>
        <Grid sx={{ display: "block", border: "2px solid #edf3f7" }}>
          <BlogBarCard />
          <BlogBarCard />
          <BlogBarCard />
          <BlogBarCard />
        </Grid>
      </Grid>
      <IconButton
        sx={{
            position: "absolute",
            bottom: "0px",
            right: "150px",
          mt: "50px",
          display: { md: "flex", sm: "none", xs: "none" },
          justifyContent: "flex-end",
          bgcolor: "#8fbf69",
          "&:hover": {
            bgcolor: "#e12454",
            boxShadow: "0 8px 16px 0  ",
            alignSelf: "center",
          },
          borderRadius: "50px",
          boxShadow: "0 4px 8px 0 rgba(143, 191, 105, 0.2) ",
          width: { lg: "190px", md: "190px", sm: "190px", xs: "180px" },
          height: { lg: "60px", md: "60px", sm: "60px", xs: "55px" },
          margin: "50px auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "white",
            color: "black",
            border: "solid white 20px",
            borderRadius: "50%",
            height: { lg: "13px", md: "13px", sm: "13px", xs: "10px" },
            width: { lg: "13px", md: "13px", sm: "13px", xs: "10px" },
          }}
        >
          <PhoneEnabledIcon
            sx={{
              fontSize: "28px",
            }}
          />
        </Box>
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
          Make Call
        </Button>
      </IconButton>
    </Grid>
  );
};

export default News;
