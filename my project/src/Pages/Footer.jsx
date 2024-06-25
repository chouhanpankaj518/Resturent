import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"
import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Box, Typography } from '@mui/material'
export default function Footer() {
  return (
    <div>
        <Box sx={{textAlign:"center",bgcolor:"black",color:"white",p:3}}>
            <Box sx={{my:3,"& svg":{
                fontSize:"50px",
                cursor:"pointer",
                mr:2,
                
            },"& svg:hover":{
                color:"goldenrod",
                transform:"translatex(5px)",
                transition:"all 400ms"
            }}}>
              <InstagramIcon/>
              <TwitterIcon/>
            <YouTubeIcon/>
            <GitHubIcon/>
            </Box>
            <Typography variant='h5' sx={{"@media (max-width:600px)":{ fontSize: "1rem"}}}>
         All Right Reserverd &copy Resturant.com 
            </Typography>
        </Box>
       
       
    </div>
  )
}
