const express = require("express");
require("dotenv").config();
const authRouter = require("../src/routes/authRoute");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Hello World",
  });
});

app.use("/api/auth", authRouter);

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
