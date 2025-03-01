import Product from "../models/Product.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("error fetching products: ", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const createProduct = async (req, res) => {
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
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  console.log({ product });

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "invalid id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    if (!updatedProduct) {
      console.error(`Product ${id} not found`);

      return res
        .status(404)
        .json({ success: false, message: `Product ${id} not found` });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
      message: `${updatedProduct.name} updated`,
    });
  } catch (error) {
    console.error("error updating product: ", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      console.error(`Product ${id} not found`);

      return res
        .status(404)
        .json({ success: false, message: `Product ${id} not found` });
    }

    res.status(200).json({
      success: true,
      message: `${deletedProduct.name} deleted`,
    });
  } catch (error) {
    console.error(`error deleting Product ${id}: `, error.message);
    res.status(500).json({ success: false, message: `server error` });
  }
};
