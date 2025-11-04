import express from "express";
import Product from "../models/Product.js";
import cache from "../utils/cache.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cachedProducts = cache.get("products");

    if (cachedProducts) {
      console.log("⚡ Cache hit (in-memory)");
      return res.json(cachedProducts);
    }

    console.log("🕓 Cache miss — fetching from DB");
    const products = await Product.find();
    cache.set("products", products); // store in memory

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
