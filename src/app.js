const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Global Error Handler
app.use(errorHandler);

module.exports = app;