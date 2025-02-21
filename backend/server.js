import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";

const app = express();

app.use(express.json());

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    console.error("product field not provided:", req.body);

    return res
      .status(400)
      .json({ success: false, message: "provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(`Error creating product: ${error.message}`);
    res.status(500).json({ success: false, message: "server error" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: `Product ${id} deleted` });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: `Product ${id} not found` });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:5000");
});
