const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3000;

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require:true
  },
  price: Number,
  description: String,
  createAt: {
    type: Data,
    default:Date.now,
},
});

const Product = mongoose.model("Product", productSchema);


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/testProductDB");
    console.log("bd is Connected ");
  } catch (error) {
    console.log("bd is not Connected ");
    console.log(error.message);
    process.exit(1);
  }
};

app.listen(port, async () => {
  console.log(`Server is Running at http://localhost:${port}`);
  await connectDB();
});

app.get("/", (req, res) => {
  res.send("Welcome to home Page .");
});
