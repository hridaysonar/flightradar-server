// Console Clear Start
console.clear();
// Console Clear End
const mongoose = require("mongoose");
const config = require("./app/config");

const express = require("express");
const router = require("./app/router");
const app = express();
const cors = require("cors");
app.use(cors());
// Middlewares
app.use(express.json());
app.get("/", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Server is Up and Running",
    version: "1.0.2"
  });
});
app.use("/api/v1", router);

async function main() {
  try {
    await mongoose.connect(config.DB_URL);
    console.log("Database Connected Successful");
    app.listen(config.PORT, () => {
      console.log(`Server is Running ${config.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
main();

module.exports = app;
