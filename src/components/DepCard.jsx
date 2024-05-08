import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCardActionArea = styled(CardActionArea)(
  ({ theme }) => `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
`
);

const StyledCardActions = styled(CardActions)(
  ({ theme }) => `
  display: flex;
  justify-content: center;
`
);

const DepCard = ({ image = "card1.webp", title = "Body Surgery" }) => {
  return (
    <Card
      sx={{
        maxWidth: { md: 300, sm: 500, xs: 300 },
        p: "53px",
        bgcolor: "#fff",
        mb: "30px",
        textAlign: "center",
        mx: "15px",
      }}
    >
      <StyledCardActionArea>
        <CardMedia
          component="img"
          image={image} // Use prop value or default image
          alt={title} // Alt text set to title
          sx={{
            color: "transparent",
            maxHeight: "122px",
            maxWidth: "120px",
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
              mb: "22px",
              lineHeight: " 1.1",
              textAlign: "center",
              "&:hover": { color: "#8fbf69" },
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
              textAlign: "center",
            }}
            variant="body2"
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </Typography>
        </CardContent>
      </StyledCardActionArea>
      <StyledCardActions>
        <Box
          sx={{
            color: "#647589",
            fontWeight: "600",
            display: "inline-block",
            textDecoration: "none",
            textAlign: "center",
            "&:hover": { color: "#8fbf69", cursor: "pointer" },
            fontSize: "14px",
          }}
        >
          Read More
        </Box>
      </StyledCardActions>
    </Card>
  );
};

export default DepCard;
