import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id_producto: String,
  nombre: String,
  precio: Number,
  stock: Number,
  descripcion: String,
  imagenUrl: String,
  categoria: String,
  imagenesAdicionales: Array
});

export default mongoose.model("Product", productSchema);
