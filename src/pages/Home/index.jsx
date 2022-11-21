import { useState, useEffect } from "react";
import { CardPokemons, DropDown, Footer, Header, Navbar } from "../../components";
import { Container } from "@mui/material";
import { get } from "../../services";
import "../../App.css";

const Home = () => {
  const [type, setType] = useState("https://pokeapi.co/api/v2/type/1/");

  const [types, setTypes] = useState([]);

  const [pokemons, setPokemons] = useState([]);

  async function getTypes() {
    const types = await get("type");
    setTypes(types.results);

    await getPokemons(type);
  }

  async function getPokemons(url) {
    const id = url.split("/");
    const pokemons = await get(`type/${id[id.length - 2]}`);
    setPokemons(pokemons.pokemon);
  }

  const handleChange = (event) => {
    setType(event.target.value);
    getPokemons(event.target.value);
  };

  useEffect(() => {
    // llamo a la funciona
    getTypes();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <DropDown type={type} handleChange={handleChange} types={types} />
      <Container maxWidth="100%">
        <CardPokemons pokemons={pokemons} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
