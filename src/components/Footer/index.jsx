import * as React from "react";
import {
    Box,
    AppBar,
    Typography
} from "@mui/material"

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", display: "flex", margin:0 }}>
      <AppBar position="static" sx={{ padding: 5 }}>
        <Typography sx={{ mr: 2, display: { xs: "none", sm: "block" } }}>
          © 2022 Tecsup - Alumno: Flores Jara, Diego
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Footer;
