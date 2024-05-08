import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledCardActionArea = styled(CardActionArea)(
  ({ theme }) => `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
`
);

const TeamCard = ({
  image = "founder.webp",
  title = "Rosalina D. Williamson",
  Role = "FOUNDER",
}) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: { md: 300, sm: 500, xs: 300 },
          p: "53px",
          bgcolor: "#fff",
          mb: "30px",
          textAlign: "center",
          mx: "15px",
          boxShadow: "none",
        }}
      >
        <StyledCardActionArea sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={image} // Use prop value or default image
            alt={title} // Alt text set to title
            sx={{
              color: "transparent",
              maxHeight: {md:"270px",sm:"200px",xs:"150px"},
              maxWidth: {md:"270px",sm:"200px",xs:"150px"},
              margin: "auto", // Center the image horizontally
              display: "block", // Ensure block-level display
            }}
          />
          <CardContent>
            <Typography
              sx={{
                fontSize: "26px",
                letterSpacing: "-.3px",
                color: "#223645",
                mt: "0",
                fontWeight: "600",
                mb: "17px",
                lineHeight: " 1.1",
                textAlign: "center",
                "&:hover": { color: "#8fbf69" },
                maxWidth:"100%"
              }}
              gutterBottom
              variant="h3"
              component="div"
            >
              {title} {/* Use prop value or default title */}
            </Typography>
            <Typography
              sx={{
                mb: "15px",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "26px",
                color: "#e12454",
                textAlign: "center",
                maxWidth:"100%"
              }}
              variant="body2"
            >
              {Role}
            </Typography>
          </CardContent>
          <Box
            sx={{
              position: "absolute",
              bottom: "140px",
              right: "0px",
              zIndex: "1000",
            }}
          >
            <IconButton
              sx={{
                bgcolor: "#8fbf69",
                "&:hover": {
                  bgcolor: "#e12454",
                },
                color: "black",
                borderRadius: "50%",
                p: "0px",
                ml: "30px",
                transition: "box-shadow 0.1s",

                width: { md: "60px", sm: "50px", xs: "40px" },
                height: { md: "60px", sm: "50px", xs: "40px" },
              }}
            >
              <AddIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </StyledCardActionArea>
      </Card>
    </>
  );
};

export default TeamCard;
