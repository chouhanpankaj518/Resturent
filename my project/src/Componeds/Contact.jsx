import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from "@mui/icons-material/Support"
import MailIcon from "@mui/icons-material/Mail"
import CallIcon from "@mui/icons-material/Call"
import React from 'react'

export default function Contact() {
  return (
    <div>
     <Box sx={{my:10,ml:10,"$  h4":{fontWeight:"bold",md:2}}}>
      <Typography variant='h4'>
        Contact My Resturent
      </Typography>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dignissimos suscipit ex necessitatibus, quod eum adipisci aspernatur quae blanditiis, quis ut, atque voluptatum nihil. Ab delectus numquam optio sed dolor illo voluptates dolorum nesciunt? Commodi accusamus, omnis libero earum, deserunt est cumque distinctio illum doloremque itaque ad voluptas, nihil totam!</p>
     </Box>
     <Box sx={{m:3,width:"600px",ml:30,"@media (max-width:600px)":{
      width:"300px",ml:10
     }}}>
    <TableContainer component={Paper}>
      <Table aria-label="contact table">
        <TableHead>
          <TableRow>
            <TableCell sx={{bgcolor:"black",color:"wheat",fontSize:'1rem'}} align='center'>
              Contact Details
            </TableCell>
          </TableRow>
        </TableHead>
<TableBody>
  <TableRow>
    <TableCell>
<SupportAgentIcon sx={{color:"darkred"}}/>1800-00-000


    </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>
      <MailIcon sx={{color:"skyblue"}}/>resturent123@gmail.com
    </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>
      <CallIcon sx={{color:"blue"}}/>7024398621
    </TableCell >
  </TableRow>
</TableBody>
      </Table>
    </TableContainer>
    
     </Box>
    </div>
  )
}
