const Router = require("express").Router();
const getInvoice = require("./getInvoice");
const postInvoice = require("./postInvoice");
const deleteInvoice = require("./deleteInvoice");

Router.get("/get", getInvoice);
Router.post("/post", postInvoice);
Router.delete("/delete", deleteInvoice);

module.exports = Router;
