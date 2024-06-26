import { Box, Typography } from '@mui/material'
import React from 'react'

export default function About() {
  return (
    <div>
     <Box 
     sx={{my:15,
      textAlign:"center",
      p:2,
      "$ h3":{
        fontSize:2,
        my:2,
        fontWeight:"bold",
        "& p":{
          textAlign:"center"
        }
      }
     }}>      
     <Typography variant='h3'>
      Wel Come To My Resturent
     </Typography>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore distinctio aliquam quae excepturi nulla ea dolorum, expedita dolorem ipsa sapiente consequatur eum natus iure numquam nostrum fugit voluptas obcaecati quod laboriosam? Ex, eveniet! Incidunt autem repellendus voluptatem. Reiciendis rerum distinctio repellendus accusantium deserunt ratione praesentium, voluptates quod nihil explicabo eaque atque unde debitis aliquid similique non? Eius, minus nulla autem ut at adipisci, exercitationem et nostrum odio ducimus animi itaque blanditiis sapiente laborum? Ducimus recusandae deleniti quis est enim ea rerum minus placeat fugit eaque. Qui aperiam modi ad sapiente eum quo perferendis maiores, recusandae dolor facilis porro! Eum, in.</p>
     <br/>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor distinctio laboriosam dignissimos molestiae consectetur earum aspernatur accusamus labore! Eveniet est vel vero magni. Culpa facere autem consequatur a, quod fuga mollitia, assumenda adipisci alias rem beatae perferendis? Natus impedit odit adipisci nihil beatae officiis, nesciunt sequi obcaecati explicabo? Rerum in earum dolorem dolorum possimus tempora impedit excepturi accusantium reiciendis aspernatur exercitationem eaque dicta unde nemo velit quaerat quae cum, necessitatibus, nulla molestias voluptates hic voluptatem? Velit ab odio aliquid ipsum dolor ad eius excepturi, libero, aut, repellat id. Distinctio cum assumenda debitis, delectus dolorum officiis sed ipsa aliquid corporis?</p>
     </Box>
    </div>
  )
}
