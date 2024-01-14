import express from "express";
import { PORT, db_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors())

app.get("/", (req, res) => {
  return res.status(234).send("Welcome");
});

app.use('/books', booksRoute)

mongoose
  .connect(db_URL)
  .then(() => {
    console.log("App is connected");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
