import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  group: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  paidBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  splitAmong: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  splits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Split" }], // References to how expense is split
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Expense", ExpenseSchema);
