import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Divider, Drawer, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import "./Header.css"
import { Link ,NavLink} from 'react-router-dom';
import { useState } from 'react';
export default function Header() {
  const [mobileopen, setmobileopen] = useState(false)
  const henddraertoggle = () => {
    setmobileopen(!mobileopen)
  }
  const drawer = (
    <Box onClick={henddraertoggle} sx={{ textAlign: "center" }}>
      <Typography color="goldenrod" sx={{
        flexGrow: 1, my: 2,
        fontSize: {
          xs: 20, // font size at the smallest breakpoint
          sm: 20, // font size at the small breakpoint
          xl: 50  // font size at the extra-large breakpoint
        }
      }} >
        <FastfoodIcon />
        Resturaint
      </Typography>
        <InputBase />
      <Divider />
      <ul className='mobile-navigation' >
        <li>
          <Link to={"/Home"}>Home</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/Menu"}>Menu</Link>
        </li>
      </ul>
  </Box>
  )
  return (
    <div>
      <AppBar component={"div"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton color="inherit" sx={{ display: { xl: "block", sm: "none" } }} aria-label='open drawer' edge="start" onClick={henddraertoggle}>
            <MenuIcon />
          </IconButton>
          <Typography color="goldenrod" sx={{
            flexGrow: 1,
            fontSize: {
              xs: 10, // font size at the smallest breakpoint
              sm: 20, // font size at the small breakpoint
              xl: 50  // font size at the extra-large breakpoint
            }
          }} >
           <InputBase/>
            <FastfoodIcon/>
            Resturaint
          </Typography>
          <Box sx={{ mr: 2, display: { xs: "none", sm: "block" } }}>

            <ul className='navigation-bar' >
              <li>
                <NavLink activeclassname="active" to={"/Home"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/About"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/Contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/Menu"}>Menu</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>

      </AppBar>
      <Box component="nav">
        <Drawer varient="temporary" 
        open={mobileopen} onClose={henddraertoggle}
         sx={{ display: { xs: "block", sm: 'none' },
         "&.MuiDrawer-paper": { boxSizing: "border-box",
          width: "240px", } }}>

          {drawer}
        </Drawer>
        <Box >
          <Toolbar />
        </Box>
      </Box>
   </div>
  )
}