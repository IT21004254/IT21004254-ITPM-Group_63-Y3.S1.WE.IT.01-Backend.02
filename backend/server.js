// server.js
require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");

const app = express();

var cors = require('cors')

app.use(cors())

// routes
const todo = require("./routes/todo"); // added

const clothesRoute = require("./routes/ClothRoutes"); // added
const foodsRoute = require("./routes/FoodRoutes"); // added

// connect database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes

app.use("/api/cloth", clothesRoute); // added
app.use("/api/food", foodsRoute); // added

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});