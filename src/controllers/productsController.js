import Product from "../models/Product.js";

// Obtener productos
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Descontar stock
export const checkout = async (req, res) => {
  const { items } = req.body;

  try {
    for (const item of items) {
      const product = await Product.findById(item.id);

      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `Stock insuficiente para ${product.name}`
        });
      }

      product.stock -= item.quantity;
      await product.save();
    }

    res.json({ message: "Compra realizada" });
  } catch (error) {
    res.status(500).json({ message: "Error en checkout" });
  }
};
