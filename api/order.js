import { connectDB } from "../lib/mongo";
import Order from "../src/models/Order";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const order = await Order.create(req.body);
      return res.status(201).json(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "GET") {
    const orders = await Order.find().sort({ date: -1 });
    return res.status(200).json(orders);
  }

  res.status(405).json({ message: "Método no permitido" });
}
