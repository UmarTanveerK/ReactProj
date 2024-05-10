import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';

const FooterCard = () => {
  return (
    <Grid sx={{backgroundColor:"#fff", p:"50px",width:"35%",borderRadius:"30px", position:"absolute" , bottom:"100px",boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2)"}}>
        <Grid sx={{display:"block"}}>
            <Grid sx={{display:"flex",borderBottom:"2px solid #edf3f7"}}>
                <PhoneEnabledIcon sx={{fontSize:"44px",color:"#e12454",mr:"30px"}}/>
                <Grid sx={{display:"block"}}>

                    <Typography variant='h6' sx={{fontWeight:"400", color:"#647589", fontSize:"14px", textAlign:"left"}}>Emergency number</Typography>
                    <Typography sx={{fontSize:"36px",fontWeight:"600",color:"#13232f",pb:"20px"}}>202-555-0104</Typography>
                </Grid>
            </Grid>
            <Grid
  sx={{
    justifyContent: "flex-start", // Align items horizontally to the left
    alignItems: "left", // Align items vertically in the center
  }}
>
  <Box
    sx={{
      height: "80px",
      zIndex: "1000",
      mt: "30px",
      mr:"250px",
      mb:"30px"
    }}
  >
    <img
      loading="lazy"
      src="FooterLogo.webp"
      alt=""
      height="80px"
      style={{
        zIndex: "100",
      }}
    />
  </Box>
</Grid>
            <Grid>
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
            incididunt lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </Typography>
            </Grid>
              <Grid sx={{display:"flex" , mb:"12px"}}>
              <EmailOutlinedIcon sx={{ fontSize: "20px", mr: "7px" , color:"#647589" , mt:"5px"}} />
          <Typography
            sx={{
              fontSize: "18px",
              color: "#647589",
              fontWeight: 400,
              fontStyle: "normal",
              fontFamily: "Rubik,sans-serif",
            }}
          >
              info@examplemedical.com
          </Typography>
              </Grid>
              <Grid sx={{display:"flex" , mb:"12px"}}>
              <FilterNoneOutlinedIcon sx={{ fontSize: "20px", mr: "7px" ,color:"#647589" , mt:"5px" }} />
          <Typography
            sx={{
              fontSize: "18px",
              color: "#647589",
              fontWeight: 400,
              fontStyle: "normal",
              fontFamily: "Rubik,sans-serif",
            }}
          >
              examplemedical.com
          </Typography>
              </Grid>
              <Grid sx={{display:"flex" , mb:"12px"}}>
              <EmojiFlagsIcon sx={{ fontSize: "20px", mr: "7px", color:"#647589" , mt:"5px" }} />
          <Typography
            sx={{
              fontSize: "18px",
              color: "#647589",
              fontWeight: 400,
              fontStyle: "normal",
              fontFamily: "Rubik,sans-serif",
            }}
          >
              227 Marion Street, Columbia
          </Typography>
              </Grid>
        </Grid>
    </Grid>
  )
}

export default FooterCard
