import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { customer, items, total } = req.body;

    const order = new Order({
      customer,
      items,
      total
    });

    await order.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Error al crear orden" });
  }
};
