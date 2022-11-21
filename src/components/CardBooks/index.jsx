import {
  Paper,
  Box,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Card,
  Container,
} from "@mui/material";
const BookItem = ({ book }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        fontFamily: "'Quicksand', sans-serif",
        backgroundColor: "#00000d",
        color: "white",
        height:600
      }}
    >
      <Container>
        <CardMedia
          component="img"
          image={book.volumeInfo?.imageLinks?.thumbnail}
          sx={{ objectFit: "contain", width: "100%" }}
        />
      </Container>
      <CardContent sx={{ width: "90%" }}>
        <Box>
          <Typography
            variant="h5"
            className="titulo"
            sx={{ textAlign: "center", fontWeight: 900 }}
          >
            {book.volumeInfo?.title}
          </Typography>
          <Typography variant="h6">
            {" "}
            Autores:
            {book.volumeInfo.authors?.length > 0 &&
              book.volumeInfo.authors?.map((item) => (
                <Typography variant="p"> {item}, </Typography>
              ))}
          </Typography>
          <Typography variant="p">
            Fecha P: {book.volumeInfo?.publishedDate}
          </Typography>
          <Typography variant="h6" textAlign="justify">
            Descripcion:
          </Typography>
          <Container sx={{ height: 400, overflowY: "scroll", width: "100%" }} className="description">
            <Typography className="descripcion" sx={{ color: "skyblue" }}>
              {book.volumeInfo?.description}
            </Typography>
          </Container>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookItem;
