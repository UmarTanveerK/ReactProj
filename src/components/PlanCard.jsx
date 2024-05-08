import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button, IconButton} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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

const PlanCard = ({ image = "pro.webp", title = "Professional" , price = "489.00" }) => {
  return (
    <Card
      sx={{
        maxWidth: { md: 800, sm: 500, xs: 300 },
        p: "53px",
        bgcolor: "#fff",
        mb: "30px",
        textAlign: "left",
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
            maxHeight: "200px",
            maxWidth: "120px",
          }}
        />
        <CardContent>
          <Typography
            sx={{
              fontSize: "40px",
              letterSpacing: "-.3px",
              color: "#223645",
              mt: "0",
              fontWeight: "600",
              mb: "15px",
              lineHeight: " 1.1",
              textAlign: "left",
            }}
            gutterBottom
            variant="h1"
            component="div"
          >
            {title} {/* Use prop value or default title */}
          </Typography>
          <Typography
            sx={{
              mb: "23px",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "26px",
              color: "#647589",
              textAlign: "left",
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
          <IconButton
            sx={{
              display: { md: "flex", sm: "flex", xs: "flex" , justifyContent:"space-between" },
              bgcolor: "#e12454",
              "&:hover": { bgcolor: "#8fbf69" },
              borderRadius: "50px",
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",

              width: { md: "280px", sm: "280px" },
              height: "57px",
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
                width:"11px",
                height:"11px",
              }}
            />
            <Button
              sx={{
                color: "white",
                letterSpacing: "1px",
                fontSize: { md: "16px", sm: "12px", xs: "10px" },
                pr:"60px"
              }}
            >
              Price : $ {price}
            </Button>
          </IconButton>
        </Box>
      </StyledCardActions>
    </Card>
  );
};

export default PlanCard;
