import express from "express";
import cors from "cors";
import { Books, BooksDetails } from "./books.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/knjige", (req, res) => {
  res.send(Books);
});

app.get("/knjige/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let Book = BooksDetails.find((book) => book.id == id);
  res.send(Book);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
