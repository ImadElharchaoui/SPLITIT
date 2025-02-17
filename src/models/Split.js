import mongoose from "mongoose";

const SplitSchema = new mongoose.Schema({
  expense: { type: mongoose.Schema.Types.ObjectId, ref: "Expense", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amountOwed: { type: Number, required: true },
  amountPaid: { type: Number, default: 0 },
  settled: { type: Boolean, default: false },
});

export default mongoose.model("Split", SplitSchema);
