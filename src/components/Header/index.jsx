import React from "react";
import { Container, Card, CardMedia, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Card maxWidth="100%">
      <CardMedia
        component="img"
        height={600}
        image="/pokemonfondo.jpg"
        alt="pokemon"
      ></CardMedia>
    </Card>
  );
};

export default Header;
