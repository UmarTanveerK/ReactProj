import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css"; // Import your custom styles
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VideoModal from "./VideoModal";

SwiperCore.use([Navigation]);

const Slider = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Set showTypography to true after a delay to trigger animation
    const timeout = setTimeout(() => {
      setShowTypography(true);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Initialize Swiper after component mounts
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.init();
    }
  }, []);

  const goToNextSlide = () => {
    const swiper = swiperRef.current.swiper;
    if (swiper.activeIndex === swiper.slides.length - 1) {
      // If on last slide, go to first slide
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    const swiper = swiperRef.current.swiper;
    if (swiper.activeIndex === 0) {
      // If on first slide, go to last slide
      swiper.slideTo(swiper.slides.length - 1);
    } else {
      swiper.slidePrev();
    }
  };

  return (
    <div
      className="swiper-container"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        className="mySwiper"
        navigation={false}
      >
        <SwiperSlide style={{ position: "relative" }}>
          <Box sx={{ width: "100%" }}>
            <img src="slide1.jpg" alt="" style={{ height: "700px" }} />
          </Box>
          <Box>
            <Typography
              className={showTypography ? "typographyAnimation" : ""}
              sx={{
                position: "absolute",
                top: "165px",
                left: { md: "100px", sm: "10px", xs: "10px" },
                zIndex: 100,
                color: "#647589",
                backgroundColor: "transparent",
                padding: "10px",
                fontSize: { md: "18px", sm: "16px", xs: "14px" },
                fontFamily: "Rubik,sans-serif",
                fontWeight: "bold",
                animation: "fadeInUp 0.5s ease-in-out forwards",
                animationDelay: "0.2s",
                textAlign: { md: "left", sm: "left", xs: "center" },
              }}
            >
              We are here for your care.
            </Typography>
            <Typography
              className={showTypography ? "typographyAnimation" : ""}
              sx={{
                position: "absolute",
                top: "200px",
                left: { md: "100px", sm: "10px", xs: "10px" },
                zIndex: 100,
                color: "#223645",
                letterSpacing: "-2.3px",
                backgroundColor: "transparent",
                padding: "10px",
                fontSize: { md: "80px", sm: "50px", xs: "30px" },
                fontFamily: "Rubik,sans-serif",
                fontWeight: 600,
                width: { md: "600px", sm: "500px" },
                textAlign: { md: "left", sm: "left", xs: "center" },
                animation: "fadeInUp 0.5s ease-in-out forwards",
                animationDelay: "0.4s",
              }}
            >
              Best Care & Better Doctor.
            </Typography>
            <Typography
              className={showTypography ? "typographyAnimation" : ""}
              sx={{
                position: "absolute",
                top: "450px",
                left: { md: "100px", sm: "10px", xs: "10px" },
                zIndex: 100,
                color: "#647589",
                backgroundColor: "transparent",
                padding: "10px",
                fontSize: { md: "14px", sm: "12px", xs: "10px" },
                fontFamily: "Rubik,sans-serif",
                fontWeight: 400,
                lineHeight: "26px",
                width: { md: "550px", sm: "400px" },
                textAlign: { md: "left", sm: "left", xs: "center" },
                animation: "fadeInUp 0.5s ease-in-out forwards",
                animationDelay: "0.6s",
                mt: { md: "0px", sm: "0px", xs: "-150px" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box
              className={showTypography ? "typographyAnimation" : ""}
              sx={{
                display: "flex",
                justifyContent: "left",
                position: "absolute",
                top: "550px",
                left: { md: "100px", sm: "10px", xs: "10px" },
                zIndex: 100,
                animation: "fadeInUp 0.5s ease-in-out forwards",
                animationDelay: "0.8s",

                height: { md: "70px", sm: "60px", xs: "60px" },
                mt: { md: "0px", sm: "0px", xs: "-150px" },
              }}
            >
              <IconButton
                sx={{
                  bgcolor: "#e12454",
                  "&:hover": { bgcolor: "#8fbf69" },
                  borderRadius: "50px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",

                  width: { md: "78%", sm: "200px", xs: "160px" },
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
                    fontSize: { md: "16px", sm: "14px", xs: "10px" },
                  }}
                >
                  Make Appointment
                </Button>
              </IconButton>
              <IconButton
                onClick={() => setModalIsOpen(true)}
                sx={{
                  bgcolor: "#8fbf69",
                  "&:hover": {
                    bgcolor: "#e12454",
                    boxShadow: "0 4px 16px 0 #e12454",
                  },
                  color: "black",
                  borderRadius: "50%",
                  p: "0px",
                  ml: "30px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  transition: "box-shadow 0.1s",

                  width: { md: "70px", sm: "60px", xs: "40px" },
                }}
              >
                <PlayArrowIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ position: "relative" }}>
          <Box sx={{ width: "100%" }}>
            <img src="slide2.jpg" alt="" style={{ height: "700px" }} />
          </Box>
          <Box>
            <Typography
              className={showTypography ? "typographyAnimation" : ""}
              sx={{
                position: "absolute",
                top: "165px",
                left: { md: "100px", sm: "10px", xs: "10px" },
                zIndex: 100,
                color: "#647589",
                backgroundColor: "transparent",
                padding: "10px",
                fontSize: { md: "18px", sm: "16px", xs: "14px" },
                fontFamily: "Rubik,sans-serif",
                fontWeight: "bold",
                animation: "fadeInUp 0.5s ease-in-out forwards",
                animationDelay: "0.2s",
              }}
            >
              We are here for your care.
            </Typography>
            <Typography
              className={showTypography ? "typographyAnimation" : ""}
              sx={{
                position: "absolute",
                top: "200px",
                left: { md: "100px", sm: "10px", xs: "10px" },
                zIndex: 100,
                color: "#223645",
                letterSpacing: "-2.3px",
                backgroundColor: "transparent",
                padding: "10px",
                fontSize: { md: "80px", sm: "50px", xs: "50px" },
                fontFamily: "Rubik,sans-serif",
                fontWeight: 600,
                width: { md: "600px", sm: "500px" },
                textAlign: "left",
                animation: "fadeInUp 0.5s ease-in-out forwards",
                animationDelay: "0.4s",
              }}
            >
              Best Care & Better Doctor.
            </Typography>
            <Typography
              className={showTypography ? "typographyAnimation" : ""}
              sx={{
                position: "absolute",
                top: "450px",
                left: { md: "100px", sm: "10px", xs: "10px" },
                zIndex: 100,
                color: "#647589",
                backgroundColor: "transparent",
                padding: "10px",
                fontSize: { md: "14px", sm: "12px", xs: "10px" },
                fontFamily: "Rubik,sans-serif",
                fontWeight: 400,
                lineHeight: "26px",
                width: { md: "550px", sm: "400px" },
                textAlign: "left",
                animation: "fadeInUp 0.5s ease-in-out forwards",
                animationDelay: "0.6s",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box
              className={showTypography ? "typographyAnimation" : ""}
              sx={{
                display: "flex",
                justifyContent: "left",
                position: "absolute",
                top: "550px",
                left: { md: "100px", sm: "10px", xs: "10px" },
                zIndex: 100,
                animation: "fadeInUp 0.5s ease-in-out forwards",
                animationDelay: "0.8s",

                height: { md: "80px", sm: "60px", xs: "60px" },
              }}
            >
              <IconButton
                sx={{
                  bgcolor: "#e12454",
                  "&:hover": { bgcolor: "#8fbf69" },
                  borderRadius: "50px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",

                  width: { md: "80%", sm: "200px", xs: "160px" },
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
                    fontSize: { md: "16px", sm: "14px", xs: "10px" },
                  }}
                >
                  Make Appointment
                </Button>
              </IconButton>
              <IconButton
                onClick={() => setModalIsOpen(true)}
                sx={{
                  bgcolor: "#8fbf69",
                  "&:hover": {
                    bgcolor: "#e12454",
                    boxShadow: "0 4px 16px 0 #e12454",
                  },
                  color: "black",
                  borderRadius: "50%",
                  p: "0px",
                  ml: "30px",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  transition: "box-shadow 0.1s",

                  width: { md: "80px", sm: "60px", xs: "40px" },
                }}
              >
                <PlayArrowIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
        </SwiperSlide>
        <Box
          className={`swiper-button-prev ${showButtons ? "show" : ""}`}
          onClick={goToPrevSlide}
          sx={{
            height: "80px",
            bgcolor: "white",
            width: "80px",
            borderRadius: "50%",
            "&:hover": {
              bgcolor: "#e12454",
              boxShadow: "0 4px 16px 0 #e12454",
            },
          }}
        >
          <IconButton
            sx={{
              height: "40px",
              ml: "20px",
              "&:hover": { "& svg": { color: "white" } },
            }}
          >
            <ArrowBackIcon sx={{ color: "#10111e", fontSize: "small" }} />
          </IconButton>
        </Box>
        <Box
          className={`swiper-button-next ${showButtons ? "show" : ""}`}
          onClick={goToNextSlide}
          sx={{
            height: "80px",
            bgcolor: "white",
            width: "80px",
            borderRadius: "50%",
            "&:hover": {
              bgcolor: "#e12454",
              boxShadow: "0 4px 16px 0 #e12454",
            },
          }}
        >
          <IconButton
            sx={{ height: "40px", ml: "20px", "&:hover": { color: "white" } }}
          >
            <ArrowForwardIcon
              sx={{
                color: "#10111e",
                fontSize: "small",
                "&:hover": { color: "white" },
              }}
            />
          </IconButton>
        </Box>
        <VideoModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        />
      </Swiper>
    </div>
  );
};

export default Slider;
