require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/trips", require("./routes/tripRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

app.get("/api/test", (req, res) => {
  res.send("Backend is working!");
});