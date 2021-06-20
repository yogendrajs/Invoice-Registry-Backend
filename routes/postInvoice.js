const Invoice = require("../models/Invoice");

const postInvoice = async (req, res, next) => {
  try {
    // to add a new invoice
    let data = req.body || {};
    await new Invoice(data).save();

    // to return the full-list of invoices
    let fullList = await Invoice.find();
    return res.json(fullList);
  } catch (err) {
    console.log(err);
  }
};

module.exports = postInvoice;
