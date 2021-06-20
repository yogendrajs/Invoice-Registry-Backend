const Invoice = require("../models/Invoice");

const getHandler = async (req, res, next) => {
  try {
    const invoiceData = await Invoice.find();
    console.log(invoiceData);
    res.send(invoiceData);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getHandler;
