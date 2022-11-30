import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import bank from "./route.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(cors());

app.use("/api/bank", bank);

mongoose
  .connect(
    
    "mongodb+srv://kaviya:kaviya2001@cluster0.mhnbbgn.mongodb.net/bank?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("db connected as bank"))
  .catch((err) => {
    console.error(err), process.exit();
  });

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log("server is running on port 9000");
});
