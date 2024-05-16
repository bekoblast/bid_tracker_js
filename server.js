const express = require("express");
const dotenv = require("dotenv").config();
const bidder_routes = require("./routes/bidderRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
//Routes
app.use("/api/bidders", bidder_routes);

//Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on PORT ${port}`);
});
