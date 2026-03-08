const express = require("express");
const authRouter = require("../src/controller/authController");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Hello World",
  });
});

app.use("api/auth", authRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
