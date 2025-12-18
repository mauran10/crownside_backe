import { connectDB } from "../lib/mongo.js";
import Product from "../src/models/Product.js";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const products = await Product.find();
    return res.status(200).json(products);
  }

  res.status(405).json({ message: "Método no permitido" });
}
