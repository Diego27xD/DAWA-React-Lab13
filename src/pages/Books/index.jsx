import { useState } from "react";
import { searchBooks } from "../../services";
import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  TextField,
  Grid,
  CardMedia,
  Typography,
} from "@mui/material";
import { BookItem, Footer, Navbar } from "../../components";

export const Books = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const books = await searchBooks(search);
    setBooks(books.items);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "10%",
            left: 400,
            right: 400,
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          Buscar libro
        </Typography>
        <CardMedia
          component="img"
          image="https://images.pexels.com/photos/415078/pexels-photo-415078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          sx={{ height: 400, objectFit: "cover", opacity: 1 }}
        />
      </Container>
      <Container
        maxWidth="md"
        sx={{
          position: "absolute",
          top: "25%",
          left: 400,
          right: 400,
          backgroundColor: "rgb(51,108,165,0.2)",
        }}
      >
        <Box my={4}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Buscar un libro"
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  size="small"
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    onClick={handleSearch}
                    size="large"
                    variant="contained"
                  >
                    Buscar
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          {books.length > 0 &&
            books.map((book, index) => (
              <Grid xs={12} sm={6} sx={{ padding: 2 }}>
                <BookItem key={index} book={book} />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Footer/>
    </>
  );
};
export default Books;
