/**
 * MAIN SERVER FILE
 */

const express = require("express");
const path = require("path");
const cors = require("cors");

const routes = require("./routes");

/**
 * INITIALIZE EXPRESS APP
 */
const app = express();

/**
 * SET PORT
 */
const port = process.env.PORT || 4000;

/**
 * BODY-PARSER CONFIGURATION
 */
app.use(express.json());

/**
 * SET CORS CONFIG
 */
app.use(cors());
app.options("*", cors());

// load environment variables
require("dotenv").config({ path: path.join(__dirname, "./.env") });

/**
 * INITIALIZE MONGODB DATABASE
 */
require("./config");

/**
 *  ADD ROUTES
 */

app.use("/api", routes);

/**
 * FALLBACK ROUTE
 */
app.use("*", (req, res) => {
  res.statusCode = 404;
  res.json("Invalid url");
});

/**
 * START THE SERVER
 */
app.listen(port, () => console.log(`server listening on port ${port}`));

app.timeout = 600000;
