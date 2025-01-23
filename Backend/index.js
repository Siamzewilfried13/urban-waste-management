const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors

require("./config/db");
require("dotenv").config();

const userRoutes = require("./routes/userRoute");
const loginRoutes = require("./routes/loginRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Define routes
app.use("/api/user", userRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/feedback", feedbackRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
