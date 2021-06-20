const Invoice = require("../models/Invoice");

const deleteInvoice = async (req, res, next) => {
  try {
    // to delete the invoice with the respective invoiceId
    console.log('hhello dele',req.body);
    let invoiceId = req.body.invoiceId;
    await Invoice.findByIdAndDelete(invoiceId);
    let updatedInvoices = await Invoice.find();
    return res.json(updatedInvoices);
  }
  catch(err) {
    console.log(err);
  }
}

module.exports = deleteInvoice;
