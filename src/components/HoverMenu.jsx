import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import "./styles.css";

const HoverMenu = ({ menuItems, menuName }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsMenuVisible(true);
    setIsSubMenuVisible(true);
  };

  const handleMouseLeave = (e) => {
    // Check if the mouse is over the menu or the menu name
    if (!menuRef.current.contains(e.relatedTarget)) {
      setIsMenuVisible(false);
      setIsSubMenuVisible(false); // Hide submenu on menu leave
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Typography
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          fontSize: { lg: "14px", md: "12px" },
          color: "#647589",
          fontWeight: { lg: "600", md: "600" },
          padding: "48px 0px",
          "&:hover": { color: "#223645", cursor: "pointer" },
          mr: "20px",
        }}
      >
        {menuName}
      </Typography>
      <Box
        ref={menuRef}
        className={`menu-box ${isMenuVisible ? "menu-visible" : ""}`}
        sx={{
          position: "absolute",
          top: "calc(100% + 5px)", // Initial position
          width: "250px",
          boxShadow: "0 0 10px 3px rgba(0,0,0,.05)",
          p: "25px 0",
          left: 0,
          zIndex: 100000,
          bgcolor: "#fff",
          color: "black",
          textDecoration: "none",
          borderTop: "5px solid #e12454",
          listStyle: "none",
          opacity: isMenuVisible ? 1 : 0,
          transform: isMenuVisible ? "translateY(-5px)" : "translateY(0)", // Move upward on visibility
          transition: "transform 0.3s ease-in-out, opacity 0.4s ease-in-out", // Transition transform
        }}
      >
        <ul
        
        onMouseLeave={handleMouseLeave}
          style={{
            listStyle: "none",
            textAlign: "left",
            color: "#647589",
            fontWeight: "600",
            display: isSubMenuVisible ? "block" : "none",
            fontSize: "14px",
          }}
        >
          {menuItems.map((item, index) => (
            <li
              className="menu-list"
              key={index}
              style={{ paddingBottom: "20px" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default HoverMenu;
