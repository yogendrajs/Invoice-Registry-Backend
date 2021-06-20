const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// invoice-schema
const InvoiceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    basicCost: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    discountAmount: {
      type: Number,
      required: true,
    },
    finalBasicCost: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    taxAmount: {
      type: Number,
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// invoice-model
const Invoice = mongoose.model("Invoice", InvoiceSchema);
module.exports = Invoice;
