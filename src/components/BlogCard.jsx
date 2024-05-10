import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCardActionArea = styled(CardActionArea)(
  ({ theme }) => `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
`
);

const BlogCard = ({
  image = "Blog.webp",
  title = "incididunt lorem ipsum dolor sit amet, cons adidis dicolo wiran.",
  sx
}) => {
  return (
    <Card
      sx={{
        maxWidth: { md: 400, sm: 500, xs: 300 },

        bgcolor: "#fff",
        mb: "30px",
        textAlign: "left",
        borderRadius: "0px",
        boxShadow: "none",
        px:"0px",
        ...sx,
      }}
    >
      <StyledCardActionArea>
        <CardMedia
          component="img"
          image={image} // Use prop value or default image
          alt={title}
          sx={{
            color: "transparent",
            height: "100%",
            width: "100%",
            margin: "auto", // Center the image horizontally
            display: "block", // Ensure block-level display
          }}
        />
        <CardContent sx={{ px: 0 }}>
          <Box sx={{ display: "flex", mt: "20px", mb: "15px" }}>
            <Box
              sx={{
                color: "#e12454",
                fontWeight: "400",
                display: "inline-block",
                textDecoration: "none",
                textAlign: "left",
                "&:hover": { cursor: "pointer" },
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Medical,
            </Box>
            <Box
              sx={{
                color: "#e12454",
                fontWeight: "400",
                display: "inline-block",
                textDecoration: "none",
                textAlign: "left",
                "&:hover": { cursor: "pointer" },
                fontSize: "14px",
                textTransform: "uppercase",
                ml: "30px",
              }}
            >
              Medicine
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "22px",
              letterSpacing: "-.3px",
              color: "#223645",
              mt: "0",
              fontWeight: "600",
              mb: "22px",
              lineHeight: " 1.1",
              textAlign: "left",
              "&:hover": { color: "#e12454" },
              width: "100%",
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
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "26px",
              color: "#647589",
              textAlign: "left",
            }}
            variant="body2"
          >
            consectetur adipisicing elit, lorem ipsum dolor sit amet, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Typography>
        </CardContent>
      </StyledCardActionArea>
    </Card>
  );
};

export default BlogCard;
