import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";

const CardPokemons = ({ pokemons }) => {
  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
      {pokemons.length > 0 &&
          pokemons.map(({ pokemon }) => (
            <ImageListItem key={pokemon.name}>
              <Card>
                <CardMedia
                  component="img"
                  src={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    pokemon.url.split("/")[6]
                  }.svg?w=248&fit=crop&auto=format`}
                  srcSet={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    pokemon.url.split("/")[6]
                  }.svg?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={pokemon.name}
                  loading="lazy"
                />
                <CardContent>
                  <Typography variant="body1">{pokemon.name}</Typography>
                  <Button>Ver detalle</Button>
                </CardContent>
              </Card>
            </ImageListItem>
          ))}
      </ImageList>

      {/* <Grid container spacing={3}>
        {pokemons.length > 0 &&
          pokemons.map(({ pokemon }) => (
            <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia
                  component="img"
                  width={200}
                  height={300}
                  image={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    pokemon.url.split("/")[6]
                  }.svg`}
                />
                <CardContent>
                  <Typography variant="body1">{pokemon.name}</Typography>
                  <Button>Ver detalle</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid> */}
    </Box>
  );
};

export default CardPokemons;
