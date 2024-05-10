import { Grid  } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';

const BlogBarCard = ({
  text = "consectetur lorem ipsum dolor sit amet, adidis.",
  FullDate = "23 August 2023",
  NoOfComments = "22"
}) => {
  return (
    <Grid sx={{px:"40px" , pt:"40px" , display:"block" ,}}>
      <Typography
            sx={{
              fontSize: "24px",
              letterSpacing: "-.3px",
              color: "#223645",
              mt: "0",
              fontWeight: "600",
              mb: "22px",
              lineHeight: " 1.3",
              textAlign: "left",
              "&:hover": { color: "#e12454" , cursor:"pointer" },
              width: "300px",
            }}
            gutterBottom
            variant="h3"
            component="div"
          >
            {text}
          </Typography>
          <Typography
          sx={{
            display: "flex",
            color: "#647589",
            alignItems: "center",
            borderBottom:"2px solid #edf3f7",
            pb:"22px"
          }}
        >
          <CalendarTodayIcon sx={{ fontSize: "medium", mr: "5px" }} />
          <Typography
            sx={{
              fontSize: "14px",
              color: "#647589",
              fontWeight: 400,
              fontStyle: "normal",
              fontFamily: "Rubik,sans-serif",
            }}
          >
            {FullDate}
          </Typography>
          <QuestionAnswerRoundedIcon sx={{ fontSize: "medium", mr: "5px" , ml:"20px" }} />
          <Typography
            sx={{
              fontSize: "14px",
              color: "#647589",
              fontWeight: 400,
              fontStyle: "normal",
              fontFamily: "Rubik,sans-serif",
            }}
          >
            {NoOfComments} Comments
          </Typography>
        </Typography>
    </Grid>
  )
}

export default BlogBarCard
