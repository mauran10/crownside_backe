import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  paypalOrderId: String,
  payerName: String,
  payerEmail: String,
  products: Object,
  total: Number,
  status: String,
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);
