import * as React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Badge, Paper, IconButton } from '@mui/material'
import { Menu, Apps, FacebookRounded, Twitter, Forward10Outlined, ArrowForward } from "@mui/icons-material"

export default function Index() {
  return (
    <Box sx={{
      backgroundImage: "url('bg2.svg')",
      minHeight: "100vh",
      backgroundSize: "cover",
      fontFamily: "Times New Roman"
    }}>
      <AppBar position="static" sx={{ bgcolor: "white", color:"black"}} elevation={0}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: "900", fontFamily: "serif" }}>
            K
          </Typography>
          <Box sx={{
            display: "flex", 
            width: "80%",
            alignItems: "center",
            justifyContent: "flex-end"
          }}>
            <IconButton><Apps/></IconButton>
            <IconButton><Menu/></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Typography variant="h1" sx={{ textAlign: "center", textDecoration: "underline", mt: 5, fontFamily: "Times New Roman", fontWeight: "200"}}>
          Banana
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", fontWeight: "200", textDecoration: "italics", fontFamily: "Times New Roman"}}>
          Fruits
      </Typography>

      <Box sx={{position: "absolute", bottom: "15%", center: 0, left: "42%"}}>
          <Button sx={{bgcolor: "black", color: "white", borderRadius: "20px", px: 5}}>Download ZIP</Button>
      </Box>

      <Box sx={{position: "absolute", top: "10%", left: "5%", width: "20%"}}>
      <Typography variant="body1" sx={{textDecoration: "underline", mt: 25, fontFamily: "Times New Roman", fontWeight: "200"}}>
            FUN FACTS
        </Typography>
        <table>
        <tr>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        </table>
        <Typography variant="body1">lrorem ipsum lrorem ipsum <b>loren</b> lrorem ipsuml rorem ipsumlrorem ipsumlrorem ipsumlrorem ipsum</Typography>
        <Box sx={{display: "flex"}}>
          <Typography sx={{ fontWeight: "200", fontFamily: "Times New Roman", mr: 1}}><i>View Screenshots</i></Typography>
          <IconButton size="small" sx={{bgcolor: "black", color: "#ffdb15"}}><ArrowForward /></IconButton>
        </Box>

      </Box>

      <Box sx={{position: "absolute", top: "10%", right: "5%"}}>
        <Typography variant="h3"  sx={{ mt: 20, fontFamily: "Times New Roman", fontWeight: "900"}}>
          50
        </Typography>
        <Typography sx={{ fontWeight: "200", fontFamily: "Times New Roman", mr: 1}}><i>Photos</i></Typography>
        <Typography variant="h3"  sx={{ fontFamily: "Times New Roman", fontWeight: "900"}}>
          PSD, JPG
        </Typography>
        <Typography sx={{ fontWeight: "200", fontFamily: "Times New Roman", mr: 1}}><i>Formats</i></Typography>
        <Typography variant="h3"  sx={{ fontFamily: "Times New Roman", fontWeight: "900"}}>
          5000px x 3000px
        </Typography>
        <Typography sx={{ fontWeight: "200", fontFamily: "Times New Roman", mr: 1}}><i>Sizes</i></Typography>
      </Box>

      <Box sx={{bottom: 0, position: "absolute", p: 5, display: "flex", justifyContent: "space-between", width: "100%"}}>
        <Typography sx={{ textAlign: "center", fontWeight: "200", fontFamily: "Times New Roman"}}><i>Connect with us</i></Typography>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography sx={{ textAlign: "center", fontWeight: "200", fontFamily: "Times New Roman", mr: 1}}><i>Share</i></Typography>
          <IconButton><FacebookRounded /></IconButton>
          <IconButton><Twitter /></IconButton>
        </Box>
      </Box>

    </Box>
  );
}
