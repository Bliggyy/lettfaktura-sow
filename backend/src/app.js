const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("../src/routes/authRoute");
const pricelistRouter = require("../src/routes/pricelistRoute");
const translationRouter = require("../src/routes/translationRoute");

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
  }),
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", authRouter);
app.use("/api/pricelist", pricelistRouter);
app.use("/api/translate", translationRouter);

// Catch all route
app.use((req, res, next) => {
  res.status(404).json({
    status: "Fail",
    message: "Route not found",
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
