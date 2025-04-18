require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api");
const path = require("path");
const { fileURLToPath } = require("url");

const app = express();

// Connect Database
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const corsOptions = {
  origin: "https://memo-tag-frontend.vercel.app", // Specify the allowed origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Include credentials like cookies
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api", apiRoutes);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
