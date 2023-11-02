import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
// import dotenv from "dotenv";
// dotenv.config({path:"./config.env"});
import Commonrouter from "./router/common.js";
import Userrouter from "./router/userrouter.js";
import bodyParser from "body-parser";
app.use(express.json({ limit: "20mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/common", Commonrouter);
app.use("/user", Userrouter);
const port = 8000;
const db =
  "mongodb+srv://drohitk01:Shreeyaa98166@cluster0.uhgco9t.mongodb.net/sangeetstan";
mongoose
  .connect(db)
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log("started");
});
