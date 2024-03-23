const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleWare/error.middleware");
const cookieParser = require("cookie-parser");
const path = require("path");
const { sequelize } = require("./models")

// Import route files
const userRoutes = require('./routes/users.route');
const productRoutes = require('./routes/products.route');
const orderRoutes = require('./routes/orders.route');

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use route middleware
app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Middleware
app.use(errorHandler);
// Connect to DB and start server
const PORT = process.env.PORT || 5000;

// sequelize.sync({ force: true });
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
