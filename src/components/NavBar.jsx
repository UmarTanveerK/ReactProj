import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from "@mui/icons-material/Menu";
import HoverMenu from "./HoverMenu";
import Drawer from "@mui/material/Drawer";
import MobileMenu from "./MobileMenu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import "./styles.css";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 200;
      setIsSticky(!isTop);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarClasses = isSticky ? "sticky visible" : ""; // Apply appropriate classes



  const DrawerList = (
    <Box
      sx={{ width: 250, bgcolor: "#22314b", px: "40px", height: "100%" }}
      role="presentation"
    >
      <CloseIcon
        sx={{
          mb: "15px",
          mt: "20px",
          fontSize: "30px",
          color: "#fff",
          "&:hover": { cursor: "pointer" },
          fontWeight: "400",
        }}
        onClick={toggleDrawer(false)}
      />
      <MobileMenu
        menuItems={[
          "Home Style 1",
          "Home Style 2",
          "Home Style 3",
          "Home Style 4",
          "Home Style 5",
        ]}
        menuName="Home"
      />
      <MobileMenu
        menuItems={["Service 01", "Service 02", "Service Details"]}
        menuName="Department"
      />
      <MobileMenu
        menuItems={["Doctors 01", "Doctors 02", "Doctors Details"]}
        menuName="Doctors"
      />
      <MobileMenu
        menuItems={[
          "Shop Page",
          "Shop Detail",
          "Shopping Cart",
          "Checkout",
          "Whishlist",
          "Login",
          "Register",
        ]}
        menuName="Shops"
      />
      <MobileMenu
        menuItems={[
          "Blog Right Sidebar",
          "Blog Left Sidebar",
          "Blog No Sidebar",
          "Blog 2 Column",
          "Blog 2 col Masonry",
          "Blog 3 Column",
          "Blog 3 Col Masonry",
          "Blog Details",
          "Details Left Sidebar ",
          "Details Audio ",
          "Details Video",
          "Details Gallery",
        ]}
        menuName="News"
      />
      <MobileMenu
        menuItems={[
          "About",
          "Appointment",
          "Portfolio 2 Column",
          "Portfolio 3 Column",
          "Portfolio Slider",
          "Contact",
        ]}
        menuName="Pages"
      />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position={isSticky ? "fixed" : "static"}
        className={navBarClasses}
        sx={{
          transition: "all 0.9s ease-in-out", // Ensure transition property is set
          opacity: 1,
          bgcolor: "white", // Initially set opacity based on isSticky
        }}
      >
        <Toolbar>
          <Box
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
              borderRadius: "10px",
              ml: { md: "50px", sm: "20px", xs: "0px" },
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Box
              sx={{
                width: { md: "244px", sm: "244px", xs: "120px" },
                display: "flex",
                height: { xs: "40px", sm: "60px", md: "80px" },
              }}
            >
              <Box
                sx={{
                  height: { xs: "80px", sm: "120px", md: "160px" },
                  zIndex: "1000",
                  mt: { md: "-40px", sm: "-30px", xs: "-20px" },
                }}
              >
                {" "}
                <img
                  loading="lazy"
                  src="p1.png"
                  alt=""
                  height="100%"
                  style={{
                    zIndex: "1001",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  ml: { md: "-30px", sm: "-20px", xs: "-10px" },
                  zIndex: "1000",
                  height: { xs: "40px", sm: "60px", md: "80px" },
                }}
              >
                {" "}
                <img loading="lazy" src="p2.png" alt="" height="100%" />
              </Box>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex", sm: "none" } }}>
            <HoverMenu
              menuItems={[
                "Home Style 1",
                "Home Style 2",
                "Home Style 3",
                "Home Style 4",
                "Home Style 5",
              ]}
              menuName="Home"
            />
            <HoverMenu
              menuItems={["Service 01", "Service 02", "Service Details"]}
              menuName="Department"
            />
            <HoverMenu
              menuItems={["Doctors 01", "Doctors 02", "Doctors Details"]}
              menuName="Doctors"
            />
            <HoverMenu
              menuItems={[
                "Shop Page",
                "Shop Detail",
                "Shopping Cart",
                "Checkout",
                "Whishlist",
                "Login",
                "Register",
              ]}
              menuName="Shops"
            />
            <HoverMenu
              menuItems={[
                "Blog Right Sidebar",
                "Blog Left Sidebar",
                "Blog No Sidebar",
                "Blog 2 Column",
                "Blog 2 col Masonry",
                "Blog 3 Column",
                "Blog 3 Col Masonry",
                "Blog Details",
                "Details Left Sidebar ",
                "Details Audio ",
                "Details Video",
                "Details Gallery",
              ]}
              menuName="News"
            />
            <HoverMenu
              menuItems={[
                "About",
                "Appointment",
                "Portfolio 2 Column",
                "Portfolio 3 Column",
                "Portfolio Slider",
                "Contact",
              ]}
              menuName="Pages"
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex", sm: "none" } }}>
            <Box
              size="large"
              color="inherit"
              sx={{ bgcolor: "transparent" }}
              onClick={() => window.open("https://www.facebook.com/", "_blank")}
            >
              <FacebookIcon
                sx={{
                  color: "#647589",
                  fontSize: "large",
                  "&:hover": { color: "#223645" },
                  mt: "35px",
                  ml: "10px",
                }}
              />
            </Box>
            <Box
              size="large"
              color="inherit"
              sx={{
                bgcolor: "transparent",
                "&:hover": { color: "#223645" },
                mt: "35px",
                ml: "10px",
              }}
              onClick={() => window.open("https://www.behance.com/", "_blank")}
            >
              <img src="bh.png" alt="" width="15px" height="15px" />
            </Box>
            <Box
              size="large"
              color="inherit"
              sx={{ bgcolor: "transparent" }}
              onClick={() => window.open("https://www.youtube.com/", "_blank")}
            >
              <YouTubeIcon
                sx={{
                  color: "#647589",
                  fontSize: "large",
                  "&:hover": { color: "#223645" },
                  mt: "35px",
                  ml: "10px",
                }}
              />
            </Box>
            <Box
              size="large"
              color="inherit"
              sx={{ bgcolor: "transparent" }}
              onClick={() => window.open("https://www.linkedin.com/", "_blank")}
            >
              <LinkedInIcon
                sx={{
                  color: "#647589",
                  fontSize: "large",
                  "&:hover": { color: "#223645" },
                  mt: "35px",
                  ml: "10px",
                }}
              />
            </Box>
            <Box
              size="small"
              color="inherit"
              sx={{ bgcolor: "transparent" }}
              onClick={() =>
                window.open("https://www.pinterest.com/", "_blank")
              }
            >
              <PinterestIcon
                sx={{
                  color: "#647589",
                  fontSize: "large",
                  "&:hover": { color: "#223645" },
                  mt: "35px",
                  ml: "10px",
                }}
              />
            </Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              sx={{ mr: "50px" }}
            >
              <img
                src="uk.jpg"
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  boxShadow: "0px 0px 8px 2px rgba(255, 0, 0, 0.2)",
                  border: "solid,white",
                }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              color: "#647589",
              display: { xs: "block", md: "none", sm: "block" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon onClick={toggleDrawer(true)} />
            </IconButton>
            <Drawer anchor="right" onClose={toggleDrawer(false)} open={open}>
              {DrawerList}
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
