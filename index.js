require("dotenv").config();
const express = require("express"); // ini perlu

// init express server and router
const app = express();
const productRouter = require("./app/routes/product-routes");
const transactionRouter = require("./app/routes/transaction-routes");

app.use(express.json()); // supaya express bisa response json

// http router prefix
app.use("/api/products", productRouter);
app.use("/api/transaction", transactionRouter);

// Use PORT provided in environment or default to 3000
const port = process.env.APP_PORT || 3000;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", () => {
  console.log("Express API running in port: " + process.env.APP_PORT);
});
