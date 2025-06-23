import express from "express";
import Product from "./models/product.model.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoute);
app.listen(5000, () => {
    connectDB();
    console.log("Server started at port 5000")
});