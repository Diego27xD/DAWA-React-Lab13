import {
  Box,
  InputLabel,
  FormControl,
  MenuItem,
  Typography,
  Select,
  Container,
} from "@mui/material";
const DropDown = ({ type, handleChange, types }) => {
  return (
    <Box sx={{position: "absolute", top: "25%", left:400, right:400, backgroundColor:"rgb(51,108,165,0.2)", borderRadius:4, padding: 2}}>
      <Container sx={{padding: 5}}>
      <Typography variant="h4" mb={3} align="center"
        sx={{fontFamily: "'Pokemon Solid', sans-serif",fontSize:60}}>
        Selecciona algún tipo de pokémon
      </Typography>
      <FormControl fullWidth>
        <InputLabel sx={{fontWeight:800, backgroundColor:"transparent"}}>Tipos</InputLabel>
        <Select value={type} label="Tipos" onChange={handleChange} sx={{backgroundColor:"white"}}>
          {types.length > 0 &&
            types.map(({ url, name }) => (
              <MenuItem value={url}>{name}</MenuItem>
            ))}
        </Select>
      </FormControl>
      </Container>
    </Box>
  );
};

export default DropDown;
