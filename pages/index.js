import * as React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Badge, Paper } from '@mui/material'
import { Search } from "@mui/icons-material"

export default function Index() {
  return (
    <Box sx={{
      backgroundImage: "url('bg.png')",
      minHeight: "100vh",
      backgroundSize: "cover"
    }}>
      <AppBar position="static" sx={{ bgcolor: "white", color:"black"}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: "900", fontFamily: "sans-serif" }}>
            we🖤
          </Typography>
          <Box sx={{
            display: "flex", 
            width: "80%",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Typography sx={{m: 1, fontWeight: "bold"}}>Share your work</Typography>
            <Typography sx={{m: 1}}>Resources <Badge badgeContent={4} color="secondary" sx={{bgcolor: "grey", ml: 1, borderRadius: 1}}></Badge></Typography>
            <Typography sx={{m: 1}}>Artworks</Typography>
            <Typography sx={{m: 1}}>FAQs</Typography>
            <Typography sx={{m: 1}}>Icons</Typography>
          </Box>
          <Button endIcon={<Search/>}>Submit</Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h2" sx={{ textAlign: "center", fontWeight: "900"}}>
        with over 1.9M artworks.
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "200", fontSize: 30}}>
          Get known in IG's biggest design community.
      </Typography>

    </Box>
  );
}
