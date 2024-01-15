import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";
import cors from 'cors'
import booksRoute from './routes/booksRoute.js'

const app = express();

app.use(express.json());

app.use(cors())

app.get("/", (req, res) => {
  return res.status(234).send("Welcome");
});

app.use('/books', booksRoute)

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("App is connected");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
