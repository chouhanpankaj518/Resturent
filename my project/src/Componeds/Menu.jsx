
import React from 'react';
import {Data} from "../Data/Data"
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export default function Menu() {
  return (
    <div>
  <Box sx={{display:"flex",m:10,flexWrap:"wrap"}}>
     {
      Data.map((menu,index)=>(
        <Card key={index}  sx={{height:"500px",width:"300px",m:2, }} >
          <CardActionArea>
            <CardMedia component="img" sx={{minHeight:"400px",width:"300px"}} src={menu.image}/>
           <CardContent>
           <Typography variant='h4' >
              {menu.name}
            </Typography>
            <Typography sx={{fontSize:"10px"}}>
              {menu.description}
            </Typography>
            <Typography>
              {menu.price}
            </Typography>
           </CardContent>

          </CardActionArea>
        </Card>
      ))
     }
     </Box>
    </div>
  );
}
