import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./styles.css";

const MobileMenu = ({ menuItems, menuName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: "inline-block" }}>
      <Box
        sx={{
          display: "flex",
          height: "36px",
          position: "relative",
          mb: "15px",
        }}
      >
        <Typography
          onClick={toggleMenu}
          sx={{
            fontSize: "14px",
            color: "#fff",
            borderTop: "1px solid #33445d",
            borderBottom: "1px solid #33445d",
            fontWeight: { lg: "400", md: "400" },
            "&:hover": { cursor: "pointer" },
            textAlign: "left",
            bgcolor: "transparent",
            width: "230px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuName}
        </Typography>
        <IconButton
          onClick={toggleMenu}
          sx={{ border: "1px solid #33445d", borderRadius: "0px" }}
        >
          {isOpen ? (
            <RemoveIcon
              sx={{ color: "#fff", fontSize: "20px", bgcolor: "transparent" }}
            />
          ) : (
            <AddIcon
              sx={{ color: "#fff", fontSize: "20px", bgcolor: "transparent" }}
            />
          )}
        </IconButton>
        {isOpen && (
          <Box
            sx={{
              bgcolor: "#22314b",
              position: "absolute",
              top: "100%",
              width: "310px",
              right: "0px",
              zIndex: 100000,
              color: "black",
              textDecoration: "none",
              listStyle: "none",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                textAlign: "left",
                color: "#b6b9c0",
                fontWeight: "400",
                display: "block",
                fontSize: "14px",
              }}
            >
              {menuItems.map((item, index) => (
                <li
                  className="menulist"
                  key={index}
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "5px",
                    borderBottom: "1px solid #33445d",
                    paddingLeft: "20px",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default MobileMenu;
