const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3334;

// Middlewares
app.use(cors());             // To allow frontend to call backend
app.use(express.json());     // To parse JSON request bodies

// Routes
const recommendationRoutes = require("./routes/recommendation");
app.use("/api", recommendationRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
