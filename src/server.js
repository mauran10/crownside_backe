import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/products.routes.js";
import ordersRoutes from "./routes/orders.js";


dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use("/api/products", productRoutes);
app.use("/api/orders", ordersRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Error MongoDB:", err));

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
